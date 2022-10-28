import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterModule } from './register/register.module';
import { DtoregisterModule } from './dtoregister/dtoregister.module';

@Module({
  imports: [RegisterModule, DtoregisterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
