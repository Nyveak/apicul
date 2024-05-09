import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Task } from 'src/tasks/entities/task.entity';
import { TaskCategory } from 'src/task_categories/entities/task_category.entity';
import { TaskStatus } from 'src/task_status/entities/task_status.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User,Task,TaskCategory,TaskStatus])],
  controllers: [UserController],
  providers: [UserService],
  exports: [TypeOrmModule]
})
export class UserModule {}
