require("dotenv").config();
var chalk = require("./color");
var app = require("./app");


var userinput = process.argv[2]
var datainput = process.argv.slice(3,process.argv.length+1);
datainput = datainput.join("")
 switch(userinput){
     case "concert-this":
     console.log(chalk.g("CONCERT THIS"));
    var app = new app();
    app.concert(datainput)

    //  axios({
    //      method: 'GET',
    //      url: "https://rest.bandsintown.com/artists/" + datainput + "/events?app_id=codingbootcamp"
    //  }).then(function(response){

    //      console.log(chalk.g("Concert THIS\n"));

    //      response.data.forEach(element => {
    //         var venueName = element.venue.name
    //         var venueLoc = element.venue.city
    //         var venueTime = moment(element.datetime).format("YYYY-MM-DDTHH:mm:ss");

    //         console.log(chalk.g("\nVenue: "+venueName+"\nCity: "+venueLoc+"\nDate: "+venueTime));
    //      });
         
    //  })
     console.log(chalk.g(datainput));
     break;

     case "spotify-this-song":
     var app = new app();
     app.spot();
     console.log(chalk.b("SPOTIFY THIS SONG"));
     break;

     case "movie-this":
     console.log(chalk.r("CONCERT THIS"));
     break;
     
     case "do-what-it-says":
     console.log(chalk.y("DO WHAT IT SAYS"));
     break;
 }