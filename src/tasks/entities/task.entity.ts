import { TaskCategory } from "src/task_categories/entities/task_category.entity";
import { TaskStatus } from "src/task_status/entities/task_status.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {
    
    @PrimaryGeneratedColumn()
    TaskID: number;

    @Column()
    Description: string;

    @Column()
    Color: string;

    @ManyToOne(()=>TaskCategory,taskCategory =>taskCategory.TaskCategoryID,{eager:true})
    taskCategory:TaskCategory

    @ManyToOne(()=>TaskStatus,taskStatus =>taskStatus.TaskStatusID,{eager:true})
    taskStatus:TaskStatus

    @ManyToOne(()=>User,user =>user.id,{eager:true})
    user:User
}
