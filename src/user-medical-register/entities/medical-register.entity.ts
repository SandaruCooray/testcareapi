import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CityEntity } from 'src/city/entities/city.entity';
import { HororificEntity } from 'src/honorific/entities/honorific.entity';
import { NationalityEntity } from 'src/nationality/entities/nationality.entity';
import { DoctorEntity } from 'src/doctor/entities/doctor.entity';
import { PositionEntity } from 'src/position/entities/position.entity';
import { AgencyEntity } from 'src/agency/entities/agency.entity';
import { CountryEntity } from 'src/country/entities/country.entity';
import { LabRemarkEntity } from 'src/lab-remark/entities/lab-remark.entity';
import { MedicalIssueEntity } from 'src/medical-issues/entities/medical-issue.entity';
import { ResultEntryEntity } from 'src/result-entry/entities/result-entry.entity';
import { DeliveryEntity } from 'src/delivery/entities/delivery.entity';
import { DoctorRemarkEntity } from 'src/doctor-remark/entities/doctor-remark.entity';
import { NormalPaymentEntity } from 'src/normal-payment/entities/payment.entity';
import { MmrPaymentEntity } from 'src/mmr-payment/entities/mmr-payment.entity';
import { MedicalCertificateEntity } from 'src/medical-certificate/entities/medical-certificate.entity';

export enum USER_STATUS {
  SINGLE = 'single',
  MARRIED = 'married',
  WIDOWED = 'widowed',
}

export enum SEX {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}

@Entity('user_medical_registration')
export class MedicalRegisterEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'varchar', unique: true, nullable: false })
  public passport: string;

  @Column({ type: 'varchar', nullable: false })
  public serialNo: string;

  @Column({ type: 'varchar', nullable: true, default: null })
  public gccNo: string;

  @Column({ type: 'varchar', nullable: true, default: null })
  public cmbNo: string;

  @Column({ type: 'varchar', nullable: false })
  public refNo: string;

  @Column({ type: 'varchar', nullable: false })
  public medicalType: string;

  @ManyToOne(() => HororificEntity, (honorofic) => honorofic.id)
  @JoinColumn()
  public honorificRef: HororificEntity;

  @Column({ type: 'varchar', nullable: false })
  public firstName: string;

  @Column({ type: 'varchar', nullable: false })
  public lastName: string;

  @Column({ type: 'varchar', nullable: false })
  public address: string;

  @Column({
    type: 'enum',
    enum: SEX,
  })
  public sex: SEX;

  @Column({
    type: 'enum',
    enum: USER_STATUS,
  })
  public status: USER_STATUS;

  //think
  @ManyToOne(() => DoctorEntity, (doctor) => doctor.id)
  @JoinColumn()
  public doctorRef: DoctorEntity;

  @Column({ type: 'date', nullable: false })
  public birthday: Date;

  @Column({ type: 'date', nullable: true })
  public recipientDate: Date;

  @Column({ type: 'int', nullable: false })
  public age: number;

  @Column({ type: 'varchar', nullable: false })
  public placeOfIssue: string;

  @ManyToOne(() => CityEntity, (city) => city.id)
  @JoinColumn()
  public placeOfBirthRef: CityEntity;

  @ManyToOne(() => NationalityEntity, (obj) => obj.id)
  @JoinColumn()
  public nationalityRef: NationalityEntity;

  @ManyToOne(() => AgencyEntity, (agency) => agency.id)
  @JoinColumn()
  public agencyRef: AgencyEntity;

  @ManyToOne(() => CountryEntity, (country) => country.id)
  @JoinColumn()
  public countryRef: CountryEntity;

  @OneToOne(() => LabRemarkEntity, (labRemark) => labRemark.id)
  @JoinColumn()
  public labRemarkRef: LabRemarkEntity;

  @OneToOne(() => DoctorRemarkEntity, (docRemark) => docRemark.id)
  @JoinColumn()
  public doctorRemarkRef: DoctorRemarkEntity;

  @OneToOne(() => ResultEntryEntity, (resultEntry) => resultEntry.id)
  @JoinColumn()
  public resultEntryRef: ResultEntryEntity;

  @OneToOne(() => DeliveryEntity, (deliveryEntity) => deliveryEntity.id)
  @JoinColumn()
  public deliveryRef: DeliveryEntity;

  @OneToOne(() => MedicalIssueEntity, (medicalIssue) => medicalIssue.id)
  @JoinColumn()
  public medicalIssueRef: MedicalIssueEntity;

  @Column({ nullable: true, type: 'varchar', default: null })
  public remark: string;

  @Column({ nullable: true, type: 'varchar', default: null })
  public paymentType: string;

  //think

  @ManyToMany(() => MedicalCertificateEntity)
  @JoinTable()
  public medicalCertificatesRef: MedicalCertificateEntity[];

  // @OneToOne(() => FingerPrintEntity, (fingerPrint) => fingerPrint.id)
  // @JoinColumn()
  // public fingerPrintRef: FingerPrintEntity;
  @Column({ type: 'varchar', nullable: true })
  public fingerPrintRef: string;

  @Column({ nullable: true, type: 'varchar', default: null })
  public photo: string;

  @ManyToOne(() => PositionEntity, (position) => position.id)
  @JoinColumn()
  public positionRef: PositionEntity;

  @Column({ nullable: false, type: 'date' })
  public registeredDate: Date;

  @Column({ nullable: true, type: 'varchar' })
  public company: string;

  @Column({ nullable: true, default: false })
  public overAge: boolean;

  @Column({ nullable: true, type: 'boolean', default: false })
  public approved: boolean;

  @Column({ nullable: true, type: 'varchar' })
  public approvedTime: Date;

  @OneToOne(() => NormalPaymentEntity, (payment) => payment.id)
  @JoinColumn()
  public normalPaymentRef: NormalPaymentEntity;

  @OneToOne(() => MmrPaymentEntity, (payment) => payment.id)
  @JoinColumn()
  public mmrPaymentRef: MmrPaymentEntity;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  public createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  public updatedAt: Date;
}
