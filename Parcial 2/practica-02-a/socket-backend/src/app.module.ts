import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FatherModule } from './father/father.module';

import { MensajesWsModule } from './mensajes-ws/mensajes-ws.module';

@Module({
  imports: [FatherModule, MensajesWsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
