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

function preload() {
  grassImage = loadImage('grass.png')
  starsImage = loadImage('stars.jpg')
  treeImage = loadImage('tree.jpg')
  stumpImage = loadImage('stump.jpg')
  moonImage = loadImage('moon.jpg')
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

function drawTree(x, y, z, r, c, s) {
  push()
  texture(stumpImage)
  translate(x, y, z)
  cylinder(15, 60)
  texture(treeImage)
  rotateX(radians(180))
  translate(0, s[0], 0)
  cone(r[0], c[0])
  translate(0, s[1], 0)
  cone(r[1], c[1])
  translate(0, s[2], 0)
  cone(r[2], c[2])
  translate(0, s[3], 0)
  cone(r[3], c[3])
  pop()
}

function drawTrees() {

  drawTree(-260, 200, 40,
    [70, 60, 50, 40],
    [70, 70, 70, 70],
    [70, 50, 50, 50])

  drawTree(-150, 200, -120,
    [70, 60, 50, 40],
    [80, 80, 80, 80],
    [70, 60, 60, 60])

  drawTree(-100, 200, -200,
    [70, 60, 50, 40],
    [80, 80, 80, 80],
    [70, 60, 60, 60])

  drawTree(50, 200, -190,
    [70, 60, 50, 40],
    [80, 80, 80, 80],
    [70, 60, 60, 60])

  drawTree(150, 200, -200,
    [80, 80, 70, 50],
    [110, 130, 130, 90],
    [85, 100, 100, 70])

  drawTree(-250, 200, -140,
    [80, 80, 70, 50],
    [100, 100, 100, 100],
    [80, 70, 70, 70])

  drawTree(-30, 200, -170,
    [90, 80, 70, 50],
    [110, 130, 130, 130],
    [85, 80, 80, 80])

  drawTree(100, 200, -150,
    [70, 60, 50, 40],
    [80, 80, 80, 80],
    [70, 60, 60, 60])

  drawTree(180, 200, -90,
    [70, 60, 50, 40],
    [80, 80, 80, 80],
    [70, 60, 60, 60])

  drawTree(290, 200, -190,
    [80, 70, 50, 40],
    [100, 100, 100, 120],
    [90, 70, 70, 70])

  drawTree(320, 200, -50,
    [70, 60, 50, 40],
    [80, 80, 80, 80],
    [70, 60, 60, 60])

  drawTree(250, 200, 180,
    [70, 60, 50, 40],
    [80, 80, 80, 80],
    [70, 60, 60, 60])

  drawTree(-220, 200, 230,
    [70, 60, 50, 40],
    [70, 70, 70, 70],
    [70, 50, 50, 50])
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
