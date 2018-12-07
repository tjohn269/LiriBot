require("dotenv").config();
var chalk = require("./color");
var app = require("./app");



var userinput = process.argv[2]
var datainput = process.argv.slice(3,process.argv.length+1).join(" ")
 switch(userinput){
    case "concert-this":
    console.log(chalk.g("CONCERT THIS"));
    var app = new app();
    if(!datainput){
        datainput ="Big Sean";
    }
    app.concert(datainput)
    break;

     case "spotify-this-song":
     var app = new app();
     if(!datainput){
        datainput ="The Sign";
     }
     app.spot(datainput);
     console.log(chalk.b("SPOTIFY THIS SONG"));
     break;

     case "movie-this":
     var app = new app();
     if(!datainput){
        datainput ="Mr. Nobody";
     }
     app.movie(datainput);
     console.log(chalk.r("MOVIE THIS"));
     break;
     
     case "do-what-it-says":
     var app = new app();
     app.do();
     console.log(chalk.y("DO WHAT IT SAYS"));
     break;
 }