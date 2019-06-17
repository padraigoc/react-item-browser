'use strict'
const axios = require('axios');

module.exports = {

    getPlaces: (activity, location) => {
        return new Promise((resolve, reject) => {
            const endPoint = "https://api.foursquare.com/v2/venues/explore?";
            const parameters = {
                client_id: process.env.FS_CLIENT_ID,
                client_secret: process.env.FS_CLIENT_SECRET,
                query: activity,
                openNow: 0,
                near: location,
                v: "20190610"
            };

            const url = endPoint + new URLSearchParams(parameters);
            axios.get(url)
                .then(res => {
                    if (res.status === 200) {
                        resolve(res.data.response)
                    } else {
                        const error = new Error('Failed to get data from api');
                        reject(error);
                    }
                })
        })

    }

}
