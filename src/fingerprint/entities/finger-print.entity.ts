import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('finger_print')
export class FingerPrintEntity {
  // @OneToOne(() => MedicalRegisterEntity, (user) => user.fingerPrintRef)
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'varchar' })
  public leftThumb: string;

  @Column({ type: 'varchar' })
  public rightThumb: string;
}
