import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, MinLength } from "class-validator";

export class RegisterUserDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @MinLength(6)
  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @IsString()
  site: string;

  @IsPhoneNumber()
  phone: number;
}