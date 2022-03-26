import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post('/token')
  async addToken(
    @Body('token') token: string,
    @Body('chainId')
    chainId: number,
  ) {
    console.log('sdshdjshh');
    const PairToken = await this.appService.getHello(token, chainId);

    return { token: PairToken };
  }

  @Get('/gettoken')
  async gethello(
    @Body('token') token: string,
    @Body('chainId')
    chainId: number,
  ) {
    const TokenData = await this.appService.getHello(token, chainId);
    return TokenData;
  }
}
