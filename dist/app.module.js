"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const medical_register_module_1 = require("./user-medical-register/modules/medical-register.module");
const result_entries_module_1 = require("./result-entry/modules/result-entries.module");
const dotenv = require("dotenv");
const agency_module_1 = require("./agency/modules/agency.module");
const position_module_1 = require("./position/modules/position.module");
const doctor_module_1 = require("./doctor/modules/doctor.module");
const country_module_1 = require("./country/modules/country.module");
const city_module_1 = require("./city/modules/city.module");
const nationality_module_1 = require("./nationality/modules/nationality.module");
const honorific_module_1 = require("./honorific/modules/honorific.module");
const passport_inquiry_module_1 = require("./passport-inquiry/modules/passport-inquiry.module");
const medical_issues_module_1 = require("./medical-issues/modules/medical-issues.module");
const lab_remark_module_1 = require("./lab-remark/modules/lab-remark.module");
const auth_module_1 = require("./auth/modules/auth.module");
const system_user_module_1 = require("./system-user/modules/system-user.module");
const delivery_module_1 = require("./delivery/modules/delivery.module");
const reports_module_1 = require("./reports/modules/reports.module");
const doctor_remark_module_1 = require("./doctor-remark/modules/doctor-remark.module");
const gallery_module_1 = require("./gallery/modules/gallery.module");
const medical_certificate_module_1 = require("./medical-certificate/modules/medical-certificate.module");
const gateway_module_1 = require("./gateway/gateway.module");
const audit_trail_module_1 = require("./audit-trail/modules/audit-trail.module");
const payment_module_1 = require("./normal-payment/modules/payment.module");
const mmr_payment_module_1 = require("./mmr-payment/modules/mmr-payment.module");
dotenv.config();
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: () => ({
                    type: 'postgres',
                    host: process.env.DB_POSTGRES_HOST,
                    port: parseInt(process.env.PORT),
                    username: process.env.DB_POSTGRES_USER,
                    password: process.env.DB_POSTGRES_PASSWORD,
                    database: process.env.DB_POSTGRES_DATABASE,
                    entities: [process.env.DB_POSTGRES_ENTITIES],
                    synchronize: true,
                }),
            }),
            medical_register_module_1.MedicalRegisterModule,
            result_entries_module_1.ResultEntriesModule,
            agency_module_1.AgencyModule,
            doctor_module_1.DoctorModule,
            position_module_1.PositionModule,
            country_module_1.CountryModule,
            city_module_1.CityModule,
            nationality_module_1.NationalityModule,
            honorific_module_1.HonorificModule,
            passport_inquiry_module_1.PassportInquiryModule,
            medical_issues_module_1.MedicalIssuesModule,
            lab_remark_module_1.LabRemarkModule,
            auth_module_1.AuthModule,
            system_user_module_1.SystemUsersModule,
            delivery_module_1.DeliveryModule,
            reports_module_1.ReportsModule,
            doctor_remark_module_1.DoctorRemarkModule,
            gallery_module_1.GalleryModule,
            medical_certificate_module_1.MedicalCertificateModule,
            gateway_module_1.GatewayModule,
            audit_trail_module_1.AuditTrailModule,
            payment_module_1.NormalPaymentModule,
            mmr_payment_module_1.MmrPaymentModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map