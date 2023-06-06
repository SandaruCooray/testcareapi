import { CountryService } from '../services/country.service';
import { CreateCountryDto } from '../dto/create-country.dto';
import { UpdateCountryDto } from '../dto/update-country.dto';
import { CommonResponseHandler } from 'src/request-response-handlers/dtos/common-response.dto';
export declare class CountryController {
    private readonly countryService;
    constructor(countryService: CountryService);
    create(createCountryDto: CreateCountryDto): Promise<CommonResponseHandler>;
    findAll(): Promise<CommonResponseHandler>;
    findOne(id: string): Promise<CommonResponseHandler>;
    update(id: string, updateCountryDto: UpdateCountryDto): Promise<CommonResponseHandler>;
    remove(id: string): string;
}
