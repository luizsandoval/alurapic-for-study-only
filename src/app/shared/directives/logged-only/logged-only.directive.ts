import { Directive, Input, ElementRef, Renderer, OnInit } from '@angular/core';

import { UserService } from '../../../core/user/user.service';

// Only logged users can see
@Directive({
  selector: '[loggedOnly]'
})
export class LoggedOnlyDirective implements OnInit {
  currentDisplay: string;

  constructor(
    private _element: ElementRef<any>,
    private _renderer: Renderer,
    private _userService: UserService
  ) {}

  ngOnInit(): void {

    // First, we get the current value of the display setting
    this.currentDisplay = getComputedStyle(this._element.nativeElement).display;

    // Now, we subscribe to the Observable that is returned by getUser()
    this._userService.getUser().subscribe(user => {
      // If the user exists, it means that its logged in and we can show the menu option
        if (user) {
            this._renderer.setElementStyle(this._element.nativeElement,'display', this.currentDisplay);
        } 
      // If not, we set the display property value to 'none'
        else {
            this.currentDisplay = getComputedStyle(this._element.nativeElement).display;
            this._renderer.setElementStyle(this._element.nativeElement,'display','none');
      }
    });
  }
}
