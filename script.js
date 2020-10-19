const arr = [];
let bubble;

function setup() {
    createCanvas(400,400);
}

function draw() {
    //Make background black
    background(0);
    bubble = new Bubble();
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        bubble = new Bubble(mouseX, mouseY);
    }
    arr.push(bubble);
    for (let i = arr.length-1; i >= 0; i--) {
        arr[i].show();
        arr[i].update();
        if (arr[i].delete()) {
            //Delete bubble from array!
            arr.splice(1,i);
        }
    }
}

//Let's create a bubble class!
class Bubble {
    //Constructor will take 2 parameters: x and y position
    //Just declare them half of canvas size as default
    constructor (x = width/2,y = height/2) {
        this.x = x;
        this.y = y;
        //Bubble radius
        this.r = 7;
        //Bubble velocity
        this.vx = random(-1,1); //Left-right
        this.vy = -3; //Up
        this.color = 230;
        this.alpha = 255;
    }
    show() {
        noStroke(); //No borders on bubble
        fill(this.color, this.alpha); //Fill Ellipses
        ellipse(this.x, this.y, this.r); //Cretae Ellipses
    }
    update() {
        //Move bubbles
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 3; //Make bubble disappear slowly
        if (this.r != 30) this.r += 1; //Make bubbles bigger
    }
    delete() {
        return (this.alpha <= 0); //If bubble disappears, return true and remove it from bubbles array.
    }
}