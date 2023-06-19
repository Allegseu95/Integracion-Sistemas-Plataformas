import { Module } from '@nestjs/common';
import { MensajesWsService } from './mensajes-ws.service';
import { MensajesWsGateway } from './mensajes-ws.gateway';
import { FatherModule } from '../father/father.module';

@Module({
  providers: [MensajesWsGateway, MensajesWsService],
  imports: [FatherModule],
})
export class MensajesWsModule {}
