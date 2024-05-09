import { Task } from "src/tasks/entities/task.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    address: string;

    @Column({
        unique: true,
    })
    phonenumber: string;

    @Column({
        unique:true,
    })
    email: string;

    @Column({ default: true })
    isActive: boolean;

    @OneToMany(()=>Task,task =>task.user)
    task:Task[]
}
