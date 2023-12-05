import { Module } from '@nestjs/common';
import { ChatGeteway } from './chat.geteway';

@Module({
    providers:[ChatGeteway],
})
export class WebsocketsModule {}
