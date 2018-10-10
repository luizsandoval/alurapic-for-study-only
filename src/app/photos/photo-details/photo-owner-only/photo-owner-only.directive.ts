import { Directive, Input, ElementRef, Renderer, OnInit} from "@angular/core";

import { Photo } from "../../photo/photo";
import { UserService } from "../../../core/user/user.service";

// Only the user that is owner of the photo can remove it
@Directive({
    selector: '[photoOwnerOnly]'
})

export class PhotoOwnerOnlyDirective implements OnInit{

    @Input()
    ownedPhoto: Photo;
    
    constructor(
        private _element: ElementRef<any>,
        private _renderer: Renderer,
        private _userService: UserService
        ){}
        
        ngOnInit(): void {
            this._userService
                .getUser()
                .subscribe(user =>{
                    if(!user || user.id != this.ownedPhoto.userId){
                        this._renderer.setElementStyle(this._element.nativeElement, 'display', 'none');
                    }
                })
        }
}