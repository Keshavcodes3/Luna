import { Schema, model } from "mongoose";
import type { IAuth } from "@/types/auth.types.js";

const authSchema = new Schema<IAuth>(
    {

        name: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
            index: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true,
        },

        password: {
            type: String,
            required: true,
            minlength: 8,
            select: false,
        },

        refreshToken: {
            type: String,
            default: null,
            select: false,
        },

        isEmailVerified: {
            type: Boolean,
            default: false,
        },

        emailVerificationToken: {
            type: String,
            select: false,
        },

        emailVerificationExpires: {
            type: Date,
        },

        passwordResetToken: {
            type: String,
            select: false,
        },

        passwordResetExpires: {
            type: Date,
        },

        lastLoginAt: {
            type: Date,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const AuthModel = model<IAuth>("Auth", authSchema);
export default AuthModel