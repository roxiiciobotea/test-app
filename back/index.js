
const Sequelize = require('sequelize');
const sequelize = new Sequelize("postgres://dbuser:dbpass@test-db:5432/testdb");

return sequelize
  .authenticate()
  .then(() => {
    const app = require('express')();

    app.get('/', (req, res) => res.send('Startedddddddd'));

    app.listen(7000, () => console.log("Startedddddddd"));

    return app;
  }).catch(err => {

    console.log("ERROR " + err);

  });