import { MedicalCertificateService } from '../services/medical-certificate.service';
import { CreateMedicalCertificateDto } from '../dto/create-medical-certificate.dto';
import { UpdateMedicalCertificateDto } from '../dto/update-medical-certificate.dto';
import { CommonResponseHandler } from 'src/request-response-handlers/dtos/common-response.dto';
export declare class MedicalCertificateController {
    private readonly medicalCertificateService;
    constructor(medicalCertificateService: MedicalCertificateService);
    create(createMedicalCertificateDto: CreateMedicalCertificateDto): Promise<CommonResponseHandler>;
    findAll(): Promise<CommonResponseHandler>;
    findOne(id: string): Promise<CommonResponseHandler>;
    update(id: string, updateMedicalCertificateDto: UpdateMedicalCertificateDto): Promise<CommonResponseHandler>;
    remove(id: string): string;
}
