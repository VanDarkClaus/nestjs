import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {NestExpressApplication} from '@nestjs/platform-express'
import {join} from 'path'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  //配置静态资源目录
  app.useStaticAssets(join(__dirname,'..','public'),{
    prefix:'/static/'
  })
  //配置模板目录
  app.setBaseViewsDir('views')
  //配置模板引擎
  app.setViewEngine('ejs')
  await app.listen(3000);
}
bootstrap();
