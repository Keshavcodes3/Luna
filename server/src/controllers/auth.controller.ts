import authServiceClass from "@/services/auth/auth.service.js";
import ApiError from "@/utils/api.error.js";
import ApiResponse from "@/utils/api.response.js";
import asyncHandler from "@/utils/asyncHandler.js";
import { generateToken } from "@/utils/token.js";

import type { Request, Response } from "express";

class AuthController {
    constructor(private readonly authService = authServiceClass) { }

    registerUser = asyncHandler(async (req: Request, res: Response) => {
        const user = await this.authService.registerUserService(req.body);

        if (!user) {
            throw new ApiError(500, "Failed to create user");
        }
        const token = generateToken({
            name: user.name,
            email: user.email,
            _id: user._id
        })
        res.cookie("token", token)
        return res.status(201).json(
            new ApiResponse(201, "User registered successfully", user)
        );
    });

    loginUser = asyncHandler(async (req: Request, res: Response) => {
        const user = await this.authService.loginUserService(req.body);

        if (!user) {
            throw new ApiError(401, "Invalid email or password");
        }

        const token = generateToken({
            name: user.name,
            email: user.email,
            _id: user._id
        })
        res.cookie("token", token)
        
        return res.status(200).json(
            new ApiResponse(200, "Login successful", user)
        );
    });

    getMe = asyncHandler(async (req: Request, res: Response) => {
        const userId = (req as any).user.userId;

        const user = await this.authService.getMeUserService(userId);

        if (!user) {
            throw new ApiError(404, "User not found");
        }

        return res.status(200).json(
            new ApiResponse(200, "User fetched successfully", user)
        );
    });
}

export default new AuthController();