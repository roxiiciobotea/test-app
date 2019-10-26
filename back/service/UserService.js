'use strict';

class User {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  create(newUser) {
    console.log("STILL TRYING");
    return this.userRepository.create(newUser);
  }

}

module.exports = {
  factory(userRepository) {
    return new User(userRepository);
  }
}