import { MedicalRegisterEntity } from 'src/user-medical-register/entities/medical-register.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('normal_payment')
export class NormalPaymentEntity {
  @OneToOne(() => MedicalRegisterEntity, (regObj) => regObj.normalPaymentRef)
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: true, type: 'varchar', default: null })
  paymentDate: Date;

  @Column({ nullable: true, type: 'varchar', default: null })
  total: string;

  @Column({ nullable: true, type: 'boolean', default: false })
  status: boolean;
}
