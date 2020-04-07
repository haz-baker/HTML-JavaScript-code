const cvs = document.getElementId("Snake");
const stx = cvs.getContext("2d");

const box = 32;

const ground = new  Image();
ground.src = "img/ground.png";

const FoodImg = new  Image();
FoodImg.src = "img/foodImg.png";

let snake = [];
snake[0] = {
    x : 9 * box,
    y : 10 * box,

}

