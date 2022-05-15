canvas=document.getElementById("myCanvas");
Nasa_Mars_Image_Array=["Image 1.jpg", "Image 2.jpg", "Image 3.jpg", "Image 4.jpg"];
Random_Number=Math.floor(Math.random()*4);
background_image=Nasa_Mars_Image_Array[Random_Number];
console.log("background_image="+ background_image);
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
rover_image="rover.png";

function add()
{
    bg= new Image();
    bg.onload=UploadBackground;
    bg.src=background_image;

    r= new Image();
    r.onload=UploadRover;
    r.src=rover_image;
}
function UploadBackground(){
    ctx.drawImage(bg,0,0,canvas.width,canvas.height);
}
function UploadRover(){
    ctx.drawImage(r,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (keyPressed=='37'){
        left();
        console.log("left");
    }
    if (keyPressed=='38'){
        up();
        console.log("up");
    }
    if (keyPressed=='39'){
        right();
        console.log("right");
    }
    if (keyPressed=='40'){
        down();
        console.log("down");
    }
}
function up()
{
if(rover_y>=0)
{
    rover_y=rover_y - 10;
    console.log("When up arrow is pressed, x="+ rover_x +", y="+ rover_y);
    UploadBackground();
    UploadRover();
}
}
function down()
{
    if(rover_y<=500)
    {
rover_y=rover_y + 10;
console.log("When down arrow is pressed, x="+ rover_x +", y="+ rover_y);
UploadBackground();
UploadRover();
    }
}
function left()
{
    if(rover_x>=0)
    {
rover_x=rover_x - 10;
console.log("When left arrow is pressed, x="+ rover_x +", y="+ rover_y);
UploadBackground();
UploadRover();
    }
}
function right()
{
    if(rover_x<=700)
    {
        rover_x=rover_x + 10;
        console.log("When right arrow is pressed, x="+ rover_x +", y="+ rover_y);
        UploadBackground();
        UploadRover();
    }
}