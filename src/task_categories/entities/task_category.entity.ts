import { Task } from "src/tasks/entities/task.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TaskCategory {
    @PrimaryGeneratedColumn()
    TaskCategoryID: number;

    @Column()
    Description: string;

    @Column()
    Color: string;

    @OneToMany(()=>Task,task =>task.taskCategory)
    task:Task[]
}
