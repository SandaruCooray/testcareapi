"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateHonorificDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_honorific_dto_1 = require("./create-honorific.dto");
class UpdateHonorificDto extends (0, swagger_1.PartialType)(create_honorific_dto_1.CreateHonorificDto) {
}
exports.UpdateHonorificDto = UpdateHonorificDto;
//# sourceMappingURL=update-honorific.dto.js.map