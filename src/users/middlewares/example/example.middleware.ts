import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
// import { NextFunction } from 'express';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log('Example Middleware');
    console.log(req.headers['authorization']);
    const authorization = req.headers['authorization'] as string | undefined;
    if (!authorization)
      throw new HttpException('No authorization token', HttpStatus.FORBIDDEN);
    if (authorization === 'sdjklncmxjknjkdnsjkc') next();
    else {
      throw new HttpException(
        'Invalid Authorization token',
        HttpStatus.FORBIDDEN,
      );
    }
  }
}
