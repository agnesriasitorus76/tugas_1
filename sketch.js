let j;
function setup() {
  // put setup code here
  createCanvas(400,200);
  j = 0;
}

function draw() {
  // put drawing code here
  background(204,255,255);


  strokeWeight(0)
  fill(294,204,255)
  ellipse(100,75,78,70) // badan atas
  ellipse(100,122,98,99) // badan bawah
  ellipse(55,80,30,60) // tangan kanan
  ellipse(140,80,30,60) // tangan kiri
  
  arc(110,150,45,100, radians(-30), radians(190)) // kaki kanan
  ellipse(100,35,45,30) // pala


  strokeWeight(1)
  fill(255,102,102)
  rect(50,180,86,15) // papan
  rect(45,170,20,30) // papan kiri
  rect(130,170,20,30) // papan kanan
  

  strokeWeight(0.5)
  fill(294,204,255)

  arc(85,150,45,100, radians(40), radians(-150)) // kaki kiri
  strokeWeight(6)
  point(90,33) // mata kiri
  point(110,33) // mata kanan
  strokeWeight(1)
  fill(0,0,0)
  line(200,0,200,400)
  line(95,33,105,33)

  ///////////////////////////////////////
  
  strokeWeight(0)
  fill(294,204,255)
  ellipse(300,75,78,70) // badan atas
  ellipse(300,122,98,99) // badan bawah
  ellipse(340,80,30,60) // tangan kiri
  
  arc(310,150,45,100, radians(-30), radians(190)) // kaki kanan
  ellipse(300,35,45,30) // pala

  strokeWeight(6)
  point(290,33) // mata kiri
  point(310,33) // mata kanan

  strokeWeight(1)
  fill(255,102,102)
  rect(250,180,86,15) // papan
  rect(245,170,20,30) // papan kiri
  rect(330,170,20,30) // papan kanan
  

  var x = 33 + 1*Math.sin(j/20);
  var y = 295 + 1*Math.sin(j/20);
  j += 0.5;
  strokeWeight(1)
  fill(0,0,0)
  line(y,x,305,x)

  strokeWeight(0.5)
  fill(294,204,255)
  arc(285,150,45,100, radians(40), radians(-150)) // kaki kiri;
  
  var y = 30 + 2*Math.sin(j/20);
  var x = 255 + 2*Math.sin(j/20);
  j += 2;
  strokeWeight(0)
  ellipse(x,80,y,60) // tangan kanan
}