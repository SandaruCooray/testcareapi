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
export declare enum USER_STATUS {
    SINGLE = "single",
    MARRIED = "married",
    WIDOWED = "widowed"
}
export declare enum SEX {
    MALE = "male",
    FEMALE = "female",
    OTHER = "other"
}
export declare class MedicalRegisterEntity {
    id: number;
    passport: string;
    serialNo: string;
    gccNo: string;
    cmbNo: string;
    refNo: string;
    medicalType: string;
    honorificRef: HororificEntity;
    firstName: string;
    lastName: string;
    address: string;
    sex: SEX;
    status: USER_STATUS;
    doctorRef: DoctorEntity;
    birthday: Date;
    recipientDate: Date;
    age: number;
    placeOfIssue: string;
    placeOfBirthRef: CityEntity;
    nationalityRef: NationalityEntity;
    agencyRef: AgencyEntity;
    countryRef: CountryEntity;
    labRemarkRef: LabRemarkEntity;
    doctorRemarkRef: DoctorRemarkEntity;
    resultEntryRef: ResultEntryEntity;
    deliveryRef: DeliveryEntity;
    medicalIssueRef: MedicalIssueEntity;
    remark: string;
    paymentType: string;
    medicalCertificatesRef: MedicalCertificateEntity[];
    fingerPrintRef: string;
    photo: string;
    positionRef: PositionEntity;
    registeredDate: Date;
    company: string;
    overAge: boolean;
    approved: boolean;
    approvedTime: Date;
    normalPaymentRef: NormalPaymentEntity;
    mmrPaymentRef: MmrPaymentEntity;
    createdAt: Date;
    updatedAt: Date;
}
