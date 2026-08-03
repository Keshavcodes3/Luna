import AuthModel from "@/models/auth.model.js";
import type { IAuth } from "@/types/auth.types.js";
import type { Types } from "mongoose";

class AuthRepository {
    async registerUserRepo(
        userData: Pick<IAuth, "name" | "email" | "password">
    ): Promise<IAuth> {
        return await AuthModel.create(userData);
    }

    async findByIdRepo(id: Types.ObjectId): Promise<IAuth | null> {
        return await AuthModel.findById(id);
    }

    async findByEmailRepo(email: string): Promise<IAuth | null> {
        return await AuthModel.findOne({ email }).select("+password");
    }


    async updateByIdRepo(
        id: string,
        update: Partial<IAuth>
    ): Promise<IAuth | null> {
        return await AuthModel.findByIdAndUpdate(id, update, {
            new: true,
            runValidators: true,
        });
    }

    async updateRefreshTokenRepo(
        id: string,
        refreshToken: string | null
    ): Promise<void> {
        await AuthModel.findByIdAndUpdate(id, {
            refreshToken,
        });
    }

    async updateLastLoginRepo(id: string): Promise<void> {
        await AuthModel.findByIdAndUpdate(id, {
            lastLoginAt: new Date(),
        });
    }

    async deleteByIdRepo(id: string): Promise<void> {
        await AuthModel.findByIdAndDelete(id);
    }

    async existsByEmailRepo(email: string): Promise<boolean> {
        return (await AuthModel.exists({ email })) !== null;
    }
}

export default new AuthRepository();