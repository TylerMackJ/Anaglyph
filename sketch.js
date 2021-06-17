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

  pg = createGraphics(img.width, img.height);
  pg.noStroke();
  pg.clear();
  pg.image(img, 0, 0);

  background(0);

  frameRate(20);
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

  tint(0, 255, 0);
  image(pg, centerX - (pg.width / 2) - centerOffsetX, centerY - (pg.height / 2) - centerOffsetY);

  // Draw Red

  centerOffsetXNew = centerOffsetX * Math.cos(Math.PI / 8) - centerOffsetY * Math.sin(Math.PI / 8);
  centerOffsetYNew = centerOffsetX * Math.sin(Math.PI / 8) + centerOffsetY * Math.cos(Math.PI / 8);

  centerOffsetX = centerOffsetXNew;
  centerOffsetY = centerOffsetYNew

  tint(255, 0, 0);
  image(pg, centerX - (pg.width / 2) - centerOffsetX, centerY - (pg.height / 2) - centerOffsetY);

  // Draw Blue

  centerOffsetXNew = centerOffsetX * Math.cos(-2 * Math.PI / 8) - centerOffsetY * Math.sin(-2 * Math.PI / 8);
  centerOffsetYNew = centerOffsetX * Math.sin(-2 * Math.PI / 8) + centerOffsetY * Math.cos(-2 * Math.PI / 8);

  centerOffsetX = centerOffsetXNew;
  centerOffsetY = centerOffsetYNew

  tint(0, 0, 255);
  image(pg, centerX - (pg.width / 2) - centerOffsetX, centerY - (pg.height / 2) - centerOffsetY);
}