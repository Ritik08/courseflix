import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        console.log("Inside the Auth Interceptor :::: ");
        // const apiToken = localStorage.getItem("userToken");
        // if (!apiToken){
        //     console.log("No token");
        //     this.router.navigate(['/login']);
        // } else {
        //     req.clone({setHeaders: {'Authorization': `Bearer ${apiToken}` }})
        // }
        return next.handle(req);
    }

}