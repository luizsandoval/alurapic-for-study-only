import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { PhotoService } from "../photo/photo.service";
import { Photo } from "../photo/photo";
import { PhotoComment } from "../photo/photo-comment";

@Component({
    templateUrl: './photo-details.component.html',
    styleUrls: ['photo-details.component.css']
})

export class PhotoDetailsComponent implements OnInit{

    photo$: Observable<Photo>;

    photoId:number;

    constructor(
        private _route: ActivatedRoute,
        private _photoService: PhotoService,
        private _router: Router
    ){}

    ngOnInit(): void {
       
       this.photoId = this._route.snapshot.params.photoId;

       this.photo$ =  this._photoService.findById(this.photoId);

    }

    remove = () =>{
        this._photoService
            .removePhoto(this.photoId)
            .subscribe(() => this._router
            .navigate(['']));
    }
    
}