/*--------------------------------------------*/
/*----------------basic setup----------------*/
/*------------------------------------------*/

var timeline2 = new createjs.Timeline( {loop: false} );
function buildScreen2(){
    screen2 = new createjs.Container();
    var bgShape2 = new createjs.Shape();
    bgShape2.graphics.beginFill("#258e22").drawRect (
      0,
      0,
      stage.canvas.width,
      stage.canvas.height
    );

    bgShape2.graphics.endFill();
    screen2.addChild(bgShape2);

/*--------------------------------------------*/
/*----------------drawing road--------------*/
/*------------------------------------------*/

    var roadShape1 = new createjs.Shape();
    roadShape1.graphics.beginFill("#959998").drawRect (
      0, 193, stage.canvas.width,193);
    roadShape1.graphics.endFill();
    screen2.addChild(roadShape1);

    var roadShape2 = new createjs.Shape();
    roadShape2.graphics.beginFill("#959998").drawRect (
      490, 0, 220,stage.canvas.height);
    roadShape2.graphics.endFill();
    screen2.addChild(roadShape2);

    var string1 = new createjs.Shape();
    string1.graphics.beginFill("#ffffff").drawRect (
      0, 289, stage.canvas.width,5);
    string1.graphics.endFill();
    screen2.addChild(string1);

    var string2 = new createjs.Shape();
    string2.graphics.beginFill("#ffffff").drawRect (
      595, 0, 5,stage.canvas.height);
    string2.graphics.endFill();
    screen2.addChild(string2);

    var roundabout = new createjs.Shape();
    roundabout.graphics.beginFill("#959998").drawCircle (
      600, 293, 220);
    roundabout.graphics.endFill();
    screen2.addChild(roundabout);

    var circle = new createjs.Shape();
    circle.graphics.beginFill("#258e22").drawCircle (
      600, 293, 100);
      circle.graphics.endFill();
    screen2.addChild(circle);

/*--------------------------------------------*/
/*------------------buttons------------------*/
/*------------------------------------------*/

//----------button3--------//

    var button3 = new createjs.Container();
    var brect3 = new createjs.Shape();

    brect3.graphics.beginFill("gray").rect(0, 0, 50, 30);
    button3.addChild(brect3);

    var btext3 = new createjs.Text("Start", "20px arial bold", "#ffffff");
    btext3.x = 5;
    btext3.y = 2;
    button3.addChild(btext3);

    button3.x = 30;
    button3.y = 400;
    screen2.addChild(button3);

  //-------button4------///

    var button4 = new createjs.Container();
    var brect4 = new createjs.Shape();

    brect4.graphics.beginFill("gray").rect(0, 0, 250, 30);
    button4.addChild(brect4);

    var btext4 = new createjs.Text("Go back to the title page", "20px arial bold", "#ffffff");
    btext4.x = 5;
    btext4.y = 2;
    button4.addChild(btext4);

    button4.x = 30;
    button4.y = 200;
    screen2.addChild(button4);

/*--------------------------------------------*/
/*---------------call function---------------*/
/*------------------------------------------*/
     car1();//red car turn left
     car2();
     bluecar1();
     bluecar2();
     car3();
     bluecar3();


/*--------------------------------------------*/
/*--------------setup function--------------*/
/*------------------------------------------*/

     function car1(){
       //carsprite//
       var datacar1 = {
           images: [preload.getResult("car2")],
          frames: {width:650, height: 275, count: 9, spacing: 135, margin: 0},
           animations: {
              driving:{
               frames: 8,
               speed: 0.2
             },

             stop:{
               frames: 8,
               speed: 0.2
           },

           turnleft: {
               frames: [4,3,2,1],
               speed: 0.02
             },
             leave: 0
         }
       };
       var spriteSheetcar1 = new createjs.SpriteSheet(datacar1);
       var runSpritecar1 = new createjs.Sprite(spriteSheetcar1);

        runSpritecar1.scaleX = 0.2; runSpritecar1.scaleY = 0.2;

        timeline2.addTween(createjs.Tween.get(runSpritecar1)
            .call(function(){
             runSpritecar1.gotoAndPlay("driving");
            })
            .to({x:-300, y:200}, 0)
           .wait(800)
            .call (function(){
              runSpritecar1.gotoAndPlay("driving");
            })
             .to({x: 250, y: 200}, 2000,createjs.Ease.circOut)
             .wait(2000)
             .call(function(){
              runSpritecar1.gotoAndPlay("driving");
            })
             .to({x: 370, y: 200}, 500)
             .call(function(){
              runSpritecar1.gotoAndPlay("turnleft");
            })
          .to({guide: {path: [370,200, 490,100, 480,70]}}, 1000)
            .call(function(){
             runSpritecar1.gotoAndPlay("leave");
           })
            .to({x:480, y:-100}, 1000)
            );
          screen2.addChild(runSpritecar1);
          }

        function bluecar1(){
              //carsprite//
              var databluecar1 = {
                  images: [preload.getResult("bluerightleft")],
                  frames: {width:570, height: 188, count: 8, spacing: 220, margin: 0},
                  animations: {
                    stand:0,
                    turnleftright:{
                      frames:[1,0,6,7],
                      speed:0.02
                    },

                    driving:0
                }
              };
              var spriteSheetbluecar1 = new createjs.SpriteSheet(databluecar1);
              var runSpritebluecar1 = new createjs.Sprite(spriteSheetbluecar1);

               runSpritebluecar1.scaleX = 0.2; runSpritebluecar1.scaleY = 0.2;

               timeline2.addTween(createjs.Tween.get(runSpritebluecar1)
                   .call(function(){
                    runSpritebluecar1.gotoAndPlay("stand");
                   })
                   .to({x:500, y:800}, 0)
                   .call (function(){
                     runSpritebluecar1.gotoAndPlay("driving");
                   })
                   .to({x: 500, y: 480}, 1000, createjs.Ease.quintOut)
                   .wait(1000)
                  .call(function(){
                     runSpritebluecar1.gotoAndPlay("turnleftright");
                   })
                   .to({guide: {path: [515,480, 270,275, 515,50]}}, 3000)
                   .call(function(){
                    runSpritebluecar1.gotoAndPlay("driving");
                  })
                  .to({x:470, y:-280}, 1000)
                );
              screen2.addChild(runSpritebluecar1);

                   }

              function car2(){
                    //carsprite//
                    var datacar2 = {
                        images: [preload.getResult("redcar")],
                        frames: {width:612, height: 290, count: 17, spacing: 116, margin: 0},
                        animations: {
                           driving:{
                            frames: 16,
                            speed: 0.2
                          },
                          turnleft: {
                            frames: [10,16,1],//,16,4,3,2,3,4,16],
                            speed: 0.015
                          },
                          leave: 16
                      }
                    };
                    var spriteSheetcar2 = new createjs.SpriteSheet(datacar2);
                    var runSpritecar2 = new createjs.Sprite(spriteSheetcar2);

                    runSpritecar2.scaleX = 0.2; runSpritecar2.scaleY = 0.2;

                     timeline2.addTween(createjs.Tween.get(runSpritecar2)
                         .call(function(){
                          runSpritecar2.gotoAndPlay("driving");
                         })
                         .to({x:-300, y:230}, 0)
                         .wait(8000)
                        .call (function(){
                           runSpritecar2.gotoAndPlay("driving");
                         })
                          .to({x: 300, y: 230}, 2000,createjs.Ease.circOut)
                          .wait(1000)

                        .call(function(){
                          runSpritecar2.gotoAndPlay("turnleft");
                        })
                        .to({guide: {path: [320,230, 575,10, 700,200]}}, 3000))
                        .call(function(){
                          runSpritecar2.gotoAndPlay("leave");
                        })
                        .to({x:2000,y:200}, 2000);

                      screen2.addChild(runSpritecar2);

                       console.log("car3 it is working");
                     }

                     function bluecar2(){
                       //carsprite//
                       var databluecar2 = {
                           images: [preload.getResult("bluecar")],
                           frames: {width:570, height: 215, count: 15, spacing: 180, margin: 0},
                           animations: {
                              driving:{
                               frames: 0,
                               speed: 0.05
                             },
                             turnrightleft: {
                               frames: [1,0,3],//,16,4,3,2,3,4,16],
                               speed: 0.012
                             },
                             leave: 16
                         }
                       };
                       var spriteSheetbluecar2 = new createjs.SpriteSheet(databluecar2);
                       var runSpritebluecar2 = new createjs.Sprite(spriteSheetbluecar2);

                        runSpritebluecar2.scaleX = 0.2; runSpritebluecar2.scaleY = 0.2;

                        timeline2.addTween(createjs.Tween.get(runSpritebluecar2)
                          .call(function(){
                            runSpritebluecar2.gotoAndPlay("driving");
                          })
                          .to({x:600, y:-100}, 0)
                          .wait(10000)
                          .call(function(){
                            runSpritebluecar2.gotoAndPlay("driving");
                            })
                            .to({x:600, y:70}, 2000)
                            .wait(2000)
                            .call(function(){
                              runSpritebluecar2.gotoAndPlay("turnrightleft");
                            })
                           .to({guide: {path: [600,70, 800,250, 600,410]}}, 4000)
                           .call(function(){
                             runSpritebluecar2.gotoAndPlay("driving");
                           })
                           .to({x:600, y:800}, 1000)
                         );

                         screen2.addChild(runSpritebluecar2);

                          console.log("car1ss it is working");
                        }

                        function bluecar3(){
                          //carsprite//
                          var databluecar3 = {
                              images: [preload.getResult("bluecar")],
                              frames: {width:570, height: 220, count: 15, spacing: 184, margin: 0},

                              animations: {
                                 driving:{
                                  frames: 13,
                                  speed: 0.05
                                },
                                turnrightleft: {
                                  frames: [4,14,8],
                                  speed: 0.015
                                },
                                leave: 13
                            }
                          };
                          var spriteSheetbluecar3 = new createjs.SpriteSheet(databluecar3);
                          var runSpritecarbluecar3 = new createjs.Sprite(spriteSheetbluecar3);

                           runSpritecarbluecar3.scaleX = 0.2; runSpritecarbluecar3.scaleY = 0.2;

                           timeline2.addTween(createjs.Tween.get(runSpritecarbluecar3)
                             .call(function(){
                               runSpritecarbluecar3.gotoAndPlay("driving");
                             })
                             .to({x:1500, y:300}, 0)
                             .wait(22000)
                             .call(function(){
                               runSpritecarbluecar3.gotoAndPlay("driving");
                             })
                             .to({x:800, y:300}, 2000)
                             .wait(3000)
                               .call(function(){
                                 runSpritecarbluecar3.gotoAndPlay("turnrightleft");
                               })
                              .to({guide: {path: [800,300, 500,500, 400,300]}}, 3000)
                              .call(function(){
                                runSpritecarbluecar3.gotoAndPlay("driving");
                              })
                              .to({x:-100, y:300}, 1000)

                            );

                            screen2.addChild(runSpritecarbluecar3);

                             console.log("car1ss it is working");
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
                                       turnleft: {
                                         frames: [10,1,0],
                                         speed: 0.015
                                       },
                                       leave: 0
                                   }
                                 };
                                 var spriteSheetcar3 = new createjs.SpriteSheet(datacar3);
                                 var runSpriteredcar3 = new createjs.Sprite(spriteSheetcar3);

                                 runSpriteredcar3.scaleX = 0.2; runSpriteredcar3.scaleY = 0.2;

                                  timeline2.addTween(createjs.Tween.get(runSpriteredcar3)
                                      .call(function(){
                                       runSpriteredcar3.gotoAndPlay("driving");
                                      })
                                      .to({x:-300, y:230}, 0)
                                      .wait(20000)
                                     .call (function(){
                                        runSpriteredcar3.gotoAndPlay("driving");
                                      })
                                       .to({x: 310, y: 230}, 2000,createjs.Ease.circOut)
                                       //.wait(1000)

                                     .call(function(){
                                      runSpriteredcar3.gotoAndPlay("turnleft");
                                     })
                                     .to({guide: {path: [320,230, 820,-100, 620,400]}}, 3000))
                                     .call(function(){
                                       runSpriteredcar3.gotoAndPlay("leave");
                                     })
                                     .to({x:600,y:1000}, 2000);

                                   screen2.addChild(runSpriteredcar3);

                                    console.log("car3 it is working");
                                  }




      timeline2.setPaused(true);
      button3.addEventListener("click", function(event){
      timeline2.gotoAndPlay(0);
     });

     button4.addEventListener("click", function(){
     stage.removeChild(screen2);
     stage.addChild(screen0);
 })
    };
