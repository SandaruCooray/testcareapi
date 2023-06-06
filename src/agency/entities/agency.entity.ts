import { MedicalRegisterEntity } from 'src/user-medical-register/entities/medical-register.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('agency')
export class AgencyEntity {
  @OneToMany(() => MedicalRegisterEntity, (medicalObj) => medicalObj.agencyRef)
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'varchar' })
  public name: string;

  @Column({ type: 'int4' })
  public telPhone: string;

  @Column({ type: 'varchar', nullable: true, default: null })
  public short: string;

  @Column({ type: 'varchar' })
  public location: string;

  @Column({ type: 'varchar' })
  public address: string;
}
