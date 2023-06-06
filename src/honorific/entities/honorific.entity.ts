import { MedicalRegisterEntity } from 'src/user-medical-register/entities/medical-register.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('honorific')
export class HororificEntity {
  @OneToMany(
    () => MedicalRegisterEntity,
    (medicalObj) => medicalObj.honorificRef,
  )
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'varchar' })
  public honorific: string;
}
