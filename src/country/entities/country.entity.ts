import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('country')
export class CountryEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: false })
  public code: string;

  @Column({ nullable: false })
  public country: string;

  @Column({ nullable: false })
  public countryHead: string;

  @Column({ nullable: false })
  public short: string;

  @Column({ nullable: false })
  public reference: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
