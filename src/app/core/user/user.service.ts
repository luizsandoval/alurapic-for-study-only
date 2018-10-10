import { Injectable } from "@angular/core";
import { TokenService } from "../token/token.service";
import { BehaviorSubject } from "rxjs";
import * as jtw_decode from 'jwt-decode';
import { IUser } from "./user";

@Injectable({
    providedIn: 'root'
})
export class UserService{

    private _userSubject = new BehaviorSubject<IUser>(null);
    private _username: string = '';

    constructor(private _tokenService: TokenService){

        // first, we verify if there's a token
        this._tokenService.hasToken() &&

        // if so, then we call the decode method
            this.decodeAndNotify();
            
    }
    
    // here we set the token when the user logs in the application
    setToken(token:string){

        this._tokenService.setToken(token);
        this.decodeAndNotify();

    }

    // here we return the _userSubject as an Observable, in order to allow subscribes 
    getUser(){
        return this._userSubject.asObservable();
    }

    // this method will decode the token 
    private decodeAndNotify(){
        // first, we get the token using the tokenService
        const token = this._tokenService.getToken();

        // then, we decode the token, using the jwt_decode and then, parses it as an User
        const user = jtw_decode(token) as IUser;

        this._username = user.name;

        this._userSubject.next(user);
    }

    logout(){
        // first we remove the token from the local storage
        this._tokenService.removeToken();

        // then we emit a null subject, defining that we don't have a logged user
        this._userSubject.next(null);
    }

    // here we return if the user is logged in or not
    isLogged(){
        return this._tokenService.hasToken();
    }

    getUsername(){
        return this._username;
    }
}