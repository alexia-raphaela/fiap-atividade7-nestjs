import { Body, Controller, Post } from '@nestjs/common';
import { RegisterUserDTO } from './dto/registerUser.dto';
import { DtoregisterService } from './dtoregister.service';

@Controller('dtoregister')
export class DtoregisterController {
  constructor(private readonly dtoregisterService: DtoregisterService){}

  @Post()
  async dtoRegisterUser(@Body() req: RegisterUserDTO) {
    return this.dtoregisterService.dtoRegisterUser(req);
  }
}
