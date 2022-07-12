import { IsArray, IsEnum, IsString, Length } from 'class-validator';
import { EnumToString } from 'src/helpers';
import { TaskPhase } from '../enums';

export class CreateTaskDto {
  @IsString()
  @Length(3, 50)
  title: string;
  @IsString()
  description: string;
  @IsArray()
  @IsString({ each: true })
  tags: string[];
  @IsEnum(TaskPhase, {
    message: `Invalid option.\nValid options: ${EnumToString(TaskPhase)}`,
  })
  phase: TaskPhase;
}
