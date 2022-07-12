import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateTaskDto, EditTaskDto } from './dtos/';
import { TasksService } from './tasks.service';

@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.tasksService.getOne(id);
  }

  @Get()
  async getMany() {
    const data = await this.tasksService.getMany();
    return {
      data,
    };
  }

  @Post()
  async createOne(@Body() dto: CreateTaskDto) {
    return await this.tasksService.createOne(dto);
  }

  @Put(':id')
  async updateOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: EditTaskDto,
  ) {
    return await this.tasksService.updateOne(id, dto);
  }

  @Delete(':id')
  async deleteOne(@Param('id', ParseIntPipe) id: number) {
    return await this.tasksService.deleteOne(id);
  }
}
