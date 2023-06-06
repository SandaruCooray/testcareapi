import { Injectable } from '@nestjs/common';
import { CreatePassportInquiryDto } from '../dto/create-passport-inquiry.dto';
import { UpdatePassportInquiryDto } from '../dto/update-passport-inquiry.dto';

@Injectable()
export class PassportInquiryService {
  create(createPassportInquiryDto: CreatePassportInquiryDto) {
    return 'This action adds a new passportInquiry';
  }

  findAll() {
    return `This action returns all passportInquiry`;
  }

  findOne(id: number) {
    return `This action returns a #${id} passportInquiry`;
  }

  update(id: number, updatePassportInquiryDto: UpdatePassportInquiryDto) {
    return `This action updates a #${id} passportInquiry`;
  }

  remove(id: number) {
    return `This action removes a #${id} passportInquiry`;
  }
}
