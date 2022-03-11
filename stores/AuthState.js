import {action, makeObservable, observable} from 'mobx';
import UserModel from '../models/UserModel';
export class AuthState {
  isLogin: Boolean = false;
  user: UserModel = null;

  constructor() {
    makeObservable(this, {
      isLogin: observable,
      user: observable,
      login: action,
      logout: action,
    });
  }

  login(user: UserModel) {
    this.user = user;
    this.isLogin = true;
  }

  logout() {
    this.user = null;
    this.isLogin = false;
  }
}
