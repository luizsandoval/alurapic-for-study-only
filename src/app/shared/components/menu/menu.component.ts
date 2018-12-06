import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ap-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

    show = false;

    constructor() { }

    ngOnInit() { }

    toggle(){
        this.show = !this.show;
    }
}