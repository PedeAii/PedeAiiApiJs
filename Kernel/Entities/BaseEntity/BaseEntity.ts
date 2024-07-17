import { Cryptography } from "src/utils/Cryptography/Cryptography"

export class BaseEntity {
    id?: number;
    ulid?: string;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
}