import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FatherService } from './father.service';
import { Father } from './entities/father.entity';
import { CreateFatherInput } from './dto/create-father.input';
import { UpdateFatherInput } from './dto/update-father.input';

@Resolver(() => Father)
export class FatherResolver {
  constructor(private readonly fatherService: FatherService) {}

  @Mutation(() => Father)
  createFather(
    @Args('createFatherInput') createFatherInput: CreateFatherInput,
  ) {
    return this.fatherService.create(createFatherInput);
  }

  @Mutation(() => Father)
  demo(@Args('demo') createFatherInput: CreateFatherInput) {
    return this.fatherService.findOneName(createFatherInput.nombre);
  }

  @Query(() => [Father], { name: 'todos' })
  findAll() {
    return this.fatherService.findAll();
  }

  @Query(() => Father, { name: 'id' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.fatherService.findOne(id);
  }

  @Mutation(() => Father)
  updateFather(
    @Args('updateFatherInput') updateFatherInput: UpdateFatherInput,
  ) {
    console.log('dasd');
    return this.fatherService.update(updateFatherInput.id, updateFatherInput);
  }

  @Mutation(() => Father)
  removeFather(@Args('id', { type: () => Int }) id: number) {
    return this.fatherService.remove(id);
  }
}
