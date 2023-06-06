import { CityService } from '../services/city.service';
import { CreateCityDto } from '../dto/create-city.dto';
import { UpdateCityDto } from '../dto/update-city.dto';
import { CommonResponseHandler } from 'src/request-response-handlers/dtos/common-response.dto';
export declare class CityController {
    private readonly cityService;
    constructor(cityService: CityService);
    create(createCityDto: CreateCityDto): string;
    findAll(): Promise<CommonResponseHandler>;
    findOne(id: string): string;
    update(id: string, updateCityDto: UpdateCityDto): string;
    remove(id: string): string;
}
