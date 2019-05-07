import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";



@Entity('user')
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first: string;

    @Column()
    middle: string;

    @Column()
    last: string;

    @Column()
    picture: string;

    @Column()
    role: string;

    @Column()
    userStatus: string;

    @Column()
    dateOfBirth: string;

}