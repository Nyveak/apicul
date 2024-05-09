import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TaskStatus {
    
    @PrimaryGeneratedColumn()
    TaskStatusID: number;
    
    @Column()
    Description: string;
}
