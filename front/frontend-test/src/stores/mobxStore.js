import { observable, action, computed } from 'mobx';

class MobxStore {
  @observable
  user = {
    username: null,
    role: null
  };

  @observable
  test = "abc";

  @computed
  get greeting() {
    return `Hello ${this.user.username}`;
  }

  @action.bound
  setUser = user => {
    this.user = user;
  }
}

export default new MobxStore();