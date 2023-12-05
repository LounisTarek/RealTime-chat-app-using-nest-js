import { UsePipes, ValidationPipe } from "@nestjs/common";
import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { IsNotEmpty, IsString } from "class-validator";
import { Socket, Server } from 'socket.io';

class ChatMessages {
    @IsNotEmpty()
    @IsString()
    message: string;
}

@WebSocketGateway(
    {
        cors: {
            origin: '*',
        },
    }
)
export class ChatGeteway{

    @WebSocketServer()
    server: Server;

    @SubscribeMessage('ChatMessage')
    @UsePipes(new ValidationPipe())
    handleMessage(  @MessageBody() message: ChatMessages,
                    @ConnectedSocket() _client: Socket,){
            
            this.server.emit('ChatMessage', {
                ...message,
                time: new Date().toUTCString(),
            });
        
    }

}