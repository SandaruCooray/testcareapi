import { Module } from '@nestjs/common';
import { GatewayGateway } from './events.gateway';

@Module({
  providers: [GatewayGateway],
})
export class GatewayModule {}
