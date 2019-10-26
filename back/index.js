'use strict';

const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const sequelize = new Sequelize("postgres://dbuser:dbpass@test-db:5432/testdb");
const initializeModel = require('../persistence').initDataModel;

return sequelize
  .authenticate()
  .then(() => {
    return initializeModel(sequelize);
  }).then(dataModel => {

    const userRepository = require('../repository/UserRepository').factory(dataModel.User);
    const userService = require('../service/UserService').factory(userRepository);
    const userController = require('../endpoints/UserController').factory(userService);

    const app = require('express')();

    app.use(bodyParser.json());

    app.use(userController);

    app.get('/', (req, res) => res.send('Welcome'));

    // app.use(function (err, request, response, next) {
    //   return response.status(err.).send(err.message);
    // });

    app.listen(7000, () => console.log("Started"));
  }).catch(err => {

    console.log("ERROR " + err);

  });