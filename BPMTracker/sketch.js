var song;
var ampli;
var count=0;
var balls=[];

function preload() {

	//song = loadSound('resources/Spaceman.mp3');
	song = loadSound('resources/Dee.mp3');

}


function setup() {

  ampli= new p5.Amplitude();
  createCanvas(500,500);
  background(200,0,140);
  
  song.setVolume(0.1);
  song.play();
  for (var i = 0; i < 150; i++) {
  	balls[i] = new Ball(random(0,width),random(0,height));
  }
  
  

}

function draw() {
	//background(200,0,140);
	textSize(32);
    text("BPM: ", 10, 30);
	var t = ampli.getLevel();
	var tracker = map(t,0,1,10,100);
	 if (t>=.3) {count++}
	// console.log(count);
	for (var i = 0; i < balls.length; i++) {
		balls[i].show(tracker);
		balls[i].move();
			
	}
	
	//b.move();
}