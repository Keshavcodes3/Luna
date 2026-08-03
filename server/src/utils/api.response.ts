export default class ApiResponse<T = unknown> {
  public readonly success = true;

  constructor(
    public readonly statusCode: number,
    public readonly message: string,
    public readonly data?: T,
    public readonly meta?: Record<string, unknown>
  ) {}
}