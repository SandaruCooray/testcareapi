import { Module } from '@nestjs/common';
import { PassportInquiryService } from '../services/passport-inquiry.service';
import { PassportInquiryController } from '../controllers/passport-inquiry.controller';

@Module({
  controllers: [PassportInquiryController],
  providers: [PassportInquiryService],
})
export class PassportInquiryModule {}
