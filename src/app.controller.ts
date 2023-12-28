import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('')
  getHello(): string {
    return 'Hello world';
  }

  @Get('/health')
  health(): string {
    return 'Health Check !!';
  }
}
