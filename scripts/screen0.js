function buildScreen0(){
  screen0 = new createjs.Container();
  var bgShape0 = new createjs.Shape();
  bgShape0.graphics.beginFill("black").drawRect (
    0,
    0,
    stage.canvas.width,
    stage.canvas.height
  );

  bgShape0.graphics.endFill();
  screen0.addChild(bgShape0);

//------Title-----------//

  var titletext =  new createjs.Text("Traffic Rule", "70px arial bold", "#ffffff");
    titletext.x = 350;
    titletext.y = 70;
    screen0.addChild(titletext);

//------buttons-------//
  var buttonmain1 = new createjs.Container();
  var brectmain1 = new createjs.Shape();

  brectmain1.graphics.beginFill("black").rect(300, 150, 260, 60);
  buttonmain1.addChild(brectmain1)

  var btextmain1 = new createjs.Text("1.Interaction", "40px arial bold", "#ffffff");
  btextmain1.x = 300;
  btextmain1.y = 150;
  buttonmain1.addChild(btextmain1);

  buttonmain1.x = 100;
  buttonmain1.y = 50;
  screen0.addChild(buttonmain1);

  var buttonmain2 = new createjs.Container();
  var brectmain2 = new createjs.Shape();

  brectmain2.graphics.beginFill("black").rect(335, -150, 290, 70);
  buttonmain2.addChild(brectmain2);

  var btextmain2 = new createjs.Text("2.Roundabout", "40px arial bold", "#ffffff");
  btextmain2.x = 335;
  btextmain2.y = -200;
  buttonmain2.addChild(btextmain2);

  buttonmain2.x = 60;
  buttonmain2.y = 500;
  screen0.addChild(buttonmain2);

  buttonmain1.addEventListener("click", function(){
  stage.removeChild(screen0);
  stage.addChild(screen1);
})

buttonmain2.addEventListener("click", function(){
stage.removeChild(screen0);
stage.addChild(screen2);

})}
