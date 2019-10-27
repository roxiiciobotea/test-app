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

  getByUsername(username) {
    return this.User.findOne({ where: { userName: username } });
  }
}

module.exports = {
  factory(User) {
    return new UserRepository(User);
  }
};