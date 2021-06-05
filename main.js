canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "car1.jpg";
car1_x = 10;
car1_y = 10;


background_image = "track.jpg";

car2_image = "car2.jpg";
car2_x = 10;
car2_y = 300;
car2_width = 120;
car2_height = 70;



function add() {

background_imgTag = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = background_image;

car1_imgTag = new Image();
car1_imgTag.onload = uploadCar1;
car1_imgTag.src = car1_image;

car2_imgTag = new Image();
car2_imgTag.onload = uploadCar2;
car2_imgTag.src = car2_image;


}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadCar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}


window.addEventListener("keydown", my_keydown);
function my_keydown(e) {

keyPressed = e.keyCode;
console.log(keyPressed);

if (keyPressed == '38')
{

    up();
    console.log("up");
}

if (keyPressed == '40')
{

    down();
    console.log("down");
}

if (keyPressed == '37')
{

    left();
    console.log("left");
}

if (keyPressed == '39')
{

    right();
    console.log("right");
}


if (keyPressed == '87')
{

    w();
    console.log("w");
}

if (keyPressed == '83')
{

    s();
    console.log("s");
}

if (keyPressed == '65')
{

    a();
    console.log("a");
}

if (keyPressed == '68')
{

    d();
    console.log("d");
}

}





function up() {

if(car1_y >= 0)
{
car1_y = car1_y - 10;
 console.log("When up arrow is pressed, x = " + car1_x + " | y = " +car1_y);
  uploadBackground();
   uploadCar1();
   uploadCar2();
}
}

function w() {

    if(car2_y >= 0)
    {
    car2_y = car2_y - 10;
     console.log("When w is pressed, x = " + car2_x + " | y = " +car2_y);
      uploadBackground();
       uploadCar1();
       uploadCar2();
    }
    }

function down() {

    if(car1_y <= 500)
    {
    car1_y = car1_y + 10;
     console.log("When down arrow is pressed, x = " + car1_x + " | y = " +car1_y);
      uploadBackground();
       uploadCar1();
       uploadCar2();
    }
    }

    function s() {

        if(car2_y <= 500)
        {
        car2_y = car2_y + 10;
         console.log("When s is pressed, x = " + car2_x + " | y = " +car2_y);
          uploadBackground();
           uploadCar1();
           uploadCar2();
        }
        }


    function right() {

    if(car1_x <= 700)
    {
    car1_x = car1_x + 10;
     console.log("When right arrow is pressed, x = " + car1_x + " | y = " +car1_y);
      uploadBackground();
       uploadCar1();
       uploadCar2();
    }
    }

    function d() {

        if(car2_x <= 700)
        {
        car2_x = car2_x + 10;
         console.log("When d is pressed, x = " + car2_x + " | y = " +car2_y);
          uploadBackground();
           uploadCar1();
           uploadCar2();
        }
        }

    function a() {

        if(car2_x >= 0)
        {
        car2_x = car2_x - 10;
         console.log("When a is pressed, x = " + car2_x + " | y = " +car2_y);
          uploadBackground();
           uploadCar1();
           uploadCar2();
        }
        }

        function left() {

            if(car1_x >= 0)
            {
            car1_x = car1_x - 10;
             console.log("When left arrow is pressed, x = " + car2_x + " | y = " +car2_y);
              uploadBackground();
               uploadCar1();
               uploadCar2();
            }
            }


if(car1_x > 700)
{
    console.log("car1_won");
    document.getElementById('game_status').innerHTML = "Car 1 WON";
}

if(car2_x > 700)
{
    console.log("car2_won");
    document.getElementById('game_status').innerHTML = "Car 2 WON";
}




