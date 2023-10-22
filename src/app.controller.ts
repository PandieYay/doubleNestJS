import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { UtilService } from './service/utils.service';
import { NumberDto } from './dto/number.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly utilService: UtilService
    ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("/api/test")
  @UsePipes(ValidationPipe)
  returnDouble(@Body() numberDto: NumberDto): number {
    return this.utilService.double(numberDto);
  }
}
