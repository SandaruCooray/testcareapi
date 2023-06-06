import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateMedicalRegisterBasicDto } from '../dto/create-medical-register-basic.dto';
import { UpdateMedicalRegisterDto } from '../dto/update-medical-register.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, LessThan, MoreThan, Repository } from 'typeorm';
import { MedicalRegisterEntity } from '../entities/medical-register.entity';

import { HororificEntity } from 'src/honorific/entities/honorific.entity';
import { DoctorEntity } from 'src/doctor/entities/doctor.entity';
import { NationalityEntity } from 'src/nationality/entities/nationality.entity';
import { FingerPrintEntity } from '../../fingerprint/entities/finger-print.entity';
import { PositionEntity } from 'src/position/entities/position.entity';
import { AgencyEntity } from 'src/agency/entities/agency.entity';
import { CityEntity } from 'src/city/entities/city.entity';
import { CountryEntity } from 'src/country/entities/country.entity';
import { LabRemarkEntity } from 'src/lab-remark/entities/lab-remark.entity';
import { LabRemarkService } from 'src/lab-remark/services/lab-remark.service';
import { MedicalIssueEntity } from 'src/medical-issues/entities/medical-issue.entity';
import { MedicalIssuesService } from 'src/medical-issues/services/medical-issues.service';
import { ResultEntryEntity } from 'src/result-entry/entities/result-entry.entity';
import { ResultEntriesService } from 'src/result-entry/services/result-entries.service';
import { DeliveryEntity } from 'src/delivery/entities/delivery.entity';
import { DeliveryService } from 'src/delivery/services/delivery.service';
import * as moment from 'moment';
import { DoctorRemarkEntity } from 'src/doctor-remark/entities/doctor-remark.entity';
import { DoctorRemarkService } from 'src/doctor-remark/services/doctor-remark.service';
import { MedicalCertificateEntity } from 'src/medical-certificate/entities/medical-certificate.entity';
import { GHC_SPECIAL_DEFAULT, NORMAL_DEFAULT } from 'src/config/const';
import { MmrPaymentEntity } from 'src/mmr-payment/entities/mmr-payment.entity';
import { NormalPaymentEntity } from 'src/normal-payment/entities/payment.entity';
import { NormalPaymentService } from 'src/normal-payment/services/payment.service';
import { MmrPaymentService } from 'src/mmr-payment/services/mmr-payment.service';
import { MedicalCertificateService } from 'src/medical-certificate/services/medical-certificate.service';

@Injectable()
export class MedicalRegisterService {
  constructor(
    @InjectRepository(MedicalRegisterEntity)
    private medicalRegistrationBasicRepository: Repository<MedicalRegisterEntity>,
    private labRemarkService: LabRemarkService,
    private medicalIssuesService: MedicalIssuesService,
    private resultEntriesService: ResultEntriesService,
    private deliveryService: DeliveryService,
    private doctorRemarkService: DoctorRemarkService,
    private normalPaymentService: NormalPaymentService,
    private mmrPaymentService: MmrPaymentService,
    private medicalCertificateService: MedicalCertificateService,
  ) {}

  //create medical registration
  async create(createMedicalRegisterBasicDto: CreateMedicalRegisterBasicDto) {
    try {
      const userBasicInfo = createMedicalRegisterBasicDto;

      const passportvalidity = await this.findOneByPassportNumber(
        userBasicInfo.passport,
      );

      if (passportvalidity) {
        throw new HttpException(
          {
            status: HttpStatus.FORBIDDEN,
            message: `Passport is already exists!`,
          },
          HttpStatus.FORBIDDEN,
        );
      }

      // const medicalOtherInfo: MedicalRegistrationInfoEntity =
      //   await this.medicalRegisterOtherInfo(otherInfo);

      const medicalRegisterEntity = await this.medicalRegisterUserInfo(
        userBasicInfo,
      );

      const medicalRegInfo: MedicalRegisterEntity =
        await this.medicalRegistrationBasicRepository.save(
          medicalRegisterEntity,
        );

      return medicalRegInfo;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  //create medical registration related user information
  async medicalRegisterUserInfo(userBasicInfo) {
    const hororificEntity = new HororificEntity();
    hororificEntity.id = userBasicInfo.honorific;

    const doctorEntity = new DoctorEntity();
    doctorEntity.id = userBasicInfo.doctor;

    const nationalityEntity = new NationalityEntity();
    nationalityEntity.id = userBasicInfo.nationality;

    const positionEntity = new PositionEntity();
    positionEntity.id = userBasicInfo.position;

    const cityEntity = new CityEntity();
    cityEntity.id = userBasicInfo.place_of_birth;

    // const medCertificate = [];
    // if (userBasicInfo.medical_certificate.length > 0) {
    //   for (
    //     let index = 0;
    //     index < userBasicInfo.medical_certificate.length;
    //     index++
    //   ) {
    //     const medicalCertificateEntity = new MedicalCertificateEntity();
    //     medicalCertificateEntity.id = userBasicInfo.medical_certificate[index];
    //     medCertificate.push(medicalCertificateEntity);
    //   }
    // }

    // const medicalCertificateEntity = new MedicalCertificateEntity();
    const certificates = await this.medicalCertificateService.findByIds(
      userBasicInfo.medicalCertificates,
    );

    console.log('certificates', certificates);

    const agencyEntity = new AgencyEntity();
    agencyEntity.id = userBasicInfo.agency;

    const countryEntity = new CountryEntity();
    countryEntity.id = userBasicInfo.country;

    let labRemarkEnti: LabRemarkEntity;
    let medicalIssueEntit: MedicalIssueEntity;
    let resultEntryEntit: ResultEntryEntity;
    let deliveryEntiti: DeliveryEntity;
    let doctorRemarkEnti: DoctorRemarkEntity;
    let normalPaymentEnti: NormalPaymentEntity;
    let mmrPaymentEnti: MmrPaymentEntity;

    const medicalRegisterEntity = new MedicalRegisterEntity();

    const normalPaymentEntity = new NormalPaymentEntity();
    normalPaymentEnti = await this.normalPaymentService.create(
      normalPaymentEntity,
    );

    const mmrPaymentEntity = new MmrPaymentEntity();
    mmrPaymentEnti = await this.mmrPaymentService.create(mmrPaymentEntity);

    const labRemarkEntity = new LabRemarkEntity();
    labRemarkEnti = await this.labRemarkService.create(labRemarkEntity);

    const doctorRemarkEntity = new DoctorRemarkEntity();
    doctorRemarkEnti = await this.doctorRemarkService.create(
      doctorRemarkEntity,
    );

    const medicalIssueEntity = new MedicalIssueEntity();
    medicalIssueEntit = await this.medicalIssuesService.create(
      medicalIssueEntity,
    );

    const resultEntryEntity = new ResultEntryEntity();
    if (userBasicInfo.medicalType == 'normal') {
      resultEntryEntity.result = NORMAL_DEFAULT;
    } else {
      resultEntryEntity.result = GHC_SPECIAL_DEFAULT;
    }

    resultEntryEntit = await this.resultEntriesService.create(
      resultEntryEntity,
    );

    const deliveryEntity = new DeliveryEntity();
    deliveryEntiti = await this.deliveryService.create(deliveryEntity);

    medicalRegisterEntity.labRemarkRef = labRemarkEnti;
    medicalRegisterEntity.medicalIssueRef = medicalIssueEntit;
    medicalRegisterEntity.resultEntryRef = resultEntryEntit;
    medicalRegisterEntity.deliveryRef = deliveryEntiti;
    medicalRegisterEntity.doctorRemarkRef = doctorRemarkEnti;
    medicalRegisterEntity.normalPaymentRef = normalPaymentEnti;
    medicalRegisterEntity.mmrPaymentRef = mmrPaymentEnti;

    //add basic infor for medical registration

    medicalRegisterEntity.nationalityRef = nationalityEntity;
    medicalRegisterEntity.doctorRef = doctorEntity;
    medicalRegisterEntity.honorificRef = hororificEntity;
    medicalRegisterEntity.positionRef = positionEntity;
    medicalRegisterEntity.placeOfBirthRef = cityEntity;
    // medicalRegisterEntity.medicalCertificateRef = medCertificate;
    medicalRegisterEntity.agencyRef = agencyEntity;
    medicalRegisterEntity.countryRef = countryEntity;
    medicalRegisterEntity.medicalCertificatesRef = certificates;

    const result = await this.generateSerialNo();
    medicalRegisterEntity.serialNo = result.serialNo;
    medicalRegisterEntity.refNo = result.refNo;

    const {
      agency,
      country,
      honorific,
      doctor,
      nationality,
      treatments,
      place_of_birth,
      position,
      ...rest
    } = userBasicInfo;

    const resultObj = { ...medicalRegisterEntity, ...rest };

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
      throw new HttpException(
        { status: HttpStatus.FORBIDDEN, message: `Data not found` },
        HttpStatus.FORBIDDEN,
      );
    }

    return medicalRegInfo;
  }

  async findAllByDateRange(fromDate, toDate, query) {
    if (query?.sex) {
      query.sex = 'ASC';
    } else if (query?.agency) {
      query = {
        agencyRef: {
          name: 'ASC',
        },
      };
    } else if (query?.country) {
      query = {
        countryRef: {
          country: 'ASC',
        },
      };
    } else {
      query = { id: 'ASC' };
    }

    try {
      const medicalRegInfo = await this.medicalRegistrationBasicRepository.find(
        {
          where: {
            registeredDate: Between(fromDate, toDate),
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
        },
      );
      if (medicalRegInfo.length == 0) {
        throw new HttpException(
          { status: HttpStatus.FORBIDDEN, message: `Data not found` },
          HttpStatus.FORBIDDEN,
        );
      }

      return medicalRegInfo;

      // const medicalRegInfo = await this.medicalRegistrationBasicRepository
      //   .createQueryBuilder('user_medical_registration')
      //   .select('user_medical_registration')
      //   .select([
      //     'user_medical_registration.sex',
      //     'COUNT(user_medical_registration.sex) AS registrationCount',
      //   ])
      //   .leftJoinAndSelect('user_medical_registration.doctorRef', 'doctor')
      //   .leftJoinAndSelect(
      //     'user_medical_registration.honorificRef',
      //     'honorific',
      //   )
      //   .leftJoinAndSelect(
      //     'user_medical_registration.nationalityRef',
      //     'nationality',
      //   )
      //   .leftJoinAndSelect('user_medical_registration.countryRef', 'country')
      //   .leftJoinAndSelect('user_medical_registration.agencyRef', 'agency')
      //   .leftJoinAndSelect(
      //     'user_medical_registration.resultEntryRef',
      //     'result_entry',
      //   )
      //   .leftJoinAndSelect('user_medical_registration.deliveryRef', 'delivery')
      //   .leftJoinAndSelect(
      //     'user_medical_registration.medicalIssueRef',
      //     'medical_issue',
      //   )
      //   .where({ registeredDate: Between(fromDate, toDate) })
      //   //.groupBy('user_medical_registration.id')
      //   .getRawMany();
      // const medicalRegInfo = await this.medicalRegistrationBasicRepository
      //   .createQueryBuilder('user_medical_registration')
      //   .where({ registeredDate: Between(fromDate, toDate) })
      //   .orderBy('user_medical_registration.sex', 'ASC')
      //   .getMany();
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async findOneById(id: number) {
    try {
      const medicalRegInfo =
        await this.medicalRegistrationBasicRepository.findOne({
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
        throw new HttpException(
          { status: HttpStatus.FORBIDDEN, message: `Data not found` },
          HttpStatus.FORBIDDEN,
        );
      }

      return medicalRegInfo;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async findOneByPassportNumber(passportNo: string) {
    try {
      const medicalRegInfo =
        await this.medicalRegistrationBasicRepository.findOne({
          where: { passport: passportNo },
        });

      return medicalRegInfo;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async findOneByUniqueID(query: any) {
    //passport
    //refNo
    try {
      if (query?.passport || query?.refNo) {
        const medicalRegInfo =
          await this.medicalRegistrationBasicRepository.findOne({
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
        // res.set({ 'Content-Type': 'image/jpeg' });

        if (!medicalRegInfo) {
          throw new HttpException(
            { status: HttpStatus.FORBIDDEN, message: `Data not found` },
            HttpStatus.FORBIDDEN,
          );
        }
        return medicalRegInfo;
      } else {
        throw new HttpException(
          { status: HttpStatus.FORBIDDEN, message: `Data not found` },
          HttpStatus.FORBIDDEN,
        );
      }
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async updateRegMedical(
    id: number,
    updateMedicalRegisterDto: UpdateMedicalRegisterDto,
  ) {
    try {
      const userBasicInfo = updateMedicalRegisterDto;

      const hororificEntity = new HororificEntity();
      hororificEntity.id = userBasicInfo.honorific;

      const doctorEntity = new DoctorEntity();
      doctorEntity.id = userBasicInfo.doctor;

      const nationalityEntity = new NationalityEntity();
      nationalityEntity.id = userBasicInfo.nationality;

      const positionEntity = new PositionEntity();
      positionEntity.id = userBasicInfo.position;

      const cityEntity = new CityEntity();
      cityEntity.id = userBasicInfo.place_of_birth;

      const medicalCertificateEntity = new MedicalCertificateEntity();
      medicalCertificateEntity.id = userBasicInfo.medical_certificate;

      const agencyEntity = new AgencyEntity();
      agencyEntity.id = userBasicInfo.agency;

      const countryEntity = new CountryEntity();
      countryEntity.id = userBasicInfo.country;

      const medicalRegisterEntity = new MedicalRegisterEntity();

      //add basic infor for medical registration

      medicalRegisterEntity.nationalityRef = nationalityEntity;
      medicalRegisterEntity.doctorRef = doctorEntity;
      medicalRegisterEntity.honorificRef = hororificEntity;
      medicalRegisterEntity.positionRef = positionEntity;
      medicalRegisterEntity.placeOfBirthRef = cityEntity;

      // medicalRegisterEntity.medicalCertificateRef = medicalCertificateEntity;
      medicalRegisterEntity.agencyRef = agencyEntity;
      medicalRegisterEntity.countryRef = countryEntity;

      const {
        agency,
        country,
        honorific,
        doctor,
        nationality,
        medical_certificate,
        place_of_birth,
        position,
        ...rest
      } = userBasicInfo;
      const resultObj = { ...medicalRegisterEntity, ...rest };

      const medicalRegInfo =
        await this.medicalRegistrationBasicRepository.update(id, resultObj);

      return medicalRegInfo;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async findByDate(regDate: Date) {
    try {
      const medicalRegInfo = await this.medicalRegistrationBasicRepository.find(
        {
          where: { registeredDate: regDate },
          relations: ['countryRef', 'resultEntryRef'],
        },
      );
      if (!medicalRegInfo) {
        throw new HttpException(
          { status: HttpStatus.FORBIDDEN, message: `Data not found` },
          HttpStatus.FORBIDDEN,
        );
      }
      return medicalRegInfo;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async generateSerialNo() {
    try {
      const medicalRegLatest =
        await this.medicalRegistrationBasicRepository.findOne({
          where: {},
          order: { createdAt: 'DESC' },
        });

      let newSericalNo;
      let newRefNo;
      const now = moment().format(moment.HTML5_FMT.DATE);
      const lastRegDate = moment(medicalRegLatest?.registeredDate).format(
        moment.HTML5_FMT.DATE,
      );

      if (now > lastRegDate || !medicalRegLatest) {
        newSericalNo = 1;
        // refNo = 1;
      } else {
        newSericalNo = parseInt(medicalRegLatest.serialNo) + 1;
      }

      if (!medicalRegLatest) {
        newRefNo = 1;
        // refNo = 1;
      } else {
        newRefNo = parseInt(medicalRegLatest.refNo) + 1;
      }

      const refNo = newRefNo.toString();
      const serialNo = newSericalNo.toString();

      return { serialNo, refNo };
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async pagination(take, skip) {
    const medicalRegLatest =
      await this.medicalRegistrationBasicRepository.findAndCount({
        take,
        skip,
      });
  }

  async statusChange(id: string, status: boolean) {
    try {
      return await this.medicalRegistrationBasicRepository.update(id, {
        approved: status,
        approvedTime: new Date().toISOString(),
      });
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
