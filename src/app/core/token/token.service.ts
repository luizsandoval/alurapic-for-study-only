import { Injectable } from '@angular/core';

const KEY = 'authToken';
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  hasToken():boolean {
      // the !! operator converts strings into boolean
      return !!this.getToken();
  }

  setToken(token) {
    window.localStorage.setItem(KEY, token);
  }

  getToken(){
      return window.localStorage.getItem(KEY);
  }

  removeToken() {
      window.localStorage.removeItem(KEY);
  }
}
