import { CreateMedicalRegisterBasicDto } from '../dto/create-medical-register-basic.dto';
import { UpdateMedicalRegisterDto } from '../dto/update-medical-register.dto';
import { Repository } from 'typeorm';
import { MedicalRegisterEntity } from '../entities/medical-register.entity';
import { LabRemarkService } from 'src/lab-remark/services/lab-remark.service';
import { MedicalIssuesService } from 'src/medical-issues/services/medical-issues.service';
import { ResultEntriesService } from 'src/result-entry/services/result-entries.service';
import { DeliveryService } from 'src/delivery/services/delivery.service';
import { DoctorRemarkService } from 'src/doctor-remark/services/doctor-remark.service';
import { NormalPaymentService } from 'src/normal-payment/services/payment.service';
import { MmrPaymentService } from 'src/mmr-payment/services/mmr-payment.service';
import { MedicalCertificateService } from 'src/medical-certificate/services/medical-certificate.service';
export declare class MedicalRegisterService {
    private medicalRegistrationBasicRepository;
    private labRemarkService;
    private medicalIssuesService;
    private resultEntriesService;
    private deliveryService;
    private doctorRemarkService;
    private normalPaymentService;
    private mmrPaymentService;
    private medicalCertificateService;
    constructor(medicalRegistrationBasicRepository: Repository<MedicalRegisterEntity>, labRemarkService: LabRemarkService, medicalIssuesService: MedicalIssuesService, resultEntriesService: ResultEntriesService, deliveryService: DeliveryService, doctorRemarkService: DoctorRemarkService, normalPaymentService: NormalPaymentService, mmrPaymentService: MmrPaymentService, medicalCertificateService: MedicalCertificateService);
    create(createMedicalRegisterBasicDto: CreateMedicalRegisterBasicDto): Promise<MedicalRegisterEntity>;
    medicalRegisterUserInfo(userBasicInfo: any): Promise<any>;
    findAll(): Promise<MedicalRegisterEntity[]>;
    findAllByDateRange(fromDate: any, toDate: any, query: any): Promise<MedicalRegisterEntity[]>;
    findOneById(id: number): Promise<MedicalRegisterEntity>;
    findOneByPassportNumber(passportNo: string): Promise<MedicalRegisterEntity>;
    findOneByUniqueID(query: any): Promise<MedicalRegisterEntity>;
    updateRegMedical(id: number, updateMedicalRegisterDto: UpdateMedicalRegisterDto): Promise<import("typeorm").UpdateResult>;
    findByDate(regDate: Date): Promise<MedicalRegisterEntity[]>;
    generateSerialNo(): Promise<{
        serialNo: any;
        refNo: any;
    }>;
    pagination(take: any, skip: any): Promise<void>;
    statusChange(id: string, status: boolean): Promise<import("typeorm").UpdateResult>;
}
