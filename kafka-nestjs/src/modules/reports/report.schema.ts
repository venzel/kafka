import * as mongoose from 'mongoose';

export const ReportSchema = new mongoose.Schema({
    description: String,
    resolved: Boolean,
});
