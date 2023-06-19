import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FatherModule } from './father/father.module';

@Module({
  imports: [FatherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
