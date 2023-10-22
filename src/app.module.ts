import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UtilService } from './service/utils.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, UtilService],
})
export class AppModule {}
