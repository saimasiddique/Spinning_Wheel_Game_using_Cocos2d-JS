var INITIALIZED = false;

var HelloWorldLayer = cc.Layer.extend({
    sprite: null,
    ctor: function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        // add a "close" icon to exit the progress.it's an autorelease object
        // var closeItem = new cc.MenuItemImage(
        //     res.CloseNormal_png,
        //     res.CloseSelected_png,
        //     function () {
        //         cc.log("Menu is clicked!");
        //     }, this);
        // closeItem.attr({
        //     x: size.width - 20,
        //     y: 20,
        //     anchorX: 0.5,
        //     anchorY: 0.5
        // });

        // var menu = new cc.Menu(closeItem);
        // menu.x = 0;
        // menu.y = 0;
        // this.addChild(menu, 1);

        // /////////////////////////////
        // // 3. add your codes below...
        // // add a label shows "Hello World"
        // // create and initialize a label
        //var helloLabel = new cc.LabelTTF("Hello World", "Arial", 38);
        // // position the label on the center of the screen
        // helloLabel.x = size.width / 2;
        // helloLabel.y = 0;
        // // add the label as a child to this layer
        // this.addChild(helloLabel, 5);

        // add "HelloWorld" splash screen"


        // this.sprite.runAction(
        //     cc.sequence(
        //         cc.rotateTo(2, 0),
        //         cc.scaleTo(2, 1, 1)
        //     )
        // );
        // helloLabel.runAction(
        //     cc.spawn(
        //         cc.moveBy(2.5, cc.p(0, size.height - 40)),
        //         cc.tintTo(2.5, 255, 125, 0)
        //     )
        // );



        this.sprite_canv = new cc.Sprite(res.Garden_background);
        this.sprite_canv.attr({
            x: size.width / 2,
            y: size.height / 2,
            // scaleY: 1.2,
            // rotation: 180
        });
        this.addChild(this.sprite_canv, 0);

        var helloLabel = new cc.LabelTTF("Let's Spin to Win !", "Calibri", 30);
        helloLabel.x = size.width / 2;
        helloLabel.y = 12;
        // add the label as a child to this layer
        this.addChild(helloLabel, 5);

        //add "HelloWorld" splash screen"



        helloLabel.runAction(
            cc.spawn(
                cc.moveBy(2.5, cc.p(0, size.height - 40)),
                cc.tintTo(2.5, 255, 120, 0)
            )
        ).speed(2);


        // Spinnig Wheel /

        // this.sprite_coins = new cc.Sprite(res.Coin_piles);
        // this.sprite_coins.attr({
        //     x: size.width / 2,
        //     y: size.height / 2,
        //     scale: 0.7,

        // });
        // this.addChild(this.sprite_coins, 0);

        var menuItem1 = new cc.MenuItemFont("Push", play);
        var menu = new cc.Menu(menuItem1);
        menu.alignItemsVertically();
        this.addChild(menu);


        this.sprite1 = new cc.Sprite(res.Spin_circle)
        this.sprite1.attr({
            x: size.width / 2,
            y: size.height / 2,
            anchorX: 0.5,
            anchorY: 0.5,
            scale: 0.6,

        });
        this.addChild(this.sprite1, 0);

        // Background Music
        // cc.audioEngine.playMusic(res.Bg_music, false, 500);
        // cc.audioEngine.setMusicVolume(0.5);


        this.sprite2 = new cc.Sprite(res.Border);
        this.sprite2.attr({
            x: size.width / 2,
            y: size.height / 1.6,
            scale: 0.6,

        });
        this.addChild(this.sprite2, 0);



        this.sprite3 = new cc.Sprite(res.Niddle);
        this.sprite3.attr({
            x: size.width / 2,
            y: size.height - 90,
            scale: 0.6,

        });
        this.addChild(this.sprite3, 0);

        if (cc.sys.capabilities.hasOwnProperty('mouse')) {
            cc.eventManager.addListener(
                {
                    event: cc.EventListener.MOUSE,

                    onMouseDown: function (event) {
                        if (event.getButton() == cc.EventMouse.BUTTON_LEFT) {
                            cc.log("Left mmouse button pressed at " + event.getLocationX());
                        }
                    },

                    onMouseUp: function (event) {
                        if (event.getButton() == cc.EventMouse.BUTTON_LEFT) {
                            cc.log("Left mouse button released at " + event.getLocationX());
                        }
                    },

                    onMouseMove: function (event) {
                        cc.log("Mouse Moved: " + event.getLocationX());
                    },

                    onMouseScroll: function (event) {
                        cc.log("Scroll: " + event.getLocationX());
                    }
                }, this);
        }


        return true;



    }



});

var play = function () {
    var scene = new HelloWorldScene2();
    cc.director.pushScene(scene);
}

var HelloWorldScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        if (INITIALIZED == false) {
            INITIALIZED = true;
            var layer = new HelloWorldLayer();
            this.addChild(layer);
        }
    }
});

