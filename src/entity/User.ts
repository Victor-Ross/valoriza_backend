import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  admin: boolean;

  @Column()
  lastName: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}