'use strict';

var bcrypt = require('bcryptjs');

class User {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  create(newUser) {
    newUser.userData.password = this._encryptPass(newUser.userData.password);
    return this.userRepository.create(newUser);
  }

  authenticateUser(authData) {
    return this.userRepository.getByUsername(authData.userName)
      .then(response => {
        if (response) {
          return bcrypt.compare(authData.pw, response.userData.password)
            .then((res) => {
              return res;
            });
        } else {
          return false;
        }
      });
  }

  _encryptPass(pass) {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(pass, salt);
    return hash;
  }

}

module.exports = {
  factory(userRepository) {
    return new User(userRepository);
  }
}