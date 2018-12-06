import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import * as StackTrace from 'stacktrace-js';

import { UserService } from 'src/app/core/user/user.service';

@Injectable()

export class GlobalErrorHandler implements ErrorHandler {
    
    constructor(private injector: Injector){}
    
    handleError(error: any): void {

        const LOCATION = this.injector.get(LocationStrategy);
        const USERSERVICE = this.injector.get(UserService);

        const URL = LOCATION instanceof PathLocationStrategy
        ? LOCATION.path()
        : '';

        const MESSAGE = error.message 
        ? error.message 
        : error.toString();
        
        // Here we use the StackTrace error handler to treat the errors 
        StackTrace
            // The fromError() returns an array promise
            .fromError(error)
            // So, after it returns we call the .then() to treat the array using .map() and .join()
            .then(stackFrames => {
                const STACKASSTRING = stackFrames
                      .map(stackFrame => stackFrame.toString())
                      .join('\n');
                      console.log(MESSAGE);
                      console.log(STACKASSTRING);
            })
    }
}