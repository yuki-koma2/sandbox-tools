
import { IdValueObject } from '@/domain/base/IdValueObject';

export class UserId extends IdValueObject {
    constructor(id: string) {
        super(id);
    }
}