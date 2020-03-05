import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { UserServerService } from './user-server/user-server.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [AppService, UserServerService],
})
export class AppModule {}
