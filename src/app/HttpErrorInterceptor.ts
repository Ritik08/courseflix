import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";


export class HttpErrorInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        console.log("Inside the Http Interceptor :::: ");
        return next
                .handle(req)
                .pipe(
                    retry(3),
                    catchError((errorResponse: HttpErrorResponse) => {
                        if (errorResponse.error instanceof ErrorEvent) {
                            console.log("Client side error")
                        } else {
                            console.log("Server side error ");
                        }
                        return throwError(errorResponse.message);
                    })
                )
    }

}