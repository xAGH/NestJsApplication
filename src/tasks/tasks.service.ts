import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
import { CreateTaskDto, EditTaskDto } from './dtos';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  async getMany(): Promise<Task[]> {
    return await this.taskRepository.find();
  }

  async getOne(id: number): Promise<Task> {
    const task = await this.taskRepository.findOne({ where: { id } });
    if (!task) throw new NotFoundException('Task does not exist');
    return task;
  }

  async createOne(data: CreateTaskDto): Promise<InsertResult> {
    return await this.taskRepository.insert({ ...data });
  }

  async updateOne(id: number, data: EditTaskDto) {
    await this.getOne(id);
    return await this.taskRepository.update({ id }, data);
  }

  async deleteOne(id: number) {
    return await this.taskRepository.delete({ id });
  }
}
