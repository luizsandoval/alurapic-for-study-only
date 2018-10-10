import { Injectable, PLATFORM_ID } from '@angular/core';
import { Inject } from '@angular/core';
import { isPlatformBrowser} from '@angular/common'
@Injectable({
  providedIn: 'root'
})
export class PlatformDetectorService {

  // here we use the @Inject() decorator to define that each _platformId should receive a string defined with
  // the PLATFORM_ID 
  constructor(@Inject(PLATFORM_ID) private _platformId: string) {}

  // this function will see if the app is running through a browser or not
  isPlatformBrowser():boolean{

    // now we return the isPlatformBrowser - imported from @angular/common and pass the _platformId, provided by Angular
    // as the parameter for the checking
    return isPlatformBrowser(this._platformId);

  }
}
