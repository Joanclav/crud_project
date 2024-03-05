import { CrudDocument } from 'src/model/crud.model';
import { CrudService } from 'src/service/crud.service';
export declare class CrudController {
    private readonly CrudService;
    constructor(CrudService: CrudService);
    findAll(): Promise<CrudDocument[]>;
    findOne(id: string): Promise<CrudDocument | null>;
    create(data: Partial<CrudDocument>): Promise<CrudDocument>;
    update(id: string, data: Partial<CrudDocument>): Promise<CrudDocument | null>;
    remove(id: string): Promise<CrudDocument | null>;
}
