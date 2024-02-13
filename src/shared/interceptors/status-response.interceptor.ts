import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler
} from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { StatusResponse } from '../http/status-response';

@Injectable()
export class StatusResponseInterceptor<T> implements NestInterceptor<T, StatusResponse<T>> {

    intercept(context: ExecutionContext, next: CallHandler): Observable<StatusResponse<T>> {
        return next.handle().pipe(
            map(data => ({
                success: true,
                data,
            })),
            catchError(error => {
                return of({
                    success: false,
                    message: error?.response?.error || error?.message || 'Internal Server Error',
                    data: error?.response?.message || undefined
                })
            })
        );
    }

}