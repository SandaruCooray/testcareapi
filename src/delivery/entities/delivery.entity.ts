import { MedicalRegisterEntity } from 'src/user-medical-register/entities/medical-register.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('delivery')
export class DeliveryEntity {
  @OneToOne(() => MedicalRegisterEntity, (regObj) => regObj.deliveryRef)
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: true, type: 'varchar', default: null })
  public deliveryDateTime: Date;

  @Column({ nullable: true, default: null })
  public remark: string;

  @Column({ nullable: true, default: null })
  public medicalAmount: string;

  @Column({ nullable: true, default: null })
  public paidAmount: string;

  @Column({ nullable: true, default: null })
  public balanceToPay: string;

  @Column({ nullable: true, default: null })
  public processedBy: string;

  @Column({ nullable: true, default: null })
  public reference: string;

  @Column({ nullable: true, default: false })
  public bg: boolean;

  @Column({ nullable: true, default: false })
  public fg: boolean;

  @Column({ nullable: true, default: false })
  public pg: boolean;

  @Column({ nullable: true, default: false })
  public chit: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
