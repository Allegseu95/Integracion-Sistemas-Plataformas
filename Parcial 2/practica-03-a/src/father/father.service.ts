import { Injectable } from '@nestjs/common';
import { CreateFatherInput } from './dto/create-father.input';
import { UpdateFatherInput } from './dto/update-father.input';
import { Father } from './entities/father.entity';

@Injectable()
export class FatherService {
  private fathers: Father[] = [
    {
      id: 1,
      nombre: 'Carlos',
      tipoDeSangre: 'A+',
      observaciones: 'sin observaciones',
    },
    {
      id: 2,
      nombre: 'Benito',
      tipoDeSangre: 'O-',
      observaciones: 'esta enfermo',
    },
  ];

  create(createFatherInput: CreateFatherInput) {
    const father = new Father();
    father.id = this.fathers.length;
    father.nombre = createFatherInput.nombre;
    father.tipoDeSangre = createFatherInput.tipoDeSangre;
    father.observaciones = createFatherInput.observaciones;
    this.fathers.push(father);
    return father;
  }

  findAll() {
    return this.fathers;
  }

  findOne(id: number) {
    return this.fathers.find((item) => item.id === id);
  }

  findOneName(name: string) {
    return this.fathers.find((item) => item.nombre === name);
  }

  update(id: number, updateFatherInput: UpdateFatherInput) {
    const _father = this.findOne(id);
    _father.nombre = updateFatherInput.nombre;

    console.log('_father', _father);

    this.fathers = this.fathers.map((item) => {
      if (item.id === id) {
        return _father;
      }
      return item;
    });

    return _father;
  }

  remove(id: number) {
    return `This action removes a #${id} father`;
  }
}
