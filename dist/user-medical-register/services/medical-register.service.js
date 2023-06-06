"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicalRegisterService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const medical_register_entity_1 = require("../entities/medical-register.entity");
const honorific_entity_1 = require("../../honorific/entities/honorific.entity");
const doctor_entity_1 = require("../../doctor/entities/doctor.entity");
const nationality_entity_1 = require("../../nationality/entities/nationality.entity");
const position_entity_1 = require("../../position/entities/position.entity");
const agency_entity_1 = require("../../agency/entities/agency.entity");
const city_entity_1 = require("../../city/entities/city.entity");
const country_entity_1 = require("../../country/entities/country.entity");
const lab_remark_entity_1 = require("../../lab-remark/entities/lab-remark.entity");
const lab_remark_service_1 = require("../../lab-remark/services/lab-remark.service");
const medical_issue_entity_1 = require("../../medical-issues/entities/medical-issue.entity");
const medical_issues_service_1 = require("../../medical-issues/services/medical-issues.service");
const result_entry_entity_1 = require("../../result-entry/entities/result-entry.entity");
const result_entries_service_1 = require("../../result-entry/services/result-entries.service");
const delivery_entity_1 = require("../../delivery/entities/delivery.entity");
const delivery_service_1 = require("../../delivery/services/delivery.service");
const moment = require("moment");
const doctor_remark_entity_1 = require("../../doctor-remark/entities/doctor-remark.entity");
const doctor_remark_service_1 = require("../../doctor-remark/services/doctor-remark.service");
const medical_certificate_entity_1 = require("../../medical-certificate/entities/medical-certificate.entity");
const const_1 = require("../../config/const");
const mmr_payment_entity_1 = require("../../mmr-payment/entities/mmr-payment.entity");
const payment_entity_1 = require("../../normal-payment/entities/payment.entity");
const payment_service_1 = require("../../normal-payment/services/payment.service");
const mmr_payment_service_1 = require("../../mmr-payment/services/mmr-payment.service");
const medical_certificate_service_1 = require("../../medical-certificate/services/medical-certificate.service");
let MedicalRegisterService = class MedicalRegisterService {
    constructor(medicalRegistrationBasicRepository, labRemarkService, medicalIssuesService, resultEntriesService, deliveryService, doctorRemarkService, normalPaymentService, mmrPaymentService, medicalCertificateService) {
        this.medicalRegistrationBasicRepository = medicalRegistrationBasicRepository;
        this.labRemarkService = labRemarkService;
        this.medicalIssuesService = medicalIssuesService;
        this.resultEntriesService = resultEntriesService;
        this.deliveryService = deliveryService;
        this.doctorRemarkService = doctorRemarkService;
        this.normalPaymentService = normalPaymentService;
        this.mmrPaymentService = mmrPaymentService;
        this.medicalCertificateService = medicalCertificateService;
    }
    async create(createMedicalRegisterBasicDto) {
        try {
            const userBasicInfo = createMedicalRegisterBasicDto;
            const passportvalidity = await this.findOneByPassportNumber(userBasicInfo.passport);
            if (passportvalidity) {
                throw new common_1.HttpException({
                    status: common_1.HttpStatus.FORBIDDEN,
                    message: `Passport is already exists!`,
                }, common_1.HttpStatus.FORBIDDEN);
            }
            const medicalRegisterEntity = await this.medicalRegisterUserInfo(userBasicInfo);
            const medicalRegInfo = await this.medicalRegistrationBasicRepository.save(medicalRegisterEntity);
            return medicalRegInfo;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async medicalRegisterUserInfo(userBasicInfo) {
        const hororificEntity = new honorific_entity_1.HororificEntity();
        hororificEntity.id = userBasicInfo.honorific;
        const doctorEntity = new doctor_entity_1.DoctorEntity();
        doctorEntity.id = userBasicInfo.doctor;
        const nationalityEntity = new nationality_entity_1.NationalityEntity();
        nationalityEntity.id = userBasicInfo.nationality;
        const positionEntity = new position_entity_1.PositionEntity();
        positionEntity.id = userBasicInfo.position;
        const cityEntity = new city_entity_1.CityEntity();
        cityEntity.id = userBasicInfo.place_of_birth;
        const certificates = await this.medicalCertificateService.findByIds(userBasicInfo.medicalCertificates);
        console.log('certificates', certificates);
        const agencyEntity = new agency_entity_1.AgencyEntity();
        agencyEntity.id = userBasicInfo.agency;
        const countryEntity = new country_entity_1.CountryEntity();
        countryEntity.id = userBasicInfo.country;
        let labRemarkEnti;
        let medicalIssueEntit;
        let resultEntryEntit;
        let deliveryEntiti;
        let doctorRemarkEnti;
        let normalPaymentEnti;
        let mmrPaymentEnti;
        const medicalRegisterEntity = new medical_register_entity_1.MedicalRegisterEntity();
        const normalPaymentEntity = new payment_entity_1.NormalPaymentEntity();
        normalPaymentEnti = await this.normalPaymentService.create(normalPaymentEntity);
        const mmrPaymentEntity = new mmr_payment_entity_1.MmrPaymentEntity();
        mmrPaymentEnti = await this.mmrPaymentService.create(mmrPaymentEntity);
        const labRemarkEntity = new lab_remark_entity_1.LabRemarkEntity();
        labRemarkEnti = await this.labRemarkService.create(labRemarkEntity);
        const doctorRemarkEntity = new doctor_remark_entity_1.DoctorRemarkEntity();
        doctorRemarkEnti = await this.doctorRemarkService.create(doctorRemarkEntity);
        const medicalIssueEntity = new medical_issue_entity_1.MedicalIssueEntity();
        medicalIssueEntit = await this.medicalIssuesService.create(medicalIssueEntity);
        const resultEntryEntity = new result_entry_entity_1.ResultEntryEntity();
        if (userBasicInfo.medicalType == 'normal') {
            resultEntryEntity.result = const_1.NORMAL_DEFAULT;
        }
        else {
            resultEntryEntity.result = const_1.GHC_SPECIAL_DEFAULT;
        }
        resultEntryEntit = await this.resultEntriesService.create(resultEntryEntity);
        const deliveryEntity = new delivery_entity_1.DeliveryEntity();
        deliveryEntiti = await this.deliveryService.create(deliveryEntity);
        medicalRegisterEntity.labRemarkRef = labRemarkEnti;
        medicalRegisterEntity.medicalIssueRef = medicalIssueEntit;
        medicalRegisterEntity.resultEntryRef = resultEntryEntit;
        medicalRegisterEntity.deliveryRef = deliveryEntiti;
        medicalRegisterEntity.doctorRemarkRef = doctorRemarkEnti;
        medicalRegisterEntity.normalPaymentRef = normalPaymentEnti;
        medicalRegisterEntity.mmrPaymentRef = mmrPaymentEnti;
        medicalRegisterEntity.nationalityRef = nationalityEntity;
        medicalRegisterEntity.doctorRef = doctorEntity;
        medicalRegisterEntity.honorificRef = hororificEntity;
        medicalRegisterEntity.positionRef = positionEntity;
        medicalRegisterEntity.placeOfBirthRef = cityEntity;
        medicalRegisterEntity.agencyRef = agencyEntity;
        medicalRegisterEntity.countryRef = countryEntity;
        medicalRegisterEntity.medicalCertificatesRef = certificates;
        const result = await this.generateSerialNo();
        medicalRegisterEntity.serialNo = result.serialNo;
        medicalRegisterEntity.refNo = result.refNo;
        const { agency, country, honorific, doctor, nationality, treatments, place_of_birth, position } = userBasicInfo, rest = __rest(userBasicInfo, ["agency", "country", "honorific", "doctor", "nationality", "treatments", "place_of_birth", "position"]);
        const resultObj = Object.assign(Object.assign({}, medicalRegisterEntity), rest);
        console.log('resultObj', resultObj);
        return resultObj;
    }
    async findAll() {
        const medicalRegInfo = await this.medicalRegistrationBasicRepository.find({
            relations: [
                'honorificRef',
                'doctorRef',
                'nationalityRef',
                'countryRef',
                'agencyRef',
            ],
        });
        if (medicalRegInfo.length == 0) {
            throw new common_1.HttpException({ status: common_1.HttpStatus.FORBIDDEN, message: `Data not found` }, common_1.HttpStatus.FORBIDDEN);
        }
        return medicalRegInfo;
    }
    async findAllByDateRange(fromDate, toDate, query) {
        if (query === null || query === void 0 ? void 0 : query.sex) {
            query.sex = 'ASC';
        }
        else if (query === null || query === void 0 ? void 0 : query.agency) {
            query = {
                agencyRef: {
                    name: 'ASC',
                },
            };
        }
        else if (query === null || query === void 0 ? void 0 : query.country) {
            query = {
                countryRef: {
                    country: 'ASC',
                },
            };
        }
        else {
            query = { id: 'ASC' };
        }
        try {
            const medicalRegInfo = await this.medicalRegistrationBasicRepository.find({
                where: {
                    registeredDate: (0, typeorm_2.Between)(fromDate, toDate),
                },
                relations: [
                    'honorificRef',
                    'doctorRef',
                    'nationalityRef',
                    'countryRef',
                    'agencyRef',
                    'resultEntryRef',
                    'deliveryRef',
                    'medicalIssueRef',
                    'normalPaymentRef',
                    'mmrPaymentRef',
                ],
                order: query,
            });
            if (medicalRegInfo.length == 0) {
                throw new common_1.HttpException({ status: common_1.HttpStatus.FORBIDDEN, message: `Data not found` }, common_1.HttpStatus.FORBIDDEN);
            }
            return medicalRegInfo;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async findOneById(id) {
        try {
            const medicalRegInfo = await this.medicalRegistrationBasicRepository.findOne({
                where: { id },
                relations: [
                    'honorificRef',
                    'doctorRef',
                    'nationalityRef',
                    'positionRef',
                    'labRemarkRef',
                    'resultEntryRef',
                    'agencyRef',
                    'countryRef',
                    'placeOfBirthRef',
                    'deliveryRef',
                    'medicalIssueRef',
                    'medicalCertificatesRef',
                    'normalPaymentRef',
                    'mmrPaymentRef',
                ],
            });
            if (!medicalRegInfo) {
                throw new common_1.HttpException({ status: common_1.HttpStatus.FORBIDDEN, message: `Data not found` }, common_1.HttpStatus.FORBIDDEN);
            }
            return medicalRegInfo;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async findOneByPassportNumber(passportNo) {
        try {
            const medicalRegInfo = await this.medicalRegistrationBasicRepository.findOne({
                where: { passport: passportNo },
            });
            return medicalRegInfo;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async findOneByUniqueID(query) {
        try {
            if ((query === null || query === void 0 ? void 0 : query.passport) || (query === null || query === void 0 ? void 0 : query.refNo)) {
                const medicalRegInfo = await this.medicalRegistrationBasicRepository.findOne({
                    where: query,
                    relations: [
                        'honorificRef',
                        'doctorRef',
                        'nationalityRef',
                        'positionRef',
                        'labRemarkRef',
                        'resultEntryRef',
                        'agencyRef',
                        'countryRef',
                        'placeOfBirthRef',
                        'deliveryRef',
                        'medicalIssueRef',
                        'doctorRemarkRef',
                        'medicalCertificatesRef',
                        'normalPaymentRef',
                        'mmrPaymentRef',
                    ],
                });
                if (!medicalRegInfo) {
                    throw new common_1.HttpException({ status: common_1.HttpStatus.FORBIDDEN, message: `Data not found` }, common_1.HttpStatus.FORBIDDEN);
                }
                return medicalRegInfo;
            }
            else {
                throw new common_1.HttpException({ status: common_1.HttpStatus.FORBIDDEN, message: `Data not found` }, common_1.HttpStatus.FORBIDDEN);
            }
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async updateRegMedical(id, updateMedicalRegisterDto) {
        try {
            const userBasicInfo = updateMedicalRegisterDto;
            const hororificEntity = new honorific_entity_1.HororificEntity();
            hororificEntity.id = userBasicInfo.honorific;
            const doctorEntity = new doctor_entity_1.DoctorEntity();
            doctorEntity.id = userBasicInfo.doctor;
            const nationalityEntity = new nationality_entity_1.NationalityEntity();
            nationalityEntity.id = userBasicInfo.nationality;
            const positionEntity = new position_entity_1.PositionEntity();
            positionEntity.id = userBasicInfo.position;
            const cityEntity = new city_entity_1.CityEntity();
            cityEntity.id = userBasicInfo.place_of_birth;
            const medicalCertificateEntity = new medical_certificate_entity_1.MedicalCertificateEntity();
            medicalCertificateEntity.id = userBasicInfo.medical_certificate;
            const agencyEntity = new agency_entity_1.AgencyEntity();
            agencyEntity.id = userBasicInfo.agency;
            const countryEntity = new country_entity_1.CountryEntity();
            countryEntity.id = userBasicInfo.country;
            const medicalRegisterEntity = new medical_register_entity_1.MedicalRegisterEntity();
            medicalRegisterEntity.nationalityRef = nationalityEntity;
            medicalRegisterEntity.doctorRef = doctorEntity;
            medicalRegisterEntity.honorificRef = hororificEntity;
            medicalRegisterEntity.positionRef = positionEntity;
            medicalRegisterEntity.placeOfBirthRef = cityEntity;
            medicalRegisterEntity.agencyRef = agencyEntity;
            medicalRegisterEntity.countryRef = countryEntity;
            const { agency, country, honorific, doctor, nationality, medical_certificate, place_of_birth, position } = userBasicInfo, rest = __rest(userBasicInfo, ["agency", "country", "honorific", "doctor", "nationality", "medical_certificate", "place_of_birth", "position"]);
            const resultObj = Object.assign(Object.assign({}, medicalRegisterEntity), rest);
            const medicalRegInfo = await this.medicalRegistrationBasicRepository.update(id, resultObj);
            return medicalRegInfo;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async findByDate(regDate) {
        try {
            const medicalRegInfo = await this.medicalRegistrationBasicRepository.find({
                where: { registeredDate: regDate },
                relations: ['countryRef', 'resultEntryRef'],
            });
            if (!medicalRegInfo) {
                throw new common_1.HttpException({ status: common_1.HttpStatus.FORBIDDEN, message: `Data not found` }, common_1.HttpStatus.FORBIDDEN);
            }
            return medicalRegInfo;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async generateSerialNo() {
        try {
            const medicalRegLatest = await this.medicalRegistrationBasicRepository.findOne({
                where: {},
                order: { createdAt: 'DESC' },
            });
            let newSericalNo;
            let newRefNo;
            const now = moment().format(moment.HTML5_FMT.DATE);
            const lastRegDate = moment(medicalRegLatest === null || medicalRegLatest === void 0 ? void 0 : medicalRegLatest.registeredDate).format(moment.HTML5_FMT.DATE);
            if (now > lastRegDate || !medicalRegLatest) {
                newSericalNo = 1;
            }
            else {
                newSericalNo = parseInt(medicalRegLatest.serialNo) + 1;
            }
            if (!medicalRegLatest) {
                newRefNo = 1;
            }
            else {
                newRefNo = parseInt(medicalRegLatest.refNo) + 1;
            }
            const refNo = newRefNo.toString();
            const serialNo = newSericalNo.toString();
            return { serialNo, refNo };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async pagination(take, skip) {
        const medicalRegLatest = await this.medicalRegistrationBasicRepository.findAndCount({
            take,
            skip,
        });
    }
    async statusChange(id, status) {
        try {
            return await this.medicalRegistrationBasicRepository.update(id, {
                approved: status,
                approvedTime: new Date().toISOString(),
            });
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
};
MedicalRegisterService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(medical_register_entity_1.MedicalRegisterEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        lab_remark_service_1.LabRemarkService,
        medical_issues_service_1.MedicalIssuesService,
        result_entries_service_1.ResultEntriesService,
        delivery_service_1.DeliveryService,
        doctor_remark_service_1.DoctorRemarkService,
        payment_service_1.NormalPaymentService,
        mmr_payment_service_1.MmrPaymentService,
        medical_certificate_service_1.MedicalCertificateService])
], MedicalRegisterService);
exports.MedicalRegisterService = MedicalRegisterService;
//# sourceMappingURL=medical-register.service.js.map