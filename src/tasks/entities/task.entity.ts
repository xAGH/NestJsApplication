import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TaskPhase } from '../enums';

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({ type: 'varchar', length: 50, nullable: false })
  title!: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  description!: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  tags!: string[] | string;
  @Column({ type: 'varchar', length: 11, nullable: false })
  phase!: TaskPhase;
  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;
}
