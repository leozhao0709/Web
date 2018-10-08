import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../../auth/auth.service';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {
  };

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const params = new HttpParams().append('auth', this.authService.getToken());
    const clonedReq = req.clone({params});
    return next.handle(clonedReq);
  }
}
