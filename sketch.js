let x = -100
let elevation = -400
let direction = 0
let spiralRate = 0.01
let velocity = 5
let gravity = 0.021
let angle = 0
let spinRate = 0
let legLength = 0

let grassImage
let starsImage
let treeImage
let stumpImage
let moonImage
let bushImage


function preload() {
  grassImage = loadImage('grass.png')
  starsImage = loadImage('stars.jpg')
  treeImage = loadImage('tree.jpg')
  stumpImage = loadImage('stump.jpg')
  moonImage = loadImage('moon.jpg')
  bushImage = loadImage('bush.jpg')
}

function setup() {
  createCanvas(700, 700, WEBGL)
  noStroke()
}

function draw() {
  background('midnightblue');
  directionalLight(255, 255, 255, 1, 1, -1)
  pointLight(255, 255, 255, 0, elevation - 30, 0)
  moveUfo()
  drawSky()
  drawGround()
  drawBushes()
  drawTrees()
  drawMoon()
  drawUfo()
  drawLegs()
  spinRate += 0.045
}

function moveUfo() {
  elevation += velocity
  velocity -= gravity
  if (elevation >= 0)
    x += direction
  direction += spiralRate
  if (elevation >= 160) {
    noLoop()
  }
}

function drawSky() {
  push()
  texture(starsImage)
  ambientLight('white')
  rotateZ(angle)
  translate(0, 0, -200)
  plane(width + 550, height + 550)
  angle += 0.001
  pop()
}

function drawGround() {
  push()
  texture(grassImage)
  spotLight(255, 255, 255, 0, elevation, 0, 0, 1, 0, Math.PI / 6, 3)
  translate(0, 200, 0)
  rotateX(Math.PI / 2)
  plane(650, 550)
  pop()
}

function drawBushes() {
  push()
  texture(bushImage)
  translate(-140, 200, -190)
  sphere(20)
  translate(40, 0, 0)
  sphere(20)
  translate(40, 0, 0)
  sphere(20)
  translate(-20, -20, 0)
  sphere(20)
  translate(-40, 0, 0)
  sphere(20)
  translate(-20, -10, 0)
  sphere(20)
  translate(40, 0, 0)
  sphere(20)
  translate(40, 0, 0)
  sphere(20)
  translate(-20, -15, 0)
  sphere(20)
  translate(-40, 0, 0)
  sphere(20)
  pop()

  push()
  texture(bushImage)
  translate(5, 200, -190)
  sphere(20)
  translate(40, 0, 0)
  sphere(20)
  translate(40, 0, 0)
  sphere(20)
  translate(-20, -20, 0)
  sphere(20)
  translate(-40, 0, 0)
  sphere(20)
  translate(-20, -10, 0)
  sphere(20)
  translate(40, 0, 0)
  sphere(20)
  translate(40, 0, 0)
  sphere(20)
  translate(-20, -15, 0)
  sphere(20)
  translate(-40, 0, 0)
  sphere(20)
  pop()

  push()
  texture(bushImage)
  rotateY(radians(-30))
  translate(45, 200, -190)
  sphere(20)
  translate(40, 0, 0)
  sphere(20)
  translate(40, 0, 0)
  sphere(20)
  translate(-20, -20, 0)
  sphere(20)
  translate(-40, 0, 0)
  sphere(20)
  translate(-20, -10, 0)
  sphere(20)
  translate(40, 0, 0)
  sphere(20)
  translate(40, 0, 0)
  sphere(20)
  translate(-20, -15, 0)
  sphere(20)
  translate(-40, 0, 0)
  sphere(20)
  translate(0, 20, 10)
  sphere(20)
  translate(40, 0, 0)
  sphere(20)
  translate(-20, -10, 0)
  sphere(20)
  pop()
}

function drawTrees() {
  push()
  texture(stumpImage)
  translate(-260, 200, 40)
  cylinder(15, 60);
  texture(treeImage)
  rotateX(radians(180))
  translate(0, 70, 0)
  cone(70, 70)
  translate(0, 50, 0)
  cone(60, 70)
  translate(0, 50, 0)
  cone(50, 70)
  translate(0, 50, 0)
  cone(40, 70)
  pop()

  push()
  texture(stumpImage)
  translate(-150, 200, -120)
  cylinder(15, 60);
  texture(treeImage)
  rotateX(radians(180))
  translate(0, 70, 0)
  cone(70, 80)
  translate(0, 60, 0)
  cone(60, 80)
  translate(0, 60, 0)
  cone(50, 80)
  translate(0, 60, 0)
  cone(40, 80)
  pop()

  push()
  texture(stumpImage)
  translate(-100, 200, -200)
  cylinder(15, 60);
  texture(treeImage)
  rotateX(radians(180))
  translate(0, 70, 0)
  cone(70, 80)
  translate(0, 60, 0)
  cone(60, 80)
  translate(0, 60, 0)
  cone(50, 80)
  translate(0, 60, 0)
  cone(40, 80)
  pop()

  push()
  texture(stumpImage)
  translate(50, 200, -200)
  cylinder(15, 60);
  texture(treeImage)
  rotateX(radians(180))
  translate(0, 70, 0)
  cone(70, 80)
  translate(0, 60, 0)
  cone(60, 80)
  translate(0, 60, 0)
  cone(50, 80)
  translate(0, 60, 0)
  cone(40, 80)
  pop()

  push()
  texture(stumpImage)
  translate(150, 200, -200)
  cylinder(15, 60);
  texture(treeImage)
  rotateX(radians(180))
  translate(0, 85, 0)
  cone(80, 110)
  translate(0, 80, 0)
  cone(80, 130)
  translate(0, 80, 0)
  cone(70, 130)
  translate(0, 70, 0)
  cone(50, 90)
  pop()

  push()
  texture(stumpImage)
  translate(-250, 200, -140)
  cylinder(15, 60);
  texture(treeImage)
  rotateX(radians(180))
  translate(0, 80, 0)
  cone(80, 100)
  translate(0, 70, 0)
  cone(80, 100)
  translate(0, 70, 0)
  cone(70, 100)
  translate(0, 70, 0)
  cone(50, 100)
  pop()

  push()
  texture(stumpImage)
  translate(-30, 200, -190)
  cylinder(15, 60);
  texture(treeImage)
  rotateX(radians(180))
  translate(0, 85, 0)
  cone(80, 110)
  translate(0, 80, 0)
  cone(80, 130)
  translate(0, 80, 0)
  cone(70, 130)
  translate(0, 80, 0)
  cone(50, 130)
  pop()

  push()
  texture(stumpImage)
  translate(100, 200, -150)
  cylinder(15, 60);
  texture(treeImage)
  rotateX(radians(180))
  translate(0, 70, 0)
  cone(70, 80)
  translate(0, 60, 0)
  cone(60, 80)
  translate(0, 60, 0)
  cone(50, 80)
  translate(0, 60, 0)
  cone(40, 80)
  pop()

  push()
  texture(stumpImage)
  translate(180, 200, -90)
  cylinder(15, 60);
  texture(treeImage)
  rotateX(radians(180))
  translate(0, 70, 0)
  cone(70, 80)
  translate(0, 60, 0)
  cone(60, 80)
  translate(0, 60, 0)
  cone(50, 80)
  translate(0, 60, 0)
  cone(40, 80)
  pop()

  push()
  texture(stumpImage)
  translate(290, 200, -190)
  cylinder(15, 60);
  texture(treeImage)
  rotateX(radians(180))
  translate(0, 90, 0)
  cone(80, 100)
  translate(0, 70, 0)
  cone(70, 100)
  translate(0, 70, 0)
  cone(50, 100)
  translate(0, 70, 0)
  cone(40, 120)
  pop()

  push()
  texture(stumpImage)
  translate(320, 200, -50)
  cylinder(15, 60);
  texture(treeImage)
  rotateX(radians(180))
  translate(0, 70, 0)
  cone(70, 80)
  translate(0, 60, 0)
  cone(60, 80)
  translate(0, 60, 0)
  cone(50, 80)
  translate(0, 60, 0)
  cone(40, 80)
  pop()

  push()
  texture(stumpImage)
  translate(250, 200, 180)
  cylinder(15, 60);
  texture(treeImage)
  rotateX(radians(180))
  translate(0, 70, 0)
  cone(70, 80)
  translate(0, 60, 0)
  cone(60, 80)
  translate(0, 60, 0)
  cone(50, 80)
  translate(0, 60, 0)
  cone(40, 80)
  pop()

  push()
  texture(stumpImage)
  translate(-220, 200, 230)
  cylinder(15, 60);
  texture(treeImage)
  rotateX(radians(180))
  translate(0, 70, 0)
  cone(70, 70)
  translate(0, 50, 0)
  cone(60, 70)
  translate(0, 50, 0)
  cone(50, 70)
  translate(0, 50, 0)
  cone(40, 70)
  pop()

}

function drawMoon() {
  push()
  texture(moonImage)
  translate(330, -350, -220)
  rotateY(-angle * 2)
  sphere(35)
  pop()
}

function drawUfo() {
  push()
  rotateY(spinRate)
  translate(x, elevation, 0)
  scale(1, 0.25, 1)
  specularMaterial('lightblue')
  shininess(10)
  sphere(80)
  translate(0, -80, 0)
  cylinder(15, 200)
  translate(0, -120, 0)
  sphere(40)
  translate(0, 270, 0)
  scale(1, 4, 1)
  emissiveMaterial('white')
  sphere(10)
  translate(0, -80, 0)
  sphere(10)
  emissiveMaterial('red')
  translate(0, 30, 0)
  rotateX(radians(90))
  torus(50, 5)
  pop()
}

function drawLegs() {
  rotateY(spinRate)
  emissiveMaterial('red')
  shininess(10)
  push()
  translate(x - 50, elevation + 20, 0)
  rotateZ(radians(25))
  cylinder(5, legLength)
  pop()

  push()
  translate(x + 50, elevation + 20, 0)
  rotateZ(radians(-25))
  cylinder(5, legLength)
  pop()

  push()
  translate(x, elevation + 20, 50)
  rotateX(radians(25))
  cylinder(5, legLength)
  pop()

  push()
  translate(x, elevation + 20, -50)
  rotateX(radians(-25))
  cylinder(5, legLength)
  pop()

  if (elevation >= -50) {
    legLength += 0.5
  }
}
