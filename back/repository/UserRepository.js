'use strict';

class UserRepository {
  constructor(User) {
    this.User = User;
    User.sync({ force: false });
  }

  create(newUser) {
    return this.User
      .create(newUser);
  }
}

module.exports = {
  factory(User) {
    return new UserRepository(User);
  }
};