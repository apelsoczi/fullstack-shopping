import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
    HttpException,
} from '@nestjs/common';
import { Observable, catchError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements NestInterceptor {

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            catchError(error => {
                if (!(error instanceof HttpException)) {
                    const status = error.status || 500;
                    const message = error.message || 'Internal server error';
                    throw new HttpException(message, status);
                }
                throw error;
            }),
        );
    }

}