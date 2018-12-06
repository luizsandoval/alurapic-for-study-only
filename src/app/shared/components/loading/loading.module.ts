import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoadingInterceptor } from './loading.interceptor';
import { LoadingComponent } from './loading.component';

@NgModule({
    imports: [CommonModule],
    exports: [LoadingComponent],
    declarations: [LoadingComponent],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: LoadingInterceptor,
        multi: true
    }]
})
export class LoadingModule { }
