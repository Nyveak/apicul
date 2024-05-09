import { Task } from "src/tasks/entities/task.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TaskStatus {
    
    @PrimaryGeneratedColumn()
    TaskStatusID: number;
    
    @Column()
    Description: string;

    @OneToMany(()=>Task,task =>task.taskStatus)
    task:Task[]
}
