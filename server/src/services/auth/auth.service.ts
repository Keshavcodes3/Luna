import AuthModel from "@/models/auth.model.js";
import type { IAuth, IRegister } from "@/types/auth.types.js";
import authRepositary from "@/repositories/auth.repo.js";
import ApiError from "@/utils/api.error.js";
import { Types } from "mongoose";
import { comparePassword, hashPassword } from "@/utils/auth.utils.js";

export class authSeriveClass {
    constructor(private readonly authRepo = authRepositary) { }

    registerUserService = async (userData: IRegister) => {
        if (!userData.name || !userData.email || !userData.password) {
            throw new ApiError(400, "Credentials not provided")
        }
        const hashedPassword = await hashPassword(userData.password)
        userData["password"] = hashedPassword
        const user = await this.authRepo.registerUserRepo(userData)
        if (!user) throw new ApiError(400, "User can't create")
        return user
    }

    loginUserService = async (userData: {
        email: string;
        password: string
    }): Promise<IAuth | null> => {
        if (!userData.email || !userData.password) {
            throw new ApiError(400, "Credentials not provided")
        }
        const userExist = await this.authRepo.findByEmailRepo(userData.email)
        if (!userExist) return null
        const isCorrectPassword = comparePassword(userData.password, userExist.password)
        const user = userExist
        return user
    }

    getMeUserService = async (userId: Types.ObjectId): Promise<IAuth | null> => {
        if (!userId) throw new ApiError(401, "user id not provided")
        const user = this.authRepo.findByIdRepo(userId)
        if (!user) return null
        return user
    }
}


const authService = new authSeriveClass()
export default authService