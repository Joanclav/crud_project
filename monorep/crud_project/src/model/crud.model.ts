import * as mongoose from 'mongoose';

export const CrudSchema = new mongoose.Schema({
  text: { type: String, required: true },
  date: { type: Date, default: Date.now },
  status: { type: Boolean, default: false },
});

export interface CrudDocument extends mongoose.Document {
  text: string;
  date: Date;
  status: boolean;
}