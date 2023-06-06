import { PassportInquiryService } from '../services/passport-inquiry.service';
import { CreatePassportInquiryDto } from '../dto/create-passport-inquiry.dto';
import { UpdatePassportInquiryDto } from '../dto/update-passport-inquiry.dto';
export declare class PassportInquiryController {
    private readonly passportInquiryService;
    constructor(passportInquiryService: PassportInquiryService);
    create(createPassportInquiryDto: CreatePassportInquiryDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePassportInquiryDto: UpdatePassportInquiryDto): string;
    remove(id: string): string;
}
