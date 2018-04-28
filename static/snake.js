//window.addEventListener("keydown", moveSnake, false);
var game_over = false;
var snake = new Array(4);
var snakeLen = 4;
var dir = "right";
var food = "";
var level = new Array();
var total_height = 640;
var total_width = 640;
var lvl_width = 20;
var lvl_height = 20;
var speed = 16;

snakeHeadImage = new Image();
snakeHeadImage.src = "static/image/head.png";
document.body.appendChild(snakeHeadImage);

snakeBodyImage = new Image();
snakeBodyImage.src = "static/image/body.png";
document.body.appendChild(snakeBodyImage)

snakeTailImage = new Image();
snakeTailImage.src = "static/image/tail.png";
document.body.appendChild(snakeTailImage)
//food
foodImage = new Image();
foodImage.src = "static/image/food.png";
document.body.appendChild(foodImage)

function animate(){}
function displayText(){}
function cheakSnapeCollide(){}
function moveSnake(){}
function cheakAllMove(){}
function create_food(){}
function create_snake(){}
function move_snake(){}


function display(){
   for (var i=0;i<snakeLen;i++){
        if(i==0){
          switch(dir){
             case "left":
                context.drawImage(snakeHeadImage,(snake[i].xx*32),(snake[i].yy*32));
                break;
             case "right":
                context.drawRotatedImage(snakeHeadImage,(snake[i].xx*32),(snake[i].yy*32),180);
                break;
             case "up":
                context.drawRotatedImage(snakeHeadImage,(snake[i].xx*32),(snake[i].yy*32,90);
                break;
             case "down":
                context.drawRotatedImage(snakeHeadImage,(snake[i].xx*32),(snake[i].yy*32),270);
                break;
          }
        else if(i=snakeLen-1){
             if(snake[i].xx>snake[i-1].xx){
                context.drawImage(snakeTailImage,(snake[i].xx*32),(snake[i].yy*32));
             }
             else if(snake[i].xx<snake[i-1].xx){
                 drawRotatedImage(snakeTailImage,(snake[i].xx*32),(snake[i].yy*32),180);
             }
             else if(snake[i].yy>snake[i-1].yy){
                 drawRotatedImage(snakeTailImage,(snake[i].xx*32),(snake[i].yy*32),90);
             }
             else if(snake[i].yy<snake[i-1].yy){
                 drawRotatedImage(snakeTailImage,(snake[i].xx*32),(snake[i].yy*32),270)
             }
        }
        else(){
            context.drawImage(snakeBodyImage,(snake[i].xx*32),(snake[i].yy*32))
        }

        }
   }
   context.drawImage(foodImage, (food.xx*32),(food.yy*32));
}
function drawRotatedImage(){}