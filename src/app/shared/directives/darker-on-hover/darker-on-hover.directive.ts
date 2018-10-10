import { Directive, HostListener, Renderer } from "@angular/core";
import { ElementRef } from "@angular/core";
import { Input } from "@angular/core";

@Directive({
    selector: '[apDarkerOnHover]',
})

export class DarkerOnHoverDirective {

    @Input() brightness: string = "70%";
    
    constructor(
        private _el: ElementRef,
        private _render: Renderer
    ){}

    // using the @HostListener we can set to what event we will respond
    @HostListener('mouseover')
    darkerOn(){
    
        this._render.setElementStyle(this._el.nativeElement, 'filter', `brightness(${this.brightness})`)
    };
        
    
    @HostListener('mouseleave')
    darkerOff(){
        this._render.setElementStyle(this._el.nativeElement, 'filter', `brightness(100%)`)
    };
}