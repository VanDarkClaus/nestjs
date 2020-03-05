import { Controller,Get,Post,Param } from '@nestjs/common';
import { UserServerService } from '../user-server/user-server.service';


@Controller('cats')
export class CatsController {
  constructor(private readonly userServerService: UserServerService){}

    @Post()
    create() {
      return 'This action adds a new cat';
    }
  
    // @Get(':id')
    // findAll(@Param() params) {
    //   return params.id;
    // }

    @Get('user')
    dd() {
      return this.userServerService.findAll();
    }
}
