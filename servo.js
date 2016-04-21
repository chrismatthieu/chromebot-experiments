var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function(){
  // Default to pin 13
  //var led = new five.Led(13);
  //led.blink();

  var servo = new five.Servo(10);
  servo.sweep();

});

board.on('error', function(err){
  browserbots.speak('HEY! ' + err);
});
