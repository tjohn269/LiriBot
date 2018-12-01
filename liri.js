require("dotenv").config();
var key = require("./key");

var spotify = new Spotify(key.spotify)

userinput = process.argv[2]
 switch(userinput){
     case "concert-this":
     console.log("CONCERT THIS");
     break;

     case "spotify-this-song":
     console.log("SPOTIFY THIS SONG");
     break;

     case "movie-this":
     console.log("CONCERT THIS");
     break;
     
     case "do-what-it-says":
     console.log("DO WHAT IT SAYS");
     break;
 }