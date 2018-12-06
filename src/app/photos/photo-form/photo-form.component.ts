import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { finalize } from 'rxjs/operators';

import { PhotoService } from '../photo/photo.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'ap-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {
  photoForm: FormGroup;
  file: File;
  preview: string;
  percentDone = 0;

  constructor(
    private _formBuilder: FormBuilder,
    private _photoService: PhotoService,
    private _route: Router,
    private _alertService: AlertService,
    private _userService: UserService
  ) {}

  ngOnInit() {
    this.photoForm = this._formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true]
    });
  }

  upload() {
    const description = this.photoForm.get('description').value;
    const allowComments = this.photoForm.get('allowComments').value;

    this._photoService
      .upload(description, allowComments, this.file)
      .pipe(
        finalize(() => {
          this._route.navigate(['/user', this._userService.getUsername()]);
        })
      )
      .subscribe(
        (event: HttpEvent<any>) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.percentDone = Math.round((100 * event.loaded) / event.total);
          } else if (event instanceof HttpResponse) {
            this._alertService.success('Upload completed!', true);
          }
        },
        err => {
          console.log(err);
          this._alertService.danger('Upload error!', true);
        }
      );
  }

  // This methods reads the file and converts it to 64x, what able us to show it in the screen
  handleFile(file: File) {
    const reader = new FileReader();

    this.file = file;

    reader.onload = (event: any) => (this.preview = event.target.result);

    reader.readAsDataURL(file);
  }
}
