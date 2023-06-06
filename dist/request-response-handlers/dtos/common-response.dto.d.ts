import { HttpStatus } from '@nestjs/common';
export declare class CommonResponseHandler {
    readonly statusCode: HttpStatus;
    readonly message: string;
    readonly friendlyMessage: string;
    readonly data: any;
    constructor(statusCode: HttpStatus, message: string, friendlyMessage: string, data: any);
}
