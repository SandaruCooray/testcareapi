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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsService = void 0;
const common_1 = require("@nestjs/common");
const medical_register_service_1 = require("../../user-medical-register/services/medical-register.service");
let ReportsService = class ReportsService {
    constructor(medicalRegisterService) {
        this.medicalRegisterService = medicalRegisterService;
    }
    async getIssuedMedicalReport(fromDate, toDate, query) {
        const data = await this.medicalRegisterService.findAllByDateRange(fromDate, toDate, query);
        const mapData = data.map((x) => {
            var _a;
            const filterObj = {
                passport: x.passport,
                date: x.registeredDate,
                name: x.firstName + ' ' + x.lastName,
                sex: x.sex,
                agency: x.agencyRef.name,
                country: x.countryRef.country,
                issuedBy: (_a = x === null || x === void 0 ? void 0 : x.medicalIssueRef) === null || _a === void 0 ? void 0 : _a.processedBy,
            };
            return filterObj;
        });
        return mapData;
    }
    async registeredUserMedicalReport(fromDate, toDate, query) {
        const data = await this.medicalRegisterService.findAllByDateRange(fromDate, toDate, query);
        const mapData = data.map((x) => {
            const filterObj = {
                serialNo: x.serialNo,
                date: x.registeredDate,
                passport: x.passport,
                name: x.firstName + x.lastName,
                sex: x.sex,
                agency: x.agencyRef.name,
                country: x.countryRef.country,
            };
            return filterObj;
        });
        return mapData;
    }
    async getDeliveryReport(fromDate, toDate, query) {
        const data = await this.medicalRegisterService.findAllByDateRange(fromDate, toDate, query);
        const mapData = data.map((x) => {
            var _a, _b;
            const filterObj = {
                date: x.registeredDate,
                passport: x.passport,
                name: x.firstName + ' ' + x.lastName,
                sex: x.sex,
                agency: x.agencyRef.name,
                country: x.countryRef.country,
                issuedBy: (_a = x === null || x === void 0 ? void 0 : x.deliveryRef) === null || _a === void 0 ? void 0 : _a.processedBy,
                ref: (_b = x === null || x === void 0 ? void 0 : x.deliveryRef) === null || _b === void 0 ? void 0 : _b.reference,
            };
            return filterObj;
        });
        return mapData;
    }
    async medicalListReport(fromDate, toDate, query) {
        const data = await this.medicalRegisterService.findAllByDateRange(fromDate, toDate, query);
        const mapData = data.map((x) => {
            var _a, _b;
            const filterObj = {
                date: x.registeredDate,
                passport: x.passport,
                name: x.firstName + ' ' + x.lastName,
                sex: x.sex,
                agency: x.agencyRef.name,
                country: x.countryRef.country,
                status: (_b = (_a = x === null || x === void 0 ? void 0 : x.resultEntryRef) === null || _a === void 0 ? void 0 : _a.healthStatus) === null || _b === void 0 ? void 0 : _b.toUpperCase(),
            };
            return filterObj;
        });
        return mapData;
    }
    async regMedicalUserReport(fromDate, toDate, query) {
        const data = await this.medicalRegisterService.findAllByDateRange(fromDate, toDate, query);
        const mapData = data.map((x) => {
            const filterObj = {
                serialNo: x.serialNo,
                date: x.registeredDate,
                passport: x.passport,
                name: x.firstName + ' ' + x.lastName,
                sex: x.sex,
                agency: x.agencyRef.name,
                country: x.countryRef.country,
            };
            return filterObj;
        });
        return mapData;
    }
    async medicaltestUserReport(fromDate, toDate, query) {
        const data = await this.medicalRegisterService.findAllByDateRange(fromDate, toDate, query);
        if (query.type === 'serology') {
            const mapData = data.map((x) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
                const filterObj = {
                    serialNo: x.serialNo,
                    name: x.firstName + ' ' + x.lastName,
                    refNo: x.refNo,
                    hiv: (_b = (_a = x === null || x === void 0 ? void 0 : x.resultEntryRef) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.hivTest,
                    aids: (_d = (_c = x === null || x === void 0 ? void 0 : x.resultEntryRef) === null || _c === void 0 ? void 0 : _c.result) === null || _d === void 0 ? void 0 : _d.aids,
                    hbsAG: (_f = (_e = x === null || x === void 0 ? void 0 : x.resultEntryRef) === null || _e === void 0 ? void 0 : _e.result) === null || _f === void 0 ? void 0 : _f.hbsAG,
                    antiHCV: (_h = (_g = x === null || x === void 0 ? void 0 : x.resultEntryRef) === null || _g === void 0 ? void 0 : _g.result) === null || _h === void 0 ? void 0 : _h.antiHCV,
                    vdrl: (_k = (_j = x === null || x === void 0 ? void 0 : x.resultEntryRef) === null || _j === void 0 ? void 0 : _j.result) === null || _k === void 0 ? void 0 : _k.vdrl,
                };
                return filterObj;
            });
            return { template: 'serology-report', data: mapData };
        }
        else if (query.type === 'parasitalogy') {
            const mapData = data.map((x) => {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                const filterObj = {
                    serialNo: x.serialNo,
                    name: x.firstName + ' ' + x.lastName,
                    refNo: x.refNo,
                    passport: x.passport,
                    microFilaria: (_b = (_a = x === null || x === void 0 ? void 0 : x.resultEntryRef) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.microFilaria,
                    malariaFilm: (_d = (_c = x === null || x === void 0 ? void 0 : x.resultEntryRef) === null || _c === void 0 ? void 0 : _c.result) === null || _d === void 0 ? void 0 : _d.malariaFilm,
                    antiHCV: (_f = (_e = x === null || x === void 0 ? void 0 : x.resultEntryRef) === null || _e === void 0 ? void 0 : _e.result) === null || _f === void 0 ? void 0 : _f.antiHCV,
                    vdrl: (_h = (_g = x === null || x === void 0 ? void 0 : x.resultEntryRef) === null || _g === void 0 ? void 0 : _g.result) === null || _h === void 0 ? void 0 : _h.vdrl,
                };
                return filterObj;
            });
            return { template: 'parasitlogy-report', data: mapData };
        }
        else if (query.type === 'p&h') {
            const mapData = data.map((x) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
                const filterObj = {
                    serialNo: x.serialNo,
                    passport: x.passport,
                    name: x.firstName + ' ' + x.lastName,
                    refNo: x.refNo,
                    hemoglobin: (_b = (_a = x === null || x === void 0 ? void 0 : x.resultEntryRef) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.hemoglobin,
                    rbsResult: (_d = (_c = x === null || x === void 0 ? void 0 : x.resultEntryRef) === null || _c === void 0 ? void 0 : _c.result) === null || _d === void 0 ? void 0 : _d.rbsResult,
                    creatinineResult: (_f = (_e = x === null || x === void 0 ? void 0 : x.resultEntryRef) === null || _e === void 0 ? void 0 : _e.result) === null || _f === void 0 ? void 0 : _f.creatinineResult,
                    sgpt: (_h = (_g = x === null || x === void 0 ? void 0 : x.resultEntryRef) === null || _g === void 0 ? void 0 : _g.result) === null || _h === void 0 ? void 0 : _h.sgpt,
                    sgot: (_k = (_j = x === null || x === void 0 ? void 0 : x.resultEntryRef) === null || _j === void 0 ? void 0 : _j.result) === null || _k === void 0 ? void 0 : _k.sgot,
                };
                return filterObj;
            });
            return { template: 'parasitlogy-report', data: mapData };
        }
        else if (query.type === 'haematology') {
            const mapData = data.map((x) => {
                var _a, _b, _c, _d, _e, _f;
                const filterObj = {
                    serialNo: x.serialNo,
                    refNo: x.refNo,
                    passport: x.passport,
                    name: x.firstName + ' ' + x.lastName,
                    bloodGroup: (_b = (_a = x === null || x === void 0 ? void 0 : x.resultEntryRef) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.bloodGroup,
                    malariaFilm: (_d = (_c = x === null || x === void 0 ? void 0 : x.resultEntryRef) === null || _c === void 0 ? void 0 : _c.result) === null || _d === void 0 ? void 0 : _d.malariaFilm,
                    microFilaria: (_f = (_e = x === null || x === void 0 ? void 0 : x.resultEntryRef) === null || _e === void 0 ? void 0 : _e.result) === null || _f === void 0 ? void 0 : _f.microFilaria,
                };
                return filterObj;
            });
            console.log('mapData', mapData);
            return { template: 'heamatology-report', data: mapData };
        }
    }
    async serologyUserReport(fromDate, toDate, query) { }
    findOne(id) {
        return `This action returns a #${id} report`;
    }
    update(id, updateReportDto) {
        return `This action updates a #${id} report`;
    }
    remove(id) {
        return `This action removes a #${id} report`;
    }
};
ReportsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [medical_register_service_1.MedicalRegisterService])
], ReportsService);
exports.ReportsService = ReportsService;
//# sourceMappingURL=reports.service.js.map