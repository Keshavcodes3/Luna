export default class ApiError extends Error {
    public readonly success = false;

    constructor(
        public readonly statusCode: number,
        message: string,
        public readonly errors: unknown[] = [],
        public readonly isOperational = true
    ) {
        super(message);

        Error.captureStackTrace(this, this.constructor);
    }
}