export type TextMessagesModel = {
    id: number;
    ulid: string;
    message: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}