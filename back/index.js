'use strict';

const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const sequelize = new Sequelize("postgres://dbuser:dbpass@test-db:5432/testdb");
const initializeModel = require('./persistence').initDataModel;
var cors = require('cors');

return sequelize
  .authenticate()
  .then(() => {
    return initializeModel(sequelize);
  }).then(dataModel => {

    const userRepository = require('../repository/UserRepository').factory(dataModel.User);
    const userService = require('../service/UserService').factory(userRepository);
    const userController = require('../endpoints/UserController').factory(userService);

    const healthcheckEndpoint = require('../endpoints/Healthcheck').factory();

    const app = require('express')();

    app.use(cors());
    app.use(bodyParser.json());

    app.use(healthcheckEndpoint);

    app.use(userController);

    app.listen(7000, () => console.log("Started"));
  }).catch(err => {

    console.log("ERROR " + err);

  });