import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('system_user')
export class SystemUserEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: false, unique: true })
  public username: string;

  @Column({ nullable: false, default: null })
  public password: string;

  @Column({ nullable: false, default: null })
  public level: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
