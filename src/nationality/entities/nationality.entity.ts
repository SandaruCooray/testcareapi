import { MedicalRegisterEntity } from 'src/user-medical-register/entities/medical-register.entity';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('nationality')
export class NationalityEntity {
  @OneToMany(
    () => MedicalRegisterEntity,
    (medicalObj) => medicalObj.nationalityRef,
  )
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'varchar' })
  public nationality: string;
}
