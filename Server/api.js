'use strict';

const { getPlaces } = require('./utils');
const api = require('express').Router();

api.get('/search', (req, res) => {

  getPlaces(req.query.activity, req.query.location)
    .then(data => res.json(data)).catch((error => console.log(error)))

})
module.exports = api;