import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { PhotoService } from '../../photo/photo.service';
import { PhotoComment } from '../../photo/photo-comment';

@Component({
  selector: 'ap-photo-comments',
  templateUrl: './photo-comments.component.html',
  styleUrls: ['./photo-comments.component.css']
})
export class PhotoCommentsComponent implements OnInit {
  @Input()
  photoId: number;

  comments$: Observable<PhotoComment[]>;

  commentForm: FormGroup;

  constructor(
    private _photoService: PhotoService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    console.log(this.photoId);
    this.comments$ = this._photoService.getComments(this.photoId);

    this.commentForm = this._formBuilder.group({
      comment: ['', Validators.maxLength(300)]
    });
  }

  save() {
    const COMMENT = 
    this.commentForm
        .get('comment').value as string;

    this.comments$ = 
        this._photoService
        .addComment(this.photoId, COMMENT)
        .pipe(switchMap(()=> this._photoService
        .getComments(this.photoId)))
        .pipe(tap(() => {
            this.commentForm.reset();
        }))
  }
}
