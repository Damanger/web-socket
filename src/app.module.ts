import { Module } from '@nestjs/common';
import { ControlGateway } from './gateway/control.gateway';

@Module({
  providers: [ControlGateway], 
})
export class AppModule {}
