import { Document } from 'mongoose';

export interface Report extends Document {
    readonly description: string;
    readonly resolved: boolean;
}
