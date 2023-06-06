import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicalRegisterModule } from './user-medical-register/modules/medical-register.module';
import { ResultEntriesModule } from './result-entry/modules/result-entries.module';
import * as dotenv from 'dotenv';
import { AgencyModule } from './agency/modules/agency.module';
import { PositionModule } from './position/modules/position.module';
import { DoctorModule } from './doctor/modules/doctor.module';
import { CountryModule } from './country/modules/country.module';
import { CityModule } from './city/modules/city.module';
import { NationalityModule } from './nationality/modules/nationality.module';
import { HonorificModule } from './honorific/modules/honorific.module';
import { PassportInquiryModule } from './passport-inquiry/modules/passport-inquiry.module';
import { MedicalIssuesModule } from './medical-issues/modules/medical-issues.module';
import { LabRemarkModule } from './lab-remark/modules/lab-remark.module';
import { AuthModule } from './auth/modules/auth.module';
import { SystemUsersModule } from './system-user/modules/system-user.module';
import { DeliveryModule } from './delivery/modules/delivery.module';
import { ReportsModule } from './reports/modules/reports.module';
import { DoctorRemarkModule } from './doctor-remark/modules/doctor-remark.module';
import { GalleryModule } from './gallery/modules/gallery.module';
import { MedicalCertificateModule } from './medical-certificate/modules/medical-certificate.module';
import { GatewayModule } from './gateway/gateway.module';
import { AuditTrailModule } from './audit-trail/modules/audit-trail.module';
import { NormalPaymentModule } from './normal-payment/modules/payment.module';
import { MmrPaymentModule } from './mmr-payment/modules/mmr-payment.module';

dotenv.config();

@Module({
  imports: [
    // ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: process.env.DB_POSTGRES_HOST,
        port: parseInt(process.env.PORT),
        username: process.env.DB_POSTGRES_USER,
        password: process.env.DB_POSTGRES_PASSWORD,
        database: process.env.DB_POSTGRES_DATABASE,
        entities: [process.env.DB_POSTGRES_ENTITIES],
        synchronize: true, //false
        ssl: true,
      }),
    }),

    MedicalRegisterModule,
    ResultEntriesModule,
    AgencyModule,
    DoctorModule,
    PositionModule,
    CountryModule,
    CityModule,
    NationalityModule,
    HonorificModule,
    PassportInquiryModule,
    MedicalIssuesModule,
    LabRemarkModule,
    AuthModule,
    SystemUsersModule,
    DeliveryModule,
    ReportsModule,
    DoctorRemarkModule,
    GalleryModule,
    MedicalCertificateModule,
    GatewayModule,
    AuditTrailModule,
    NormalPaymentModule,
    MmrPaymentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
