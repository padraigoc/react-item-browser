'use strict';

const {getPlaces } = require('./utils');
const api = require('express').Router();

api.get('/search', (req, res) => {

  //to see what is being sent in query
  //console.log ("Query:");
  // console.log (req.query);

    getPlaces(req.query.activity, req.query.location)
    .then(data => res.json(data)).catch((error => console.log(error)))
  });

module.exports = api;