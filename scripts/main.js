var stage;
var loadingScreen;
var screen0;
var screen1;
var screen2;
var preload;

function init(){
  canvas = document.getElementById("slide");
  stage = new createjs.Stage(canvas);
  createjs.Ticker.setFPS(60);
	createjs.Ticker.addEventListener("tick", stage);
  preloadAssets();
}

function preloadAssets(){
  loadingScreen = new createjs.Container();
  var loadshape = new createjs.Shape();
  loadshape.graphics.beginFill("#ffffff").drawRect(
  0, 0,
  stage.canvas.width, stage.canvas.height);
  loadshape.graphics.endFill();
  loadingScreen.addChild(loadshape);

  var label = new createjs.Text("Loading...", "16px Arial white");
  label.x = 300;
  label.y = 250;
  loadingScreen.addChild(label);
  stage.addChild(loadingScreen);

  preload = new createjs.LoadQueue();
  preload.installPlugin(createjs.Sound);
  preload.loadFile({id:"car2",src:"images/others1.png"});
  preload.loadFile({id:"bluerightleft",src:"images/others2.png"});
  preload.loadFile({id:"bluecar",src:"images/bluecar.png"});
  preload.loadFile({id:"light1",src:"images/light.png"});
  preload.loadFile({id:"redcar",src:"images/redcar.png"});

  preload.on("complete", preloadComplete, this);
}

function preloadComplete(event){
      console.log("preload finished");
      createjs.MotionGuidePlugin.install();
      stage.removeChild(loadingScreen);
      addAudio();
      buildScreen0();
      buildScreen1();
      buildScreen2();
      stage.addChild(screen0);
}

function addAudio(){
    var music = createjs.Sound.play("destination");
    music.volume = 0;
}
