'use strict';

const {getPlaces, getImageReference, getVenueDetails } = require('./utils');
const api = require('express').Router();

let bueinssNames ={};

api.get('/search', (req, res) => {

    getPlaces(req.query.activity, req.query.location)
    .then(data => res.json(data)).catch((error => console.log(error)))

   //getVenueDetails("4d26e2f03c7954814460bf9b");

  });

module.exports = api;