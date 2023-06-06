import { DoctorService } from '../services/doctor.service';
import { CreateDoctorRequest } from '../dto/doctor-create.dto';
import { UpdateDoctorDto } from '../dto/doctor-update.dto';
import { CommonResponseHandler } from 'src/request-response-handlers/dtos/common-response.dto';
export declare class DoctorController {
    private readonly doctorService;
    constructor(doctorService: DoctorService);
    create(createDoctorRequest: CreateDoctorRequest): Promise<CommonResponseHandler>;
    findAll(): Promise<import("../entities/doctor.entity").DoctorEntity[]>;
    findOneById(id: string): Promise<import("../entities/doctor.entity").DoctorEntity>;
    update(id: string, updateDoctorDto: UpdateDoctorDto): Promise<CommonResponseHandler>;
}
