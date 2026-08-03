import { ZodType } from "zod";
import type { Request, Response, NextFunction } from "express";

const validate =
    (schema: ZodType) =>
        async (req: Request, _res: Response, next: NextFunction) => {
            try {
                const parsed = await schema.parseAsync({
                    body: req.body,
                    params: req.params,
                    query: req.query,
                });

                req.body = parsed.body;

                next();
            } catch (error) {
                next(error);
            }
        };

export default validate