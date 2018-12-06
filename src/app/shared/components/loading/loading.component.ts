import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { LoadingService } from './loading.service';
import { map } from 'rxjs/operators';

@Component({
    selector: 'ap-loading',
    templateUrl: 'loading.component.html',
    styleUrls: ['./loading.component.css']
})

export class LoadingComponent implements OnInit {
    loading$: Observable<String>;
    
    constructor(private _loadingService: LoadingService) { }

    ngOnInit() { 
        this.loading$ = this._loadingService
            .getLoading()
            .pipe(map(loadingType => loadingType.valueOf()));
    }
}