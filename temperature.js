/*
 You have the following variables available to your script:

 io  = the firmata instance for the connected hardware
 browserbots  = namespace of APIs and controls to use in your script
 require  = subset of the NodeJS require with bundled robotics, IoT, and utility libs
*/

var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function(){
  console.log("BOARD READY");

  var Meshblu = require('meshblu');

var conn = Meshblu.createConnection({
  "uuid": "2a78f604-9348-4736-a84e-15c10ac349b0",
  "token": "9d1d0c3c4ca57d0aeddc5c87fd5e11dd0a9336f0",
  "server": "meshblu.octoblu.com",
  "port": 443
});

conn.on('ready', function(data){
  console.log('UUID AUTHENTICATED!');
  //console.log(data);







  // Default to pin 13
  //var led = new five.Led(13);
  //led.blink();

  var temperature = new five.Thermometer({
    controller: "TMP36",
    pin: "A0"
  });

  temperature.on("data", function() {
    console.log(this.celsius + "°C", this.fahrenheit + "°F");

  conn.message({
    "devices": "*",
    "payload": {
      "temp": this.fahrenheit
    }
  });

  });


});

});



board.on('error', function(err){
  browserbots.speak('HEY! ' + err);
});


  
