import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Observable } from 'rxjs';
import { IUser } from '../user/user';

@Component({
  selector: 'ap-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  user$: Observable<IUser>;

  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this.user$ = this._userService.getUser();
  }
}
