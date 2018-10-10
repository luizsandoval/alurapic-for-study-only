import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';

import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoListResolver implements Resolve<Observable<Photo[]>> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Photo[]> {
    const userName = route.params.userName;

    // here we pass 1 as parameter to list at first, only the first 12 photos, as pre-defined at the back-end
    return this._service.listFromUserPaginated(userName, 1);
  }
  constructor(private _service: PhotoService) {}
}
