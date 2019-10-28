'use strict';

const express = require('express');
const statusCodes = require('http-status-codes');

function userController(userService) {
  const router = new express.Router();

  router.post('/user', (req, res, next) => {
    userService
      .create(req.body)
      .then(result => {

        if (result == null) {
          res.status(statusCodes.INTERNAL_SERVER_ERROR);
        } else {
          res.status(statusCodes.CREATED).json(result);
        }

        next();
      }).catch(next);
  });

  router.get('/authenticate', (req, res, next) => {
    const b64auth = (req.headers.authorization).split(' ')[1];
    const strauth = new Buffer(b64auth, 'base64').toString();
    const splitIndex = strauth.indexOf(':');

    const authData = {
      userName: strauth.substring(0, splitIndex),
      pw: strauth.substring(splitIndex + 1)
    };

    userService
      .authenticateUser(authData)
      .then(result => {
        if (result === true) {
          res.sendStatus(statusCodes.OK);
        } else {
          res.sendStatus(statusCodes.NOT_FOUND);
        }
        next();
      })
      .catch(next);
  });

  return router;
}

module.exports = {
  factory: userController
};