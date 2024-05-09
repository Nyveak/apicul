import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskCategory } from 'src/task_categories/entities/task_category.entity';
import { TaskStatus } from 'src/task_status/entities/task_status.entity';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class TasksService {
  constructor(@InjectRepository(Task) private TaskRepository: Repository<Task>,@InjectRepository(TaskStatus) private TasksStatusRepository: Repository<TaskStatus>,
  @InjectRepository(TaskCategory) private TaskCategoryRepository: Repository<TaskCategory>,@InjectRepository(User) private userRepository: Repository<User>) {}
    
  async create(createTaskDto: CreateTaskDto) {
    const taskCategory = await this.TaskCategoryRepository.findOneBy(createTaskDto.taskCategory);
    const taskStatus = await this.TasksStatusRepository.findOneBy(createTaskDto.taskStatus);
    const user = await this.userRepository.findOneBy(createTaskDto.user);
    if (!taskCategory || !taskStatus || !user) {
      throw new BadRequestException("TaskCategory, TaskStatus or User not found");
    }
    return await this.TaskRepository.save({...createTaskDto,taskCategory,taskStatus,user});
  }

  findAll() {
    return this.TaskRepository.find();
  }

  findOne(TaskID: number) {
    return this.TaskRepository.findOneBy({TaskID});
  }

  update(TaskID: number, updateTaskDto: UpdateTaskDto) {
    return this.TaskRepository.update(TaskID,updateTaskDto);
  }

  remove(TaskID: number) {
    return this.TaskRepository.delete(TaskID);
  }
}
