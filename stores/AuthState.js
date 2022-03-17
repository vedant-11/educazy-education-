import {action, makeObservable, observable} from 'mobx';
import UserModel from '../models/UserModel';
export class AuthState {
  isLogin: Boolean = false;
  username: String = null;
  jwt: String = null;

  constructor() {
    makeObservable(this, {
      isLogin: observable,
      user: observable,
      login: action,
      logout: action,
    });
  }

  login(username, jwt) {
    this.username = username;
    this.jwt = jwt;
    this.isLogin = true;
  }

  logout() {
    this.username = null;
    this.jwt = null;
    this.isLogin = false;
  }
}
