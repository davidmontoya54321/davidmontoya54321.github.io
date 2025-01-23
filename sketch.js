console.log("holaaa");

function preload() {
  // Cargar las imágenes de la Tierra y la Luna

  earthImg = loadImage("sprites/tierra.png");
  moonImg = loadImage("sprites/luna.png");
}
function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(0, 0, 0);
  // Coordenadas del cursor del mouse
  let mouseXPos = mouseX;
  let mouseYPos = mouseY;

  // Coordenadas de la Tierra
  let earthX = mouseXPos + 100 * cos(millis() / 1000);
  let earthY = mouseYPos + 100 * sin(millis() / 1000);

  // Coordenadas de la Luna
  let moonX = earthX + 30 * cos(millis() / 2000);
  let moonY = earthY + 30 * sin(millis() / 2000);

  // Dibujar la Tierra
  image(earthImg, earthX, earthY, 50, 50);

  // Dibujar la Luna
  image(moonImg, moonX, moonY, 20, 20);
}
