export declare enum MEDICAL_STATUS {
    UNFIT = "unfit",
    FIT = "fit",
    TEMPORARY_UNFIT = "temporary_unfit"
}
export declare class ResultEntryEntity {
    id: number;
    result: any;
    healthStatus: MEDICAL_STATUS;
    printed: any;
    createdAt: Date;
    updatedAt: Date;
}
