// src/models/user.ts
import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  email: string;
  password: string;
  resetCode?: string;
  resetCodeExpiry?: number;
}

const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  resetCode: { type: String },
  resetCodeExpiry: { type: Number },
});

const User = mongoose.model<IUser>("User", userSchema);
export default User;
