import { BeforeInsert, CreateDateColumn, Entity, PrimaryGeneratedColumn, } from 'typeorm';

@Entity({ name: 'clicked' })
export class ClickedEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @BeforeInsert()
  protected beforeInsert(): void {
    this.createdAt = new Date();
  }
}
