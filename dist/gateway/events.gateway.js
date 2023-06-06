"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatewayGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
let GatewayGateway = class GatewayGateway {
    handleJoinRoom(data, client) {
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
    handleLeaveRoom(client, room) {
        client.leave(room);
        console.log(`User left room ${room}`);
    }
    handleZKdevicestat(data, client) {
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
    handlecommToZK(data, client) {
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
    handleZK_Img(data, client) {
        const room = data.room;
        const message = data.message;
        const command = data.command;
        const obj = {
            room: room,
            message: message,
        };
        client.to(room).emit('img_buffer', obj);
    }
    handleTemp_limits(data, client) {
        const room = data.room;
        const obj = {
            room: room,
        };
        client.to(room).emit('temp_limits_RT', obj);
    }
    handleClear_to_RT(data, client) {
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
    handleTemp_limits_ZK(data, client) {
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
    handleTemp_load_succ(data, client) {
        const room = data.room;
        const status = data.status;
        const obj = {
            room: room,
            status: status,
        };
        client.to(room).emit('temp_load_succ', obj);
    }
    handleAsk_for_newbatch(data, client) {
        const room = data.room;
        const obj = {
            room: room,
        };
        client.to(room).emit('ask_for_newbatch_RT', obj);
    }
    handleUser_found(data, client) {
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
    handleUser_error(data, client) {
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
    handleTemp_from_ZK(data, client) {
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
    handleFinger_Verify(data, client) {
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
};
__decorate([
    (0, websockets_1.SubscribeMessage)('join room'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], GatewayGateway.prototype, "handleJoinRoom", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('leave room'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, String]),
    __metadata("design:returntype", void 0)
], GatewayGateway.prototype, "handleLeaveRoom", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('ZKdevicestat'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], GatewayGateway.prototype, "handleZKdevicestat", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('commToZK'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], GatewayGateway.prototype, "handlecommToZK", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('ZK_Img'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], GatewayGateway.prototype, "handleZK_Img", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('temp_limits'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], GatewayGateway.prototype, "handleTemp_limits", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('clear_to_RT'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], GatewayGateway.prototype, "handleClear_to_RT", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('temp_limits_ZK'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], GatewayGateway.prototype, "handleTemp_limits_ZK", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('temp_load_succ'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], GatewayGateway.prototype, "handleTemp_load_succ", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('ask_for_newbatch'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], GatewayGateway.prototype, "handleAsk_for_newbatch", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('user_found'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], GatewayGateway.prototype, "handleUser_found", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('user_error'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], GatewayGateway.prototype, "handleUser_error", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('temp_from_ZK'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], GatewayGateway.prototype, "handleTemp_from_ZK", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('Finger_Verify'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], GatewayGateway.prototype, "handleFinger_Verify", null);
GatewayGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        cors: {
            origin: '*',
        },
    })
], GatewayGateway);
exports.GatewayGateway = GatewayGateway;
//# sourceMappingURL=events.gateway.js.map