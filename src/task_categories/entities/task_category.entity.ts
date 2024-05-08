import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TaskCategory {
    @PrimaryGeneratedColumn()
    TaskCategoryID: number;

    @Column()
    Description: string;

    @Column()
    Color: string;
}
