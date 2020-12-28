import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginService } from 'src/app/2 - core/application/services/login.service';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
    
    constructor(private loginService: LoginService, private router: Router) { }

    private handleAuthError(err: HttpErrorResponse): Observable<any> {
        //handle your auth error or rethrow
        if (err.status === 401 || err.status === 403) {
            this.router.navigateByUrl(`/logout`);
        }
        return throwError(err);
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(req.url.includes(environment.apiUrl)) {
            let user = this.loginService.getLoggedUser();

            req = req.clone({
            setHeaders: {
                'Access-Control-Allow-Origin': "*",
                'Access-Control-Allow-Methods': 'GET,POST,PUT,HEAD,DELETE,OPTIONS',
                'Access-Control-Allow-Headers': 'content-Type,x-requested-with,authorization,accept',
                'Authorization': `Bearer ${user?.jwtToken}`,
            },
        });
    }

    return next.handle(req).pipe(catchError(x=> this.handleAuthError(x)));;
  }
}