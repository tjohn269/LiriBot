var axios = require("axios");
var key = require("./key");
var chalk = require("./color");
var Spotify = require('node-spotify-api');
var moment = require('moment');
var fs = require("fs");

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
        })
        .catch(function(err){
            console.log(err)});
    }
    this.spot = function(song){

    spotify.search({ type: 'track', query: song, limit: 5})
    .then(function(response){
        response.tracks.items.forEach(element =>{
            var Artist = element.artists.join(", ")
            var songName = element.name;
            var songLink = element.href;
            var album = element.album.name;
            console.log(chalk.b("\nArtists: "+Artist+"\nSong: "+songName+"\nSong URL: "+songLink+"\nAlbum: "+album))
        })
        
    })
    .catch(function(err){
        console.log(err)});
    }
    this.movie = function(move){
        var URL = "http://www.omdbapi.com/?apikey=trilogy&t="+move
    axios({
        method: 'GET',
        url: URL
    }).then(function(response){
        var Title = response.data.Title
        var Year = response.data.Year
        var Rating1 = response.data.imdbRating
        var Rating2 = response.data.Metascore
        var Country = response.data.Country
        var Lang = response.data.Language
        var Plot = response.data.Plot
        var Actors = response.data.Actors

        var display= [
            "Title: "+Title,
            "Year: "+Year,
            "Rating IMDB: "+Rating1,
            "Rating MetaScore: "+Rating2,
            "Country: "+Country,
            "Language: "+Lang,
            "Plot: "+Plot,
            "Actors: "+Actors
        ]

        console.log(chalk.r(display.join("\n")))
    })
    }
    this.do = function(){
        fs.readFile(__dirname+"/random.txt",'utf8', (err, data) => {
            if (err) throw err;
            data = data.split(",")
            console.log(data)
            if(data[0] === "spotify-this-song"){
                this.spot(data[1]);
            }
            if(data[2] === "concert-this"){
                this.concert(data[3]);
            }
            if(data[4] === "movie-this"){
                this.movie(data[5]);
            }
          });
    }
}

module.exports = AppRunner;