require("dotenv").config();
var axios = require("axios");
var key = require("./key");
var chalk = require("./color");
var Spotify = require('node-spotify-api');

var spotify = new Spotify(key.spotify)
var userinput = process.argv[2]
var datainput = process.argv.slice(3,process.argv.length+1);
datainput = datainput.join("")
 switch(userinput){
     case "concert-this":
     console.log(chalk.g("CONCERT THIS"));
     axios({
         method: 'GET',
         url: "https://rest.bandsintown.com/artists/" + datainput + "/events?app_id=codingbootcamp"
     }).then(function(response){
         console.log(response);
     })

     console.log(chalk.g(datainput));
     break;

     case "spotify-this-song":
     console.log(chalk.b("SPOTIFY THIS SONG"));
     break;

     case "movie-this":
     console.log(chalk.r("CONCERT THIS"));
     break;
     
     case "do-what-it-says":
     console.log(chalk.y("DO WHAT IT SAYS"));
     break;
 }