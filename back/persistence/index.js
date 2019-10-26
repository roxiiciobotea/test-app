'use strict';

const user = require('./User.entity');

function initDataModel(sequelize) {
  const User = sequelize.define(user.name, user.definition, user.tableOptions);

  return {
    User
  };
}

module.exports = {
  initDataModel
};