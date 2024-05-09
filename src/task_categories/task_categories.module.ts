import { Module } from '@nestjs/common';
import { TaskCategoriesService } from './task_categories.service';
import { TaskCategoriesController } from './task_categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskCategory } from './entities/task_category.entity';
import { User } from 'src/user/entities/user.entity';
import { Task } from 'src/tasks/entities/task.entity';
import { TaskStatus } from 'src/task_status/entities/task_status.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaskCategory,User,Task,TaskStatus])],
  controllers: [TaskCategoriesController],
  providers: [TaskCategoriesService],
  exports: [TypeOrmModule]
})
export class TaskCategoriesModule {}
