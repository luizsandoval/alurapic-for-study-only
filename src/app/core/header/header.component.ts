import { Component } from '@angular/core';
import { UserService } from '../user/user.service';
import { Observable } from 'rxjs';
import { IUser } from '../user/user';
import { Router } from '@angular/router';

@Component({
  selector: 'ap-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // we use $ to indicate that its an Observable
  user$: Observable<IUser>;


  constructor(
    private _userService: UserService, 
    private router: Router) {
    this.user$ = _userService.getUser();
  }

  logout() {
    this._userService.logout();
    this.router.navigate(['']);
  }
}
