import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {
    
    @PrimaryGeneratedColumn()
    TaskID: number;

    @Column()
    TaskCategoryID: number;

    @Column()
    TaskStatusID: number;

    @Column()
    UserID: number;

    @Column()
    Description: string;

    @Column()
    Color: string
}
