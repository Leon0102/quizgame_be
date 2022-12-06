import { Injectable, NestMiddleware } from '@nestjs/common';
import * as Sentry from '@sentry/node';
import { NextFunction, Request, Response } from 'express';
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // Gets the request log
    Sentry.captureEvent({
      message: 'Request',
      level: 'info',
      request: {
        method: req.method,
        url: req.url,
      },
    });
    // Ends middleware function execution, hence allowing to move on
    if (next) {
      next();
    }
  }
}
