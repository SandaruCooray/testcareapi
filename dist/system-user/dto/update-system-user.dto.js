"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSystemUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_system_user_dto_1 = require("./create-system-user.dto");
class UpdateSystemUserDto extends (0, swagger_1.PartialType)(create_system_user_dto_1.CreateSystemUserDto) {
}
exports.UpdateSystemUserDto = UpdateSystemUserDto;
//# sourceMappingURL=update-system-user.dto.js.map