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
import { MessagesService } from 'src/messages/messages.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class GatewayGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private readonly messageService: MessagesService) {}

  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('AppGateway');

  @SubscribeMessage('msgToServer')
  async handleMessage(client: Socket, payload: any) {
    this.logger.log('mess', payload);
    await this.messageService.create(payload);
    this.server.emit('msgToClient', { data: payload });
  }

  @SubscribeMessage('connectionToServer')
  async handleLogin(client: Socket, payload: any) {
    this.logger.log('connection', payload);
    await this.messageService.create(payload);
    this.server.emit('connectionToClient', { data: payload });
  }

  @SubscribeMessage('disconnectedToServer')
  async handleLoout(client: Socket, payload: any) {
    this.logger.log('disconnected', payload);
    await this.messageService.create(payload);
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
