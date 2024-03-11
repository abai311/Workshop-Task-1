let size = 100;
let angle = 0;

function setup(){
  createCanvas(600,500);
  angleMode(DEGREES)
  iceCream(width / 2, height - 200, 250, color(200,100,0), color(255,220,255));
  
}

function draw() {
  background(220);
  for(let x = 0 - size; x < width + size; x += size)
    for(let y = 0 - size; y <height + size; y += size) {
      pop()
      push()
      translate(x, y);
      rotate(angle);
      fill(200,100,0)
      triangle(x - size / 2, y, x + size / 2, y, x, y - size * 2)
      
      translate(x, y);
      rotate(-angle);
      fill(255,220,255);
      ellipse(x,y - size * 2, size, size);
       
      angle += 0.010;
      
    }
}
  
function iceCream(x, y, size, coneColor, iceCreamColor) {
  fill(coneColor);
  triangle(x - size / 2, y, x + size / 2, y, x, y - size * 2);
  fill(iceCreamColor);
  ellipse(x,y - size * 2, size, size);
   ellipse(x,y + size * 5 , size, size);
}
