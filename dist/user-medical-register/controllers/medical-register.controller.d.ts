import { MedicalRegisterService } from '../services/medical-register.service';
import { UpdateMedicalRegisterDto } from '../dto/update-medical-register.dto';
import { CommonResponseHandler } from 'src/request-response-handlers/dtos/common-response.dto';
import { CreateMedicalRegisterBasicDto } from '../dto/create-medical-register-basic.dto';
export declare class MedicalRegistersController {
    private readonly medicalRegisterService;
    constructor(medicalRegisterService: MedicalRegisterService);
    create(createMedicalRegisterBasicDto: CreateMedicalRegisterBasicDto): Promise<CommonResponseHandler>;
    findAllByDate(currentDate: Date): Promise<CommonResponseHandler>;
    findOneByUniqueID(query: any): Promise<CommonResponseHandler>;
    findAll(): Promise<CommonResponseHandler>;
    generateSerialNo(): Promise<CommonResponseHandler>;
    findOneById(id: string): Promise<CommonResponseHandler>;
    update(id: string, updateMedicalRegisterDtoDto: UpdateMedicalRegisterDto): Promise<CommonResponseHandler>;
    pagination(take: number, skip: number): Promise<CommonResponseHandler>;
    statusChange(id: string, status: boolean): Promise<CommonResponseHandler>;
}
