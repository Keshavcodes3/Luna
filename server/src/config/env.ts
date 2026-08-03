
import { z } from "zod";


const envSchema = z.object({
    NODE_ENV: z
        .enum(["development", "production", "test"])
        .default("development"),

    PORT: z.coerce.number().default(8000),

    // CLIENT_URL: z.string().url(),

    MONGODB_URI: z.string().min(1),
    DB_NAME: z.string().min(1),

    JWT_SECRET: z.string().min(32, "JWT_SECRET must be at least 32 characters"),
    JWT_EXPIRES_IN: z.string(),

    JWT_REFRESH_SECRET: z
        .string()
        .min(32, "JWT_REFRESH_SECRET must be at least 32 characters"),

    JWT_REFRESH_EXPIRES_IN: z.string(),

    GEMINI_API_KEY: z.string().min(1),
});

const parsed = envSchema.safeParse(process.env);

const env = parsed.data;

export default env;