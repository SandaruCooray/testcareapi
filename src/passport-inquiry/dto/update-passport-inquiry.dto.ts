import { PartialType } from '@nestjs/swagger';
import { CreatePassportInquiryDto } from './create-passport-inquiry.dto';

export class UpdatePassportInquiryDto extends PartialType(CreatePassportInquiryDto) {}
