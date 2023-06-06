import { MedicalRegisterEntity } from 'src/user-medical-register/entities/medical-register.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

export enum MEDICAL_STATUS {
  UNFIT = 'unfit',
  FIT = 'fit',
  TEMPORARY_UNFIT = 'temporary_unfit',
}

@Entity('result_entry')
export class ResultEntryEntity {
  @OneToOne(() => MedicalRegisterEntity, (regObj) => regObj.resultEntryRef)
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: true, default: null, type: 'jsonb' })
  result: any;

  @Column({
    nullable: true,
    type: 'enum',
    enum: MEDICAL_STATUS,
  })
  healthStatus: MEDICAL_STATUS;

  @Column({ nullable: true, default: null, type: 'jsonb' })
  printed: any;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
