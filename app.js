var axios = require("axios");
var key = require("./key");
var chalk = require("./color");
var Spotify = require('node-spotify-api');
var moment = require('moment');

var spotify = new Spotify(key.spotify)

var AppRunner = function(){

    this.concert = function(band){
        axios({
            method: 'GET',
            url: "https://rest.bandsintown.com/artists/" + band + "/events?app_id=codingbootcamp"
        }).then(function(response){
   
            console.log(chalk.g("Concert THIS\n"));
   
            response.data.forEach(element => {
               var venueName = element.venue.name
               var venueLoc = element.venue.city
               var venueTime = moment(element.datetime).format("YYYY-MM-DDTHH:mm:ss");
   
               console.log(chalk.g("\nVenue: "+venueName+"\nCity: "+venueLoc+"\nDate: "+venueTime));
            });
        });
    }
    this.spot = function(){

    spotify.search({ type: 'track', query: 'All the Small Things' })
     .then(function(response) {
       console.log(response);
     })
     .catch(function(err) {
       console.log(err);
     });
    }
}

module.exports = AppRunner;