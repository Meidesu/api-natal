export class HttpException extends Error {
  constructor(msg: string) {
    super(msg);
  }
}
