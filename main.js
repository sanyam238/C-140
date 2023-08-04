marioX = 620;
marioY = 336;
NoseX =  0;
NoseY = 0;
img="";

function preload() {
	world_start = loadSound("world_start.wav");
	img = loadImage("mario05.png");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,536);
    canvas.parent("canvas");
    video = createCapture(VIDEO);
	video.size(1240,500);
	video.parent("game_console");

	PoseNet = ml5.poseNet(video,modelLoaded);
	PoseNet.on('pose',gotPoses);
	instializeInSetup(mario);
}

function draw() {
	game()
     
    image(img,marioX,marioY, 40,70);

	if(NoseX < 620){
		marioX = marioX - 1;
	}

	if(NoseX > 620){
		marioX = marioX + 1;
	}

	if(NoseY < 250){
		marioY = marioY - 1;
	}
}

function modelLoaded(){
	console.log("Model Loaded !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
}

function gotPoses(results){
if(results.length > 0){
	NoseX = results[0].pose.nose.x;
	NoseY = results[0].pose.nose.y;
	console.log("nose x = "+ NoseX + "Nose Y = "+ NoseY);
}
}


