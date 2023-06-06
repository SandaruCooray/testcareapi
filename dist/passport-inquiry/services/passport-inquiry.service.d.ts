import { CreatePassportInquiryDto } from '../dto/create-passport-inquiry.dto';
import { UpdatePassportInquiryDto } from '../dto/update-passport-inquiry.dto';
export declare class PassportInquiryService {
    create(createPassportInquiryDto: CreatePassportInquiryDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePassportInquiryDto: UpdatePassportInquiryDto): string;
    remove(id: number): string;
}
