import jwt, { type Secret, type SignOptions } from "jsonwebtoken";
import env from "@/config/env.js";

export const generateToken = (
    payload: any
): string => {
    return jwt.sign({
        userId: payload._id!,
        name: payload.name!,
        email: payload.email!
    }, env?.JWT_SECRET!)
};