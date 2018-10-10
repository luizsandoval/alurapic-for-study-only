import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { PhotoService } from '../photo/photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ap-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  photoForm: FormGroup
  file: File;
  preview: string;

  constructor(
    private _formBuilder: FormBuilder,
    private _photoService: PhotoService,
    private _route: Router
  ) { }

  ngOnInit() {

    this.photoForm = this._formBuilder.group({
      file:['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true]
    });

  }

 upload(){
   const description = this.photoForm.get('description').value;
   const allowComments = this.photoForm.get('allowComments').value;
   
   this._photoService
    .upload(description, allowComments, this.file)
      .subscribe(() => this._route.navigate(['']))
 }


 // This methods reads the file and converts it to 64x, what able us to show it in the screen
 handleFile(file: File){
   const reader  = new FileReader();

   this.file = file;

   reader.onload = (event: any) => this.preview = event.target.result;

   reader.readAsDataURL(file);
 }
 
  
}
