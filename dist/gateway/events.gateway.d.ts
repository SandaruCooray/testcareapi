import { Socket } from 'socket.io';
export declare class GatewayGateway {
    handleJoinRoom(data: any, client: Socket): void;
    handleLeaveRoom(client: Socket, room: string): void;
    handleZKdevicestat(data: any, client: Socket): void;
    handlecommToZK(data: any, client: Socket): void;
    handleZK_Img(data: any, client: Socket): void;
    handleTemp_limits(data: any, client: Socket): void;
    handleClear_to_RT(data: any, client: Socket): void;
    handleTemp_limits_ZK(data: any, client: Socket): void;
    handleTemp_load_succ(data: any, client: Socket): void;
    handleAsk_for_newbatch(data: any, client: Socket): void;
    handleUser_found(data: any, client: Socket): void;
    handleUser_error(data: any, client: Socket): void;
    handleTemp_from_ZK(data: any, client: Socket): void;
    handleFinger_Verify(data: any, client: Socket): void;
}
