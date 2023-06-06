import { MedicalRegisterEntity } from 'src/user-medical-register/entities/medical-register.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('medical_issue')
export class MedicalIssueEntity {
  @OneToOne(() => MedicalRegisterEntity, (regObj) => regObj.medicalIssueRef)
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: true })
  public bg: boolean;

  @Column({ nullable: true })
  public fg: boolean;

  @Column({ nullable: true })
  public pg: boolean;

  @Column({ nullable: true })
  public chit: boolean;

  @Column({ nullable: true })
  public processedBy: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
