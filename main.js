NoseX=0;
NoseY=0;

function preload() {
  clownNose = loadImage('mustache-png.webp');
}

function setup() {
  canvas = createCanvas(280, 280);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet foi inicializado');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    NoseX = results[0].pose.nose.x-15;
    NoseY = results[0].pose.nose.y-15;
  }
}

function draw() {
  image(video, 0, 0, 280, 280);
  image(clownNose, NoseX, NoseY, 20, 20);
}

function take_snapshot(){    
  save('myFilterImage.png');
}