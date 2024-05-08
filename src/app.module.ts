import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { TaskCategoriesModule } from './task_categories/task_categories.module';
import { TaskCategory } from './task_categories/entities/task_category.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'apicul',
    entities: [User,TaskCategory],
    synchronize: true,
  }), UserModule, TaskCategoriesModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
