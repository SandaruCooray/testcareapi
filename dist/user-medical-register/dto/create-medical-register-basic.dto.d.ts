export declare enum USER_STATUS {
    SINGLE = "single",
    MARRIED = "married",
    WIDOWED = "widowed"
}
export declare enum SEX {
    MALE = "male",
    FEMALE = "female",
    OTHER = "other"
}
export declare class CreateMedicalRegisterBasicDto {
    passport: string;
    gccNo: string;
    cmbNo: string;
    honorific: number;
    firstName: string;
    lastName: string;
    address: string;
    sex: SEX;
    status: USER_STATUS;
    doctor: number;
    birthday: Date;
    age: number;
    placeOfIssue: string;
    place_of_birth: number;
    nationality: number;
    remark: string;
    paymentType: string;
    treatments: number;
    fingerPrintRef: string;
    position: number;
    photo: string;
    medicalType: string;
    agency: number;
    country: number;
    registeredDate: Date;
    company: string;
    overAge: boolean;
    recipientDate: Date;
    medicalCertificates: string[];
}
