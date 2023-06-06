import { MedicalRegisterEntity } from 'src/user-medical-register/entities/medical-register.entity';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('city')
export class CityEntity {
  @OneToMany(() => MedicalRegisterEntity, (regObj) => regObj.placeOfBirthRef)
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'varchar' })
  public city: string;
}
