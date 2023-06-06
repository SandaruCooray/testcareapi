export declare enum MEDICAL_STATUS {
    UNFIT = "unfit",
    FIT = "fit",
    TEMPORARY_UNFIT = "temporary_unfit"
}
export declare class CreateResultEntryDto {
    result: any;
    healthStatus: MEDICAL_STATUS;
    printed: any;
}
