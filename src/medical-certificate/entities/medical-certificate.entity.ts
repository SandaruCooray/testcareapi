import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('medical_certificate')
export class MedicalCertificateEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: false })
  public code: string;

  @Column({ nullable: false })
  public name: string;

  @Column({ nullable: true, default: null })
  public downPayment: string;

  @Column({ nullable: false, type: 'varchar' })
  public medicalType: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
