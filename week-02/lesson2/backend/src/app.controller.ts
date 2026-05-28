import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('tasks')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('message')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getTasks() {
    console.log('request tasks');
    return [{id: 1}, {id: 2}, {id: 3}]
  }
}
