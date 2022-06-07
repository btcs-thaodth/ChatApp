import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('AppGateway');

  @SubscribeMessage('msgToServer')
  handleMessage(client: Socket, payload: any): void {
    this.logger.log('mess', payload);
    this.server.emit('msgToClient', { data: payload });
  }

  @SubscribeMessage('connectionToServer')
  handleLogin(client: Socket, payload: any): void {
    this.logger.log('connection', payload);
    this.server.emit('connectionToClient', { data: payload });
  }

  @SubscribeMessage('disconnectedToServer')
  handleLoout(client: Socket, payload: any): void {
    this.logger.log('disconnected', payload);
    this.server.emit('disconnectedToClient', { data: payload });
  }

  afterInit() {
    this.logger.log('Init');
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  handleConnection(client: Socket) {
    this.logger.log(`Client connected: ${client.id}`);
  }
}
