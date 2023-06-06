import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  Render,
  Query,
  Request,
  Response,
  HttpStatus,
} from '@nestjs/common';
import { ReportsService } from '../services/reports.service';
import { CreateReportDto } from '../dto/create-report.dto';
import { UpdateReportDto } from '../dto/update-report.dto';
import path, { join } from 'path';
import { CommonResponseHandler } from 'src/request-response-handlers/dtos/common-response.dto';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  // @Get('normal-medical')
  // @Render('normal-medical-report')
  // async getNormalReport() {
  //   const normalReportData = await this.reportsService.getNormalReport();

  //   return { normalReportData: normalReportData };
  // }

  @Get('issued-medical/:fromDate/:toDate')
  @Render('medical-issue-report')
  async getIssuedMedicalReport(
    @Param('fromDate') fromDate: string,
    @Param('toDate') toDate: string,
    @Query() query: any,
  ) {
    const data = await this.reportsService.getIssuedMedicalReport(
      fromDate,
      toDate,
      query,
    );

    return { reportData: data };
  }

  @Get('medical-delivery/:fromDate/:toDate')
  @Render('delivery-report')
  async getDeliveryReport(
    @Param('fromDate') fromDate: string,
    @Param('toDate') toDate: string,
    @Query() query: any,
  ) {
    const data = await this.reportsService.getDeliveryReport(
      fromDate,
      toDate,
      query,
    );

    return { reportData: data };
  }

  @Get('medical-list/:fromDate/:toDate')
  @Render('medical-list-report')
  async medicalListReport(
    @Param('fromDate') fromDate: string,
    @Param('toDate') toDate: string,
    @Query() query: any,
  ) {
    const data = await this.reportsService.medicalListReport(
      fromDate,
      toDate,
      query,
    );

    return { reportData: data };
  }

  @Get('reg-medical-user/:fromDate/:toDate')
  @Render('registered-user-report')
  async regMedicalUserReport(
    @Param('fromDate') fromDate: string,
    @Param('toDate') toDate: string,
    @Query() query: any,
  ) {
    console.log('fromDate', fromDate);
    console.log('toDate', toDate);
    console.log('query', query);
    const data = await this.reportsService.regMedicalUserReport(
      fromDate,
      toDate,
      query,
    );

    return { reportData: data };
  }

  @Get('medical-test-reports/:fromDate/:toDate')
  // @Render('registered-user-report-test')
  async medicaltestUserReport(
    @Param('fromDate') fromDate: string,
    @Param('toDate') toDate: string,
    @Query() query: any,
    @Response() res,
  ) {
    console.log('query', query);
    // const { param1, param2 } = query;
    const data = await this.reportsService.medicaltestUserReport(
      fromDate,
      toDate,
      query,
    );

    if (query?.excel == 'true') {
      return res.json(data.data);
    } else {
      return res.render(data.template, { reportData: data.data });
    }
  }
}
