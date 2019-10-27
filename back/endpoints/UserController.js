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

  // router.get('/user/:id', (req, res, next) => {
  //   userService
  //     .find(req.params.id)
  //     .then(result => {
  //       if (result == null) {
  //         res.status(statusCodes.NOT_FOUND);
  //       } else {
  //         res.status(statusCodes.OK).json(result);
  //       }
  //       next();
  //     })
  //     .catch(next);
  // });

  return router;
}

module.exports = {
  factory: userController
};