var mgr;

var circlediam = 50

function setup() {
  createCanvas(windowWidth,windowHeight)
  mgr = new SceneManager()

  mgr.addScene(Scene1)
  mgr.addScene(Scene2)
  mgr.showNextScene()
  // put setup code here
}

function draw() {
  mgr.draw()
}

function keyPressed(){
  if(key === '1'){
    mgr.showScene(Scene1)
  }
  else if(key === '2'){
    mgr.showScene(Scene2)
  }
}

function Scene1(){
  this.setup = function(){
    console.log("scene 1 loaded")
    this.inp = createInput("Name")
    this.inp.position(500,500)

    this.button = createButton("submit")
    this.button.position(600,500)
    this.button.mousePressed(this.retrieveInput)
  }
  this.draw = function(){
    backgroud("pink")
    circle(200,200,100)
  }
}

function Scene2(){
  this.setup = function(){
    console.log(this.inp.value())
  }
  this.draw = function(){
    background("blue")
    circle(200,200,10)
  }
}
