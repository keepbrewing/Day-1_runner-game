var runner, runner_animation;
var ground, invisible_ground, ground_image;

function preload(){
  runner_animation = loadAnimation("run1.png", "run2.png", "run3.png");
  ground_image = loadImage("ground.png");
}

function setup() {
  createCanvas(800,400);
  runner = createSprite(100, 320, 20, 50);
  runner.addAnimation("running", runner_animation);
  ground = createSprite(400, 380, 800, 20);
  ground.addImage(ground_image);
  ground.depth = runner.depth - 1;
  invisible_ground = createSprite(400, 390, 800, 20);
  invisible_ground.visible = false;
}

function draw() {
  background(7,0,88); 
  if(keyDown("space") && runner.y >= 295) {
    runner.velocityY = -12;
  } 
  runner.velocityY = runner.velocityY + 0.5;
  runner.collide(invisible_ground);
  drawSprites();
}


