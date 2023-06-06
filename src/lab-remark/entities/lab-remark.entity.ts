import { MedicalRegisterEntity } from 'src/user-medical-register/entities/medical-register.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('lab_remark')
export class LabRemarkEntity {
  @OneToOne(() => MedicalRegisterEntity, (regObj) => regObj.labRemarkRef)
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: true })
  public startDate: Date;

  @Column({ nullable: true })
  public endDate: Date;

  @Column({ nullable: true })
  public remark: string;

  @Column({ nullable: true })
  public mmr: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
