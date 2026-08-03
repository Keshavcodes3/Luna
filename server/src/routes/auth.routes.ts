import { Router } from "express";

import authController from "@/controllers/auth.controller.js";
import authMiddleware from "@/middleware/auth.middleware.js";
import validate from "@/middleware/validate.middleware.js";
import {
    loginSchema,
    registerSchema,
} from "@/validators/auth.validator.js";

const router = Router();

router.post(
    "/register",
    validate(registerSchema),
    authController.registerUser
);

router.post(
    "/login",
    validate(loginSchema),
    authController.loginUser
);


router.get(
    "/me",
    authMiddleware,
    authController.getMe
);

export default router;