'use strict';

const express = require('express');
const statusCodes = require('http-status-codes');
const Sequelize = require('sequelize');
const sequelize = new Sequelize("postgres://dbuser:dbpass@test-db:5432/testdb");

function healthcheck() {
  const router = new express.Router();

  router.get("/healthcheck", (req, res, next) => {
    sequelize
      .authenticate()
      .then(() => {
        res.sendStatus(statusCodes.OK);
      }).catch(err => {
        res.sendStatus(statusCodes.SERVICE_UNAVAILABLE);
      });
  });

  return router;
}

module.exports = {
  factory: healthcheck
};