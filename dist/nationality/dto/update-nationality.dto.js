"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNationalityDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_nationality_dto_1 = require("./create-nationality.dto");
class UpdateNationalityDto extends (0, swagger_1.PartialType)(create_nationality_dto_1.CreateNationalityDto) {
}
exports.UpdateNationalityDto = UpdateNationalityDto;
//# sourceMappingURL=update-nationality.dto.js.map