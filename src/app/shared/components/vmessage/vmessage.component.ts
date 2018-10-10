import { Component } from "@angular/core";
import { Input } from "@angular/core";

@Component({
    selector:'ap-vmessage',
    templateUrl: 'vmessage.component.html'
})
export class VMessageComponent {

    @Input() message:string='';
}