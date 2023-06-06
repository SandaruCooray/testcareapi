import { ReportsService } from '../services/reports.service';
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    getIssuedMedicalReport(fromDate: string, toDate: string, query: any): Promise<{
        reportData: {
            passport: string;
            date: Date;
            name: string;
            sex: import("../../user-medical-register/entities/medical-register.entity").SEX;
            agency: string;
            country: string;
            issuedBy: string;
        }[];
    }>;
    getDeliveryReport(fromDate: string, toDate: string, query: any): Promise<{
        reportData: {
            date: Date;
            passport: string;
            name: string;
            sex: import("../../user-medical-register/entities/medical-register.entity").SEX;
            agency: string;
            country: string;
            issuedBy: string;
            ref: string;
        }[];
    }>;
    medicalListReport(fromDate: string, toDate: string, query: any): Promise<{
        reportData: {
            date: Date;
            passport: string;
            name: string;
            sex: import("../../user-medical-register/entities/medical-register.entity").SEX;
            agency: string;
            country: string;
            status: string;
        }[];
    }>;
    regMedicalUserReport(fromDate: string, toDate: string, query: any): Promise<{
        reportData: {
            serialNo: string;
            date: Date;
            passport: string;
            name: string;
            sex: import("../../user-medical-register/entities/medical-register.entity").SEX;
            agency: string;
            country: string;
        }[];
    }>;
    medicaltestUserReport(fromDate: string, toDate: string, query: any, res: any): Promise<any>;
}
