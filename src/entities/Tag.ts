import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Expose } from 'class-transformer';

@Entity({ name: "tags" })
class Tag {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Expose({ name: 'name_custom' })
  nameCustom(): string {
    return `#${this.name}`;
  }

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }
}

export { Tag };