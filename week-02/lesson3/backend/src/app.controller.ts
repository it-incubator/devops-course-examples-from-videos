import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { pool } from './db';

@Controller('tasks')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('message')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  async getTasks() {
    const { rows } = await pool.query(
      'SELECT id, title, done FROM tasks ORDER BY id',
    );
    return rows;
  }
}
