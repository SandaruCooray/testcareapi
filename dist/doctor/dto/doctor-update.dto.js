"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDoctorDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const doctor_create_dto_1 = require("./doctor-create.dto");
class UpdateDoctorDto extends (0, swagger_1.PartialType)(doctor_create_dto_1.CreateDoctorRequest) {
}
exports.UpdateDoctorDto = UpdateDoctorDto;
//# sourceMappingURL=doctor-update.dto.js.map