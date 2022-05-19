import { IsString, IsNotEmpty } from 'class-validator';

export class CreateTasklistDto {
  @IsString()
  @IsNotEmpty()
  Title: string;
}
