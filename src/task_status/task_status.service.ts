import { Injectable } from '@nestjs/common';
import { CreateTaskStatusDto } from './dto/create-task_status.dto';
import { UpdateTaskStatusDto } from './dto/update-task_status.dto';
import { TaskStatus } from './entities/task_status.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TaskStatusService {
  constructor(
    @InjectRepository(TaskStatus)
    private TasksStatusRepository: Repository<TaskStatus>,
  ) {}
  
  create(createTaskStatusDto: CreateTaskStatusDto) {
    return this.TasksStatusRepository.save(createTaskStatusDto);
  }

  findAll() {
    return this.TasksStatusRepository.find();
  }

  findOne(TaskStatusID: number) {
    return this.TasksStatusRepository.findOneBy({TaskStatusID});
  }

  update(TaskStatusID: number, updateTaskStatusDto: UpdateTaskStatusDto) {
    return this.TasksStatusRepository.update(TaskStatusID,updateTaskStatusDto);
  }

  remove(TaskStatusID: number) {
    return this.TasksStatusRepository.delete(TaskStatusID);
  }
}
