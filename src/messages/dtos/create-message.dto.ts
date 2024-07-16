import { IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString({ message: 'Only string is required' })
  content: string;
}
