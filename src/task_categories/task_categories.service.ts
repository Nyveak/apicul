import { Injectable } from '@nestjs/common';
import { CreateTaskCategoryDto } from './dto/create-task_category.dto';
import { UpdateTaskCategoryDto } from './dto/update-task_category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskCategory } from './entities/task_category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskCategoriesService {
  constructor(
    @InjectRepository(TaskCategory)
    private TaskCategoryRepository: Repository<TaskCategory>
  ){}

  create(createTaskCategoryDto: CreateTaskCategoryDto) {
    return this.TaskCategoryRepository.save(createTaskCategoryDto);
  }

  findAll() {
    return this.TaskCategoryRepository.find();
  }

  findOne(TaskCategoryID: number) {
    return this.TaskCategoryRepository.findOneBy({TaskCategoryID});
  }

  update(TaskCategoryID: number, updateTaskCategoryDto: UpdateTaskCategoryDto) {
    return this.TaskCategoryRepository.update(TaskCategoryID,updateTaskCategoryDto);
  }

  remove(TaskCategoryID: number) {
    return this.TaskCategoryRepository.delete(TaskCategoryID);
  }
}
