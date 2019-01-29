
var timeline = new createjs.Timeline( {loop: false} );

function buildScreen1(){
  screen1 = new createjs.Container();
  var bgShape = new createjs.Shape();
  bgShape.graphics.beginFill("#258e22").drawRect (
    0,
    0,
    stage.canvas.width,
    stage.canvas.height
  );

  bgShape.graphics.endFill();
  screen1.addChild(bgShape);

  var roadShape1 = new createjs.Shape();
  roadShape1.graphics.beginFill("#959998").drawRect (
    0, 193, stage.canvas.width,193);
  roadShape1.graphics.endFill();
  screen1.addChild(roadShape1);

  var roadShape2 = new createjs.Shape();
  roadShape2.graphics.beginFill("#959998").drawRect (
    490, 0, 220,stage.canvas.height);
  roadShape2.graphics.endFill();
  screen1.addChild(roadShape2);

  var string1 = new createjs.Shape();
  string1.graphics.beginFill("#ffffff").drawRect (
    0, 289, stage.canvas.width,5);
  string1.graphics.endFill();
  screen1.addChild(string1);

  var string2 = new createjs.Shape();
  string2.graphics.beginFill("#ffffff").drawRect (
    595, 0, 5,stage.canvas.height);
  string2.graphics.endFill();
  screen1.addChild(string2);

  var interaction = new createjs.Shape();
  interaction.graphics.beginFill("#959998").drawRect (
    485, 193, 220,193);
  string2.graphics.endFill();
  screen1.addChild(interaction);

//-----buttons------///

   var button = new createjs.Container();
   var brect = new createjs.Shape();

   brect.graphics.beginFill("gray").rect(0, 0, 60, 30);
   button.addChild(brect);

   var btext = new createjs.Text("Start", "20px arial bold", "#ffffff");
   btext.x = 5;
   btext.y = 2;
   button.addChild(btext);

   button.x = 100;
   button.y = 50;
   screen1.addChild(button);

   var button2 = new createjs.Container();
   var brect2 = new createjs.Shape();

   brect2.graphics.beginFill("gray").rect(0, 0, 250, 30);
   button2.addChild(brect2);

   var btext2 = new createjs.Text("Go back to the title page", "20px arial bold", "#ffffff");
   btext2.x = 10;
   btext2.y = 4;
   button2.addChild(btext2);

   button2.x = 60;
   button2.y = 500;
   screen1.addChild(button2);

//------call functions -----------//

  car1();
  car2();
  car3();
  light1();

//-------functions---------///

  function car1(){

  var datacar1left = {
      images: [preload.getResult("car2")],
      frames: {width:650, height: 275, count: 9, spacing: 135, margin: 0},
      animations: {
        stopping:{
          frames: [7,6,5,5,6,7,8],
          speed:0.2
      },

        driving:8,
          
        turnleft:{
          frames: [4,3,2,1,0],
          speed: 0.1
      },
          
        leaving:0,

        signalleft: {
          frames: [8,9],
          speed: 0.2
        }
    }
  };

  var spriteSheetcar1left = new createjs.SpriteSheet(datacar1left);
  var runSpritecar1let = new createjs.Sprite(spriteSheetcar1left);

  runSpritecar1let.scaleX = 0.2; runSpritecar1let.scaleY = 0.2;

   timeline.addTween(createjs.Tween.get(runSpritecar1let)
       .call(function(){
        runSpritecar1let.gotoAndPlay("driving");
       })
       .to({x:-200, y:220}, 0)
      .to({x:400, y:220}, 2000, createjs.Ease.sineOut)
       .call(function(){
         runSpritecar1let.gotoAndPlay("turnleft");
       })
       .to({guide: {path: [400,220, 470,210, 480,200]}}, 500)
       .call(function(){
        runSpritecar1let.gotoAndPlay("leaving");
      })
       .to({x:480, y:-100}, 1000)
  );

  screen1.addChild(runSpritecar1let);

  console.log("it is working car1left1");
   }

  function car2(){
  //carsprite//
  var datacar2 = {
      images: [preload.getResult("car2")],
      frames: {width:650, height: 275, count: 9, spacing: 135, margin: 0},

      animations: {
        stopping:{
          frames: [7,6,5,5,6,7,8],
          speed:0.2
          },
          driving:8,
    }
  };

  var spriteSheetdatacar2 = new createjs.SpriteSheet(datacar2);
  var runSpritedatacar2= new createjs.Sprite(spriteSheetdatacar2);

   runSpritedatacar2.scaleX = 0.2; runSpritedatacar2.scaleY = 0.2;

   timeline.addTween(createjs.Tween.get(runSpritedatacar2)
       .call(function(){
         runSpritedatacar2.gotoAndPlay("stand");
       })
       .to({x: -200, y:200}, 0)
      .wait(2000)
       .call (function(){
         runSpritedatacar2.gotoAndPlay("driving");
       })
       .to({x: 330, y: 200}, 3000, createjs.Ease.quintIn)
       .call(function(){
         runSpritedatacar2.gotoAndPlay("stopping");
       })
        .to({x: 350, y: 200}, 300)
       .call(function(){
         runSpritedatacar2.gotoAndPlay("driving");
       })
       .wait(3500)
       .call(function(){
         runSpritedatacar2.gotoAndPlay("driving");
       })
      .to({x: 2000, y: 240}, 7000, createjs.Ease.quintIn));

      screen1.addChild(runSpritedatacar2);
 }


 function car3(){
   //carsprite//
   var datacar3 = {
    images: [preload.getResult("redcar")],
    frames: {width:612, height: 290, count: 17, spacing: 116, margin: 0},

    animations: {
       driving:{
        frames: 16,
        speed: 0.2
      },
        signalright:{
        frames:[11,16],
        speed:0.05
      },
      turnright: {
           frames: [4,3,2,1],
           speed: 0.05
         },
      leave:0

     }
   };
   var spriteSheetdatacar3 = new createjs.SpriteSheet(datacar3);
   var runSpritedatacar3= new createjs.Sprite(spriteSheetdatacar3);

    runSpritedatacar3.scaleX = 0.2; runSpritedatacar3.scaleY = 0.2;

    timeline.addTween(createjs.Tween.get(runSpritedatacar3)
        .call(function(){
          runSpritedatacar3.gotoAndPlay("driving");
        })
        .to({x:-3000, y:220}, 0)
        .wait(15000)
        .call(function(){
          runSpritedatacar3.gotoAndPlay("driving");
        })
        .to({x:400, y:220}, 8000,createjs.Ease.quintOut)
        .call(function(){
          runSpritedatacar3.gotoAndPlay("signalright");
        })
        .to({x:400, y:220})
        .wait(2000)

       .call(function(){
         runSpritedatacar3.gotoAndPlay("turnright");
       })
       .to({guide: {path: [380,220, 560,280, 600,350]}}, 1000)
       .call(function(){
         runSpritedatacar3.gotoAndPlay("leave");
       })
       .to({x:600, y:700}, 1000));



     screen1.addChild(runSpritedatacar3);

      console.log("it is working car1right");
    }

   function light1(){
     var datalight1 = {
         images: [preload.getResult("light1")],
         frames: {width:118, height: 245, count: 4, spacing: 152, margin: 0},
         animations: {
           green:0,
          yellow: {
             frames: [1,3],
             speed: 0.1
           },
           red:2
     }
   };


      var spriteSheetlight1 = new createjs.SpriteSheet(datalight1);
      var runSpritelight1 = new createjs.Sprite(spriteSheetlight1);

         runSpritelight1.scaleX = 0.4; runSpritelight1.scaleY = 0.4;
         timeline.addTween(createjs.Tween.get(runSpritelight1)


         .call(function(){
          runSpritelight1.gotoAndPlay("green");
         })
          .to({x:720, y:120},0)
          .to({x:720, y:120},3000)

         .call(function(){
          runSpritelight1.gotoAndPlay("yellow");
         })
          .to({x:720, y:120},2000)
          .call(function(){
           runSpritelight1.gotoAndPlay("red");
          })
           .to({x:720, y:120},5000)
           .call(function(){
            runSpritelight1.gotoAndPlay("green");
           })
            .to({x:720, y:120},7500)


           .call(function(){
            runSpritelight1.gotoAndPlay("yellow");
           })
             .to({x:720, y:120},2000)
            .call(function(){
            runSpritelight1.gotoAndPlay("red");
           })
            .to({x:720, y:120},2000)
            .wait(3000)
            .call(function(){
            runSpritelight1.gotoAndPlay("green");
           })
            .to({x:720, y:120},8000)
       )

         screen1.addChild(runSpritelight1);
         console.log("it is workinglight");
     }


     timeline.setPaused(true);
     button.addEventListener("click", function(event){
     timeline.gotoAndPlay(0);
    });

    button2.addEventListener("click", function(){
    stage.removeChild(screen1);
    stage.addChild(screen0);
})
  }
