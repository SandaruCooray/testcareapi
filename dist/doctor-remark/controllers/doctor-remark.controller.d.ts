import { DoctorRemarkService } from '../services/doctor-remark.service';
import { CreateDoctorRemarkDto } from '../dto/create-doctor-remark.dto';
import { UpdateDoctorRemarkDto } from '../dto/update-doctor-remark.dto';
import { CommonResponseHandler } from 'src/request-response-handlers/dtos/common-response.dto';
export declare class DoctorRemarkController {
    private readonly doctorRemarkService;
    constructor(doctorRemarkService: DoctorRemarkService);
    create(id: string, createDoctorRemarkDto: CreateDoctorRemarkDto): Promise<CommonResponseHandler>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateDoctorRemarkDto: UpdateDoctorRemarkDto): Promise<CommonResponseHandler>;
    remove(id: string): string;
}
