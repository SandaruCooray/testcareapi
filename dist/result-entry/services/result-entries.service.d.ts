import { UpdateResultEntryDto } from '../dto/update-result-entry.dto';
import { ResultEntryEntity } from '../entities/result-entry.entity';
import { Repository } from 'typeorm';
import { CreateResultEntryDto } from '../dto/create-result-entry.dto';
export declare class ResultEntriesService {
    private resultEntryRepository;
    constructor(resultEntryRepository: Repository<ResultEntryEntity>);
    create(createResultEntryDto: CreateResultEntryDto): Promise<ResultEntryEntity>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateResultEntryDto: UpdateResultEntryDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): string;
}
