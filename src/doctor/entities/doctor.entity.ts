import { MedicalRegisterEntity } from 'src/user-medical-register/entities/medical-register.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('doctor')
export class DoctorEntity {
  @OneToMany(() => MedicalRegisterEntity, (medicalObj) => medicalObj.doctorRef)
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: false })
  public code: string;

  @Column({ nullable: false })
  public name: string;

  @Column({ nullable: false })
  public address: string;

  @Column({ nullable: false })
  public telePhone: number;

  @Column({ nullable: true, default: null })
  public fax: string;

  @Column({ nullable: false })
  public commissionRate: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
