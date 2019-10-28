import { observable } from 'mobx';

class MobxStore {
  @observable
  name = "";
}

export default new MobxStore();