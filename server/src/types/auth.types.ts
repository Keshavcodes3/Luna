import { Document, Types } from "mongoose";

export interface IAuth extends Document {

    email: string;
    name: string;
    password: string;

    refreshToken?: string;

    isEmailVerified: boolean;
    emailVerificationToken?: string;
    emailVerificationExpires?: Date;

    passwordResetToken?: string;
    passwordResetExpires?: Date;

    lastLoginAt?: Date;

    createdAt: Date;
    updatedAt: Date;
}

export interface IRegister {
    name: string;
    email: string;
    password: string
}