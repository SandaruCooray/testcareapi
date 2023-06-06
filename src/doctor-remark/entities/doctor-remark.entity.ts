import { MedicalRegisterEntity } from 'src/user-medical-register/entities/medical-register.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('doctor_remark')
export class DoctorRemarkEntity {
  @OneToOne(() => MedicalRegisterEntity, (regObj) => regObj.doctorRemarkRef)
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: true })
  public startDate: Date;

  @Column({ nullable: true })
  public endDate: Date;

  @Column({ nullable: true })
  public remark: string;

  @Column({ nullable: true, default: false })
  public mmr: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
