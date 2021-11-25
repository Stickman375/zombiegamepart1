var bg,waitimg,play,about,home
var gameState="wait"

function preload(){
waitimg=loadImage("bg1.jpg")
playimg=loadImage("bg2.jpg")
aboutimg=loadImage("bg3.jpg")
}

function setup(){
    createCanvas(windowWidth,windowHeight)
play=createButton("PLAY")
play.position(100,100)
about=createImg("about.png")
about.position(windowWidth-200,100)
about.size(100,100)

}

function draw(){

    if (gameState==="wait"){
    background(waitimg)}

if(play.mousePressed(()=>{
gameState="play"
}))


if(about.mousePressed(()=>{
    gameState="about"
    }))

if(gameState==="play"){
background(playimg)
}


if(gameState==="about"){
    background(aboutimg)}

    }
