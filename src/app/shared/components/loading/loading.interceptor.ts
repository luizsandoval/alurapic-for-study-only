import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { LoadingService } from './loading.service';

@Injectable({providedIn: 'root'})

export class LoadingInterceptor implements HttpInterceptor {

    constructor(private _loadingService: LoadingService){}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next
            .handle(req)
            .pipe(tap(event =>{
                if(event instanceof HttpResponse){
                    this._loadingService.stop();
                }
                else{
                    this._loadingService.start();
                }
            }));
    }
}