import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { WebsocketsModule } from './websockets/websockets.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath:join(__dirname , '..', 'static'),
    }),
    WebsocketsModule,
  ],
})
export class AppModule {}
