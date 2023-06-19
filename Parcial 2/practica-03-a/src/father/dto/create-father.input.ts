import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateFatherInput {
  @Field(() => String)
  @IsNotEmpty()
  nombre: string;

  @Field(() => String)
  @IsNotEmpty()
  tipoDeSangre: string;

  @Field(() => String)
  @IsNotEmpty()
  observaciones: string;
}
