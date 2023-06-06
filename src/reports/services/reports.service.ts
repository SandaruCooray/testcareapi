import { Injectable } from '@nestjs/common';
import { UpdateReportDto } from '../dto/update-report.dto';
import { MedicalRegisterService } from 'src/user-medical-register/services/medical-register.service';
import { LessThan } from 'typeorm';

@Injectable()
export class ReportsService {
  constructor(private medicalRegisterService: MedicalRegisterService) {}
  // async getNormalReport() {
  //   const data = await this.medicalRegisterService.findAll();

  //   const mapData = data.map((x) => {
  //     const filterObj = {
  //       serialNo: x.serialNo,
  //       passport: x.passport,
  //       registeredDate: x.registeredDate,
  //       firstName: x.firstName,
  //       lastName: x.lastName,
  //     };
  //     return filterObj;
  //   });

  //   return mapData;
  // }

  async getIssuedMedicalReport(fromDate, toDate, query) {
    const data = await this.medicalRegisterService.findAllByDateRange(
      fromDate,
      toDate,
      query,
    );

    const mapData = data.map((x) => {
      const filterObj = {
        passport: x.passport,
        date: x.registeredDate,
        name: x.firstName + ' ' + x.lastName,
        sex: x.sex,
        agency: x.agencyRef.name,
        country: x.countryRef.country,
        issuedBy: x?.medicalIssueRef?.processedBy,
      };
      return filterObj;
    });

    return mapData;
  }

  async registeredUserMedicalReport(fromDate, toDate, query) {
    const data = await this.medicalRegisterService.findAllByDateRange(
      fromDate,
      toDate,
      query,
    );

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
    const data = await this.medicalRegisterService.findAllByDateRange(
      fromDate,
      toDate,
      query,
    );

    const mapData = data.map((x) => {
      const filterObj = {
        date: x.registeredDate,
        passport: x.passport,
        name: x.firstName + ' ' + x.lastName,
        sex: x.sex,
        agency: x.agencyRef.name,
        country: x.countryRef.country,
        issuedBy: x?.deliveryRef?.processedBy,
        ref: x?.deliveryRef?.reference,
      };
      return filterObj;
    });

    return mapData;
  }

  async medicalListReport(fromDate, toDate, query) {
    const data = await this.medicalRegisterService.findAllByDateRange(
      fromDate,
      toDate,
      query,
    );
    const mapData = data.map((x) => {
      const filterObj = {
        date: x.registeredDate,
        passport: x.passport,
        name: x.firstName + ' ' + x.lastName,
        sex: x.sex,
        agency: x.agencyRef.name,
        country: x.countryRef.country,
        status: x?.resultEntryRef?.healthStatus?.toUpperCase(),
      };
      return filterObj;
    });

    return mapData;
  }

  async regMedicalUserReport(fromDate, toDate, query) {
    const data = await this.medicalRegisterService.findAllByDateRange(
      fromDate,
      toDate,
      query,
    );

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
    const data = await this.medicalRegisterService.findAllByDateRange(
      fromDate,
      toDate,
      query,
    );

    if (query.type === 'serology') {
      const mapData = data.map((x) => {
        const filterObj = {
          serialNo: x.serialNo,
          name: x.firstName + ' ' + x.lastName,
          refNo: x.refNo,
          hiv: x?.resultEntryRef?.result?.hivTest,
          aids: x?.resultEntryRef?.result?.aids,
          hbsAG: x?.resultEntryRef?.result?.hbsAG,
          antiHCV: x?.resultEntryRef?.result?.antiHCV,
          vdrl: x?.resultEntryRef?.result?.vdrl,
        };
        return filterObj;
      });

      return { template: 'serology-report', data: mapData };
    } else if (query.type === 'parasitalogy') {
      const mapData = data.map((x) => {
        const filterObj = {
          serialNo: x.serialNo,
          name: x.firstName + ' ' + x.lastName,
          refNo: x.refNo,
          passport: x.passport,
          microFilaria: x?.resultEntryRef?.result?.microFilaria,
          malariaFilm: x?.resultEntryRef?.result?.malariaFilm,
          antiHCV: x?.resultEntryRef?.result?.antiHCV,
          vdrl: x?.resultEntryRef?.result?.vdrl,
        };
        return filterObj;
      });
      return { template: 'parasitlogy-report', data: mapData };
    } else if (query.type === 'p&h') {
      const mapData = data.map((x) => {
        const filterObj = {
          serialNo: x.serialNo,
          passport: x.passport,
          name: x.firstName + ' ' + x.lastName,
          refNo: x.refNo,
          hemoglobin: x?.resultEntryRef?.result?.hemoglobin,
          rbsResult: x?.resultEntryRef?.result?.rbsResult,
          creatinineResult: x?.resultEntryRef?.result?.creatinineResult,
          sgpt: x?.resultEntryRef?.result?.sgpt,
          sgot: x?.resultEntryRef?.result?.sgot,
        };
        return filterObj;
      });
      return { template: 'parasitlogy-report', data: mapData };
    } else if (query.type === 'haematology') {
      const mapData = data.map((x) => {
        const filterObj = {
          serialNo: x.serialNo,
          refNo: x.refNo,
          passport: x.passport,
          name: x.firstName + ' ' + x.lastName,
          bloodGroup: x?.resultEntryRef?.result?.bloodGroup,
          malariaFilm: x?.resultEntryRef?.result?.malariaFilm,
          microFilaria: x?.resultEntryRef?.result?.microFilaria,
        };
        return filterObj;
      });
      console.log('mapData', mapData);
      return { template: 'heamatology-report', data: mapData };
    }
  }

  async serologyUserReport(fromDate, toDate, query) {}

  findOne(id: number) {
    return `This action returns a #${id} report`;
  }

  update(id: number, updateReportDto: UpdateReportDto) {
    return `This action updates a #${id} report`;
  }

  remove(id: number) {
    return `This action removes a #${id} report`;
  }
}
