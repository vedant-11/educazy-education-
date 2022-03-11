export default class UserModel {
  constructor(name: String, email: String, jwtToken: String) {
    this.name = name;
    this.email = email;
    this.jwtToken = jwtToken;
  }
}
