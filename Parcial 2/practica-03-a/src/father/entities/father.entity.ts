import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Father {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  nombre: string;

  @Field(() => String)
  tipoDeSangre: string;

  @Field(() => String)
  observaciones: string;
}
