import type { Request, Response, NextFunction } from "express";
import jwt, {
    type JwtPayload,
} from "jsonwebtoken";

import ApiError from "@/utils/api.error.js";

interface AuthPayload extends JwtPayload {
    userId: string;
}

const authMiddleware = (
    req: Request,
    _res: Response,
    next: NextFunction
) => {
    const token = req.cookies?.token;

    if (!token) {
        return next(new ApiError(401, "Authentication token is missing"));
    }

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET!
        ) as AuthPayload;

        (req as any).user = {
            userId: decoded.userId,
        };

        return next();
    } catch (error) {
        

        return next(new ApiError(500, "Internal Server Error"));
    }
};

export default authMiddleware;