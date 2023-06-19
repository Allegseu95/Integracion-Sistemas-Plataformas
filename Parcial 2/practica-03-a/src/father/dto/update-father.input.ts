import { CreateFatherInput } from './create-father.input';
import { InputType, Field, PartialType, Int } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateFatherInput extends PartialType(CreateFatherInput) {
  @Field(() => Int)
  @IsNotEmpty()
  id: number;
}
