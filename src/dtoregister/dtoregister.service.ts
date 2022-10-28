import { Injectable } from '@nestjs/common';


@Injectable()
export class DtoregisterService {
  async dtoRegisterUser(req) : Promise<string> {
    return `Usuário criado com sucesso!`;
  }
  
}
