import { UpdateReportDto } from '../dto/update-report.dto';
import { MedicalRegisterService } from 'src/user-medical-register/services/medical-register.service';
export declare class ReportsService {
    private medicalRegisterService;
    constructor(medicalRegisterService: MedicalRegisterService);
    getIssuedMedicalReport(fromDate: any, toDate: any, query: any): Promise<{
        passport: string;
        date: Date;
        name: string;
        sex: import("../../user-medical-register/entities/medical-register.entity").SEX;
        agency: string;
        country: string;
        issuedBy: string;
    }[]>;
    registeredUserMedicalReport(fromDate: any, toDate: any, query: any): Promise<{
        serialNo: string;
        date: Date;
        passport: string;
        name: string;
        sex: import("../../user-medical-register/entities/medical-register.entity").SEX;
        agency: string;
        country: string;
    }[]>;
    getDeliveryReport(fromDate: any, toDate: any, query: any): Promise<{
        date: Date;
        passport: string;
        name: string;
        sex: import("../../user-medical-register/entities/medical-register.entity").SEX;
        agency: string;
        country: string;
        issuedBy: string;
        ref: string;
    }[]>;
    medicalListReport(fromDate: any, toDate: any, query: any): Promise<{
        date: Date;
        passport: string;
        name: string;
        sex: import("../../user-medical-register/entities/medical-register.entity").SEX;
        agency: string;
        country: string;
        status: string;
    }[]>;
    regMedicalUserReport(fromDate: any, toDate: any, query: any): Promise<{
        serialNo: string;
        date: Date;
        passport: string;
        name: string;
        sex: import("../../user-medical-register/entities/medical-register.entity").SEX;
        agency: string;
        country: string;
    }[]>;
    medicaltestUserReport(fromDate: any, toDate: any, query: any): Promise<{
        template: string;
        data: {
            serialNo: string;
            name: string;
            refNo: string;
            hiv: any;
            aids: any;
            hbsAG: any;
            antiHCV: any;
            vdrl: any;
        }[];
    } | {
        template: string;
        data: {
            serialNo: string;
            name: string;
            refNo: string;
            passport: string;
            microFilaria: any;
            malariaFilm: any;
            antiHCV: any;
            vdrl: any;
        }[];
    } | {
        template: string;
        data: {
            serialNo: string;
            passport: string;
            name: string;
            refNo: string;
            hemoglobin: any;
            rbsResult: any;
            creatinineResult: any;
            sgpt: any;
            sgot: any;
        }[];
    } | {
        template: string;
        data: {
            serialNo: string;
            refNo: string;
            passport: string;
            name: string;
            bloodGroup: any;
            malariaFilm: any;
            microFilaria: any;
        }[];
    }>;
    serologyUserReport(fromDate: any, toDate: any, query: any): Promise<void>;
    findOne(id: number): string;
    update(id: number, updateReportDto: UpdateReportDto): string;
    remove(id: number): string;
}
