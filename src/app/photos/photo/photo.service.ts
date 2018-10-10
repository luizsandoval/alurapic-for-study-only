import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Photo } from "./photo";
import { PhotoComment } from './photo-comment';

const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class PhotoService {

    constructor(private http: HttpClient) {}

    listFromUser(userName: string) {
        return this.http
            .get<Photo[]>(API + '/' + userName + '/photos');       
    }
 
    listFromUserPaginated(userName: string, page: number) {

        const params = new HttpParams()
        .append('page', page.toString());

        return this.http
            .get<Photo[]>(API + '/' + userName + '/photos', {params});       
    }

    upload(description: string, allowComments: boolean, file: File){

        //  Here we create a form data, once that we send a form data instead of a JSON file to the backend
        const formData = new FormData();

        // Now, we use '.append' to pass the values that we want to send to the backend into the form data
        formData.append('description', description);

        // Here we make a conditional question to find out if the comments are allowed or not. Then, we convert the boolean value into a string one
        formData.append('allowComments', allowComments ? 'true' : 'false');

        formData.append('imageFile', file);

        // And finally, we return the observable with the data
        return this.http.post(`${API}/photos/upload`, formData)
    }

    findById(photoId:number){

        return this.http
            .get<Photo>(API + '/photos/' + photoId);
    }

    getComments(photoId:number){
        return this.http
            .get<PhotoComment[]>(API + '/photos/' + photoId + '/comments');
    }

    addComment(photoId:number, commentText:string){

        return this.http
               .post(API + '/photos/' + photoId + '/comments', { commentText });

    }
}
