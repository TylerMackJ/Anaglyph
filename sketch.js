function preload() {
  img = loadImage("https://picsum.photos/640/480");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  blendMode(ADD);

  maxImgWidth = width;
  maxImgHeight = height;

  if (img.width > maxImgWidth) {
    img.resize(img.width * (maxImgWidth / img.width), img.height * (maxImgWidth / img.width));
  }
  if (img.height > maxImgHeight) {
    img.resize(img.width * (maxImgHeight / img.height), img.height * (maxImgHeight / img.height));
  }

  r = createGraphics(img.width, img.height);
  g = createGraphics(img.width, img.height);
  b = createGraphics(img.width, img.height);

  r.tint(255, 0, 0);
  r.image(img, img.width / 2, img.height / 2);
  g.tint(0, 255, 0);
  g.image(img, img.width / 2, img.height / 2);
  b.tint(0, 0, 255);
  b.image(img, img.width / 2, img.height / 2);
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

  centerOffsetX = mouseX - centerX;
  centerOffsetY = mouseY - centerY;

  // tint(0, 255, 0);
  image(g, centerX - (img.width / 2) - centerOffsetX, centerY - (img.height / 2) - centerOffsetY);

  // Draw Red

  centerOffsetXNew = centerOffsetX * Math.cos(Math.PI / 8) - centerOffsetY * Math.sin(Math.PI / 8);
  centerOffsetYNew = centerOffsetX * Math.sin(Math.PI / 8) + centerOffsetY * Math.cos(Math.PI / 8);

  centerOffsetX = centerOffsetXNew;
  centerOffsetY = centerOffsetYNew

  // tint(255, 0, 0);
  image(r, centerX - (img.width / 2) - centerOffsetX, centerY - (img.height / 2) - centerOffsetY);

  // Draw Blue

  centerOffsetXNew = centerOffsetX * Math.cos(-2 * Math.PI / 8) - centerOffsetY * Math.sin(-2 * Math.PI / 8);
  centerOffsetYNew = centerOffsetX * Math.sin(-2 * Math.PI / 8) + centerOffsetY * Math.cos(-2 * Math.PI / 8);

  centerOffsetX = centerOffsetXNew;
  centerOffsetY = centerOffsetYNew

  // tint(0, 0, 255);
  image(b, centerX - (img.width / 2) - centerOffsetX, centerY - (img.height / 2) - centerOffsetY);
}
