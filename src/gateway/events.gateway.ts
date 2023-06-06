import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
// import { CreateGatewayDto } from './dto/create-gateway.dto';
// import { UpdateGatewayDto } from './dto/update-gateway.dto';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class GatewayGateway {
  // @WebSocketServer()
  // server: Server;

  @SubscribeMessage('join room')
  handleJoinRoom(@MessageBody() data: any, @ConnectedSocket() client: Socket) {
    const room = data.room;
    const device = data.device;

    client.join(room);
    console.log(`User joined room ${room}`);

    const obj = {
      room: room,
      message: device + ' Joined to Bridge',
    };

    client.to(room).emit('comm_stat', obj);
  }

  @SubscribeMessage('leave room')
  handleLeaveRoom(@ConnectedSocket() client: Socket, room: string) {
    client.leave(room);
    console.log(`User left room ${room}`);
  }

  // @SubscribeMessage('disconnect')
  // handleDisconnect(@ConnectedSocket() client: Socket, room: string) {

  // }

  @SubscribeMessage('ZKdevicestat')
  handleZKdevicestat(
    @MessageBody() data: any,
    @ConnectedSocket() client: Socket,
  ) {
    const room = data.room;
    const message = data.message;
    const thumb = data.thumb ? data.thumb : 0;
    const errorcode = data.errorcode;

    console.log(` ZkFinger Device Stat message ${message}`);

    const obj = {
      room: room,
      message: message,
      errorcode: errorcode,
    };

    client.to(room).emit('RTdevicestat', obj);
  }

  @SubscribeMessage('commToZK')
  handlecommToZK(@MessageBody() data: any, @ConnectedSocket() client: Socket) {
    const room = data.room;
    const message = data.message;
    const command = data.command;
    const max_template_count = data.max_template_count
      ? data.max_template_count
      : 0;
    const enroll_finger = data.enroll_finger ? data.enroll_finger : 0;

    console.log(` Command to ZK ${data}`);

    const obj = {
      room: room,
      message: message,
      command: command,
      max_template_count: max_template_count,
      enroll_finger: enroll_finger,
    };

    client.to(room).emit('RTCommands', obj);
  }

  @SubscribeMessage('ZK_Img')
  handleZK_Img(@MessageBody() data: any, @ConnectedSocket() client: Socket) {
    const room = data.room;
    const message = data.message;
    const command = data.command;

    //console.log(` Image to RT ${message}`);

    const obj = {
      room: room,
      message: message,
    };
    client.to(room).emit('img_buffer', obj);
  }

  @SubscribeMessage('temp_limits')
  handleTemp_limits(
    @MessageBody() data: any,
    @ConnectedSocket() client: Socket,
  ) {
    const room = data.room;

    const obj = {
      room: room,
    };

    client.to(room).emit('temp_limits_RT', obj);
  }

  @SubscribeMessage('clear_to_RT')
  handleClear_to_RT(
    @MessageBody() data: any,
    @ConnectedSocket() client: Socket,
  ) {
    const room = data.room;
    const clear = data.clear;
    const errorcode = data.errorcode;

    const obj = {
      room: room,
      clear: clear,
      errorcode: errorcode,
    };

    client.to(room).emit('clear_from_ZK', obj);
  }

  @SubscribeMessage('temp_limits_ZK')
  handleTemp_limits_ZK(
    @MessageBody() data: any,
    @ConnectedSocket() client: Socket,
  ) {
    const room = data.room;
    const pre_chat_limit = data.pre_chat_limit;
    const chat_limit = data.chat_limit;

    const obj = {
      room: room,
      pre_chat_limit: pre_chat_limit,
      chat_limit: chat_limit,
    };

    client.to(room).emit('temp_limits_ZK', obj);
  }

  @SubscribeMessage('temp_load_succ')
  handleTemp_load_succ(
    @MessageBody() data: any,
    @ConnectedSocket() client: Socket,
  ) {
    const room = data.room;
    const status = data.status;

    const obj = {
      room: room,
      status: status,
    };

    client.to(room).emit('temp_load_succ', obj);
  }

  @SubscribeMessage('ask_for_newbatch')
  handleAsk_for_newbatch(
    @MessageBody() data: any,
    @ConnectedSocket() client: Socket,
  ) {
    const room = data.room;

    const obj = {
      room: room,
    };

    client.to(room).emit('ask_for_newbatch_RT', obj);
  }

  @SubscribeMessage('user_found')
  handleUser_found(
    @MessageBody() data: any,
    @ConnectedSocket() client: Socket,
  ) {
    const room = data.room;
    const userStat = data.userStat;
    const userFingerId = data.userFingerId;

    const obj = {
      room: room,
      userStat: userStat,
      userFingerId: userFingerId,
    };

    client.to(room).emit('user_details', obj);
  }

  @SubscribeMessage('user_error')
  handleUser_error(
    @MessageBody() data: any,
    @ConnectedSocket() client: Socket,
  ) {
    const room = data.room;
    const userStat = data.userStat;
    const userFingerId = data.userFingerId;

    const obj = {
      room: room,
      userStat: userStat,
      userFingerId: userFingerId,
    };

    client.to(room).emit('user_error_RT', obj);
  }

  @SubscribeMessage('temp_from_ZK')
  handleTemp_from_ZK(
    @MessageBody() data: any,
    @ConnectedSocket() client: Socket,
  ) {
    const room = data.room;
    const templateStr = data.templateStr;
    const userFignerIndex = data.userFignerIndex;

    const obj = {
      room: room,
      templateStr: templateStr,
      userFignerIndex: userFignerIndex,
    };

    console.log(obj);

    client.to(room).emit('temp_from_ZKEx', obj);
  }

  @SubscribeMessage('Finger_Verify')
  handleFinger_Verify(
    @MessageBody() data: any,
    @ConnectedSocket() client: Socket,
  ) {
    const room = data.room;
    const userRef = data.userRef;
    const userFingerindex = data.fingerRef;
    const batchfrom = data.batchfrom;
    const batchto = data.batchto;
    const templates_all_count = data.templates_all_count;
    const errorcode = data.errorcode;

    console.log(` User verify results ${data}`);

    const obj = {
      room: room,
      userRef: userRef,
      userFingerindex: userFingerindex,
      batchfrom: batchfrom,
      batchto: batchto,
      templates_all_count: templates_all_count,
      errorcode: errorcode,
    };
  }
}
