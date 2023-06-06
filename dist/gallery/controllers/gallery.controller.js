"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryController = void 0;
const common_1 = require("@nestjs/common");
const gallery_service_1 = require("../services/gallery.service");
const create_gallery_dto_1 = require("../dto/create-gallery.dto");
const update_gallery_dto_1 = require("../dto/update-gallery.dto");
const platform_express_1 = require("@nestjs/platform-express");
const common_response_dto_1 = require("../../request-response-handlers/dtos/common-response.dto");
const multer_1 = require("multer");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
const jwt_auth_guard_1 = require("../../auth/gurds/jwt-auth.guard");
const roles_guard_1 = require("../../auth/gurds/roles.guard");
const role_enum_1 = require("../../auth/role-enum/role.enum");
let GalleryController = class GalleryController {
    constructor(galleryService) {
        this.galleryService = galleryService;
    }
    async create(createGalleryDto, file) {
        createGalleryDto.imgPath = file === null || file === void 0 ? void 0 : file.path;
        createGalleryDto.regDate = new Date();
        const data = await this.galleryService.create(createGalleryDto);
        return new common_response_dto_1.CommonResponseHandler(common_1.HttpStatus.OK, 'Success', `Image Upload Success`, data);
    }
    async findAll(query) {
        const data = await this.galleryService.findAll(query);
        return new common_response_dto_1.CommonResponseHandler(common_1.HttpStatus.OK, 'Success', `Image Retrieve Success`, data);
    }
    async findOne(passportNo) {
        const data = await this.galleryService.findOne(passportNo);
        return new common_response_dto_1.CommonResponseHandler(common_1.HttpStatus.OK, 'Success', `Image Not Found`, data);
    }
    update(id, updateGalleryDto) {
        return this.galleryService.update(+id, updateGalleryDto);
    }
    remove(id) {
        return this.galleryService.remove(+id);
    }
};
__decorate([
    (0, roles_decorator_1.HasRoles)(role_enum_1.Role.LEVEL_FOUR),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('imgPath', {
        storage: (0, multer_1.diskStorage)({
            destination: 'public/',
            filename: (req, file, callback) => {
                const filename = `${file.originalname}`;
                callback(null, filename);
            },
        }),
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_gallery_dto_1.CreateGalleryDto, Object]),
    __metadata("design:returntype", Promise)
], GalleryController.prototype, "create", null);
__decorate([
    (0, roles_decorator_1.HasRoles)(role_enum_1.Role.LEVEL_FOUR),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GalleryController.prototype, "findAll", null);
__decorate([
    (0, roles_decorator_1.HasRoles)(role_enum_1.Role.LEVEL_FOUR),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Get)(':passportNo'),
    __param(0, (0, common_1.Param)('passportNo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GalleryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_gallery_dto_1.UpdateGalleryDto]),
    __metadata("design:returntype", void 0)
], GalleryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GalleryController.prototype, "remove", null);
GalleryController = __decorate([
    (0, common_1.Controller)('gallery'),
    __metadata("design:paramtypes", [gallery_service_1.GalleryService])
], GalleryController);
exports.GalleryController = GalleryController;
//# sourceMappingURL=gallery.controller.js.map