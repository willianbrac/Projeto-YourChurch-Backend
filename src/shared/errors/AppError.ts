/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
export class AppError {
  public readonly message: string;
  public readonly statusCode: number;

  constructor(message: string, statusCode = 400) {
    // eslint-disable-next-line prettier/prettier
    this.message = message,
    this.statusCode = statusCode
  }
}
