let w = 800
let h = 600
let circleEscape = 0
let x,y,d,a,color1,color2,color3

function setup()
{
    createCanvas(w,h)
    background("pink")
}

function draw ()
{
  dati(x,y,d)
  circle(x,y,d)
}

function dati()
{
    x = random(0,w)
    y = random(0,h)
    d = random(30,90)
}
