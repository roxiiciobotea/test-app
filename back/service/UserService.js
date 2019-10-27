'use strict';

class User {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  create(newUser) {
    return this.userRepository.create(newUser);
  }

  getByUsername(username) {
    return this.userRepository.getByUsername(username);
  }

}

module.exports = {
  factory(userRepository) {
    return new User(userRepository);
  }
}