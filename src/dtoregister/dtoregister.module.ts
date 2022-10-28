import { Module } from '@nestjs/common';
import { DtoregisterController } from './dtoregister.controller';
import { DtoregisterService } from './dtoregister.service';

@Module({
  controllers: [DtoregisterController],
  providers: [DtoregisterService]
})
export class DtoregisterModule {}
