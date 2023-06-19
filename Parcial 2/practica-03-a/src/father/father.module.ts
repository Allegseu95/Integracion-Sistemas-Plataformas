import { Module } from '@nestjs/common';
import { FatherService } from './father.service';
import { FatherResolver } from './father.resolver';

@Module({
  providers: [FatherResolver, FatherService],
})
export class FatherModule {}
