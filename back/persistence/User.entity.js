'use strict';

const Sequelize = require('sequelize');
const constants = require('../utils/constants');

function getName() {
  return constants.persistence.entity.user.name;
}

function getDefinition() {
  return {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      field: 'id'
    },
    userName: {
      type: Sequelize.STRING(255),
      allowNull: false,
      field: 'username'
    },
    userData: {
      type: Sequelize.JSONB,
      allowNull: false,
      field: 'userdata'
    }
  };
}

function getTableOptions() {
  return {
    schema: constants.persistence.schema,
    tableName: constants.persistence.entity.user.table
  };
}

module.exports = {
  name: getName(),
  definition: getDefinition(),
  tableOptions: getTableOptions()
};