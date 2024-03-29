function preload() {
  let dpr = window.devicePixelRatio || 1
  img = loadImage("https://picsum.photos/" + int(windowWidth * dpr * 1.5) + "/" + int(windowHeight * dpr * 1.5));
}

function setup() {
  let dpr = window.devicePixelRatio || 1
  createCanvas(windowWidth * dpr, windowHeight * dpr);
  blendMode(ADD);

  pixelDensity(1);

  r = createGraphics(img.width, img.height);
  g = createGraphics(img.width, img.height);
  b = createGraphics(img.width, img.height);

  r.tint(255, 0, 0);
  r.image(img, 0, 0);
  g.tint(0, 255, 0);
  g.image(img, 0, 0);
  b.tint(0, 0, 255);
  b.image(img, 0, 0);
  noTint();

  background(0);
}

function draw() {
  clear()
  background(0);

  // mouse position from center
  centerX = width / 2;
  centerY = height / 2;

  // Draw Green

  centerOffsetX = (mouseX - centerX) / 2;
  centerOffsetY = (mouseY - centerY) / 2;

  image(g, centerX - (g.width / 2) - centerOffsetX, centerY - (g.height / 2) - centerOffsetY);

  // Draw Red

  centerOffsetXNew = centerOffsetX * Math.cos(Math.PI / 8) - centerOffsetY * Math.sin(Math.PI / 8);
  centerOffsetYNew = centerOffsetX * Math.sin(Math.PI / 8) + centerOffsetY * Math.cos(Math.PI / 8);

  centerOffsetX = centerOffsetXNew;
  centerOffsetY = centerOffsetYNew

  image(r, centerX - (r.width / 2) - centerOffsetX, centerY - (r.height / 2) - centerOffsetY);

  // Draw Blue

  centerOffsetXNew = centerOffsetX * Math.cos(-2 * Math.PI / 8) - centerOffsetY * Math.sin(-2 * Math.PI / 8);
  centerOffsetYNew = centerOffsetX * Math.sin(-2 * Math.PI / 8) + centerOffsetY * Math.cos(-2 * Math.PI / 8);

  centerOffsetX = centerOffsetXNew;
  centerOffsetY = centerOffsetYNew

  image(b, centerX - (b.width / 2) - centerOffsetX, centerY - (b.height / 2) - centerOffsetY);
}
