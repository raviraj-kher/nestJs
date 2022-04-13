import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
@Controller()
export class AppController {
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }
  // constructor(private readonly appService: AppService) {}
  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  //   // return "Hi Welcome to first program of NestJs";
  // }
  // @Get(':name')
  // getHelloWordName(@Param() payload): string {
  //   // return this.appService.getHello();
  //   console.log(payload);
  //   return "My name is " + payload.name;
  // }
}
