import { Injectable } from '@angular/core';
import { LoadingType } from './loading-type';
import { Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class LoadingService {

    loadingSubject = new Subject<LoadingType>();
    
    // Using 'startWith' rxjs operator, we can set a default value that the observable will send
    getLoading() {
        return this.loadingSubject
            .asObservable()
            .pipe(startWith(LoadingType.STOPPED));
    }

    start(){
        this.loadingSubject.next(LoadingType.LOADING);
    }

    stop(){
        this.loadingSubject.next(LoadingType.STOPPED);
    }
}