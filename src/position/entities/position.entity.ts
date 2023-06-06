import { MedicalRegisterEntity } from 'src/user-medical-register/entities/medical-register.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('positions')
export class PositionEntity {
  @OneToOne(() => MedicalRegisterEntity, (medicalObj) => medicalObj.positionRef)
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'varchar' })
  public position: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  public createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  public updatedAt: Date;
}
