import { Controller, Get, Post, Put, Delete,Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
    // return "Hi Welcome to first program of NestJs";
  }

  // @Get(':name')
  // getHelloWordName(@Param() payload): string {
  //   // return this.appService.getHello();
  //   console.log(payload);
  //   return "My name is " + payload.name;
  // }
}
