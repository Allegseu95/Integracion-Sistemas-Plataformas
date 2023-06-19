import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';
import { Father } from '../father/entities/father.entity';
import { FatherService } from '../father/father.service';

interface ConnectedClients {
  [id: string]: {
    socket: Socket;
    father: Father;
  };
}

@Injectable()
export class MensajesWsService {
  private connectedClients: ConnectedClients = {};

  constructor(private readonly fatherService: FatherService) {}

  async registerClient(client: Socket, name: string) {
    const father = this.fatherService.findOneByName(name);
    if (!father) {
      console.log('no encontrado en bd');
      throw new Error('Father no encontrado');
    }

    this.connectedClients[client.id] = {
      socket: client,
      father: father,
    };
  }

  removeClient(clientId: string) {
    delete this.connectedClients[clientId];
  }

  getConnectedClients(): string[] {
    // return Object.keys(this.connectedClients).length;
    // console.log(this.connectedClients)
    return Object.keys(this.connectedClients);
  }

  getStudentFullName(id: string) {
    return this.connectedClients[id].father.tipoDeSangre;
  }
}
