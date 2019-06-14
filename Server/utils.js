'use strict'
const axios = require('axios');

let businessNames = [];


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

                        //testing purposes 
                        res.data.response.groups[0].items.map((result) => {
                            businessNames.push({
                                BusinessName: result.venue.name,
                                BusinessID: result.venue.id,
                            })
                        })
                        resolve(res.data.response)
                    } else {
                        const error = new Error('Failed to get data from api');
                        reject(error);
                    }
                })
        }
        )
    },

    //google API images
    // getImageReference(){

    //     let refID = "";

    //     const firstEndPoint = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?"
    //         const parameters = {
    //             input: "Lidl Tralee",
    //             inputtype: "textquery",
    //             fields: "photos",
    //             key: "AIzaSyBHCh9_4JcSiOOn2DEAuDm3dvB7Tp8Shn8"
    //         }

    //         const url = firstEndPoint + new URLSearchParams(parameters);

    //         axios.get(url)
    //         .then(res => {
    //             if (res.status === 200) {
    //                 console.log(url);
    //                 console.log("Photo reference")
    //                 //res.data.candidates[0].photos will return multiple photos
    //                 console.log(res.data.candidates[0])


    //             refID = res.data.candidates[0].photos[0].photo_reference;
    //              return refID; 
    //             } else {
    //                 const error = new Error('Failed to get data from api');
    //                 reject(error);
    //             }
    //         })    
    // }

}
