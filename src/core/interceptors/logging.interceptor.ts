import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
} from '@nestjs/common';
import { Observable, catchError, tap } from 'rxjs';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const req = context.switchToHttp().getRequest();
        const date = new Date().toLocaleString();
        const method = req.method;
        const body = req.body;
        const url = req.url;

        const requestString = `--- ${method} ${url} :`;
        console.log()

        return next.handle().pipe(
            tap(response => {
                console.log(`${requestString}`);
                console.log(body);
                console.log("--- response ---");
                console.log(JSON.stringify(response));
                
            }),
            catchError(error => {
                console.log(`${requestString}`);
                console.log(body);
                console.log("--- response ---");
                console.error(error.stack);
                throw error;
            })
        );
    }

}