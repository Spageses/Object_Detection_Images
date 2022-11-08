img = "";

function preload(){
    img = loadImage('dog_cat.jpg');
}

function setup(){
    canvas = createCanvas(600, 400);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 600, 400);
    fill("#FF0000");
    stroke("#FF0000");
    text("dog", 50, 70);
    noFill();
    rect(30, 60, 450, 350);
}