"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultEntriesModule = void 0;
const common_1 = require("@nestjs/common");
const result_entries_service_1 = require("../services/result-entries.service");
const result_entries_controller_1 = require("../controllers/result-entries.controller");
const typeorm_1 = require("@nestjs/typeorm");
const result_entry_entity_1 = require("../entities/result-entry.entity");
let ResultEntriesModule = class ResultEntriesModule {
};
ResultEntriesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([result_entry_entity_1.ResultEntryEntity])],
        controllers: [result_entries_controller_1.ResultEntriesController],
        providers: [result_entries_service_1.ResultEntriesService],
        exports: [result_entries_service_1.ResultEntriesService],
    })
], ResultEntriesModule);
exports.ResultEntriesModule = ResultEntriesModule;
//# sourceMappingURL=result-entries.module.js.map