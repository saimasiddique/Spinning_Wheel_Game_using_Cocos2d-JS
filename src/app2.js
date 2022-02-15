var INITIALIZED_2 = false;
var HelloWorldLayer2 = cc.Layer.extend({
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

        this.sprite_canv = new cc.Sprite(res.Garden_background);
        this.sprite_canv.attr({
            x: size.width / 2,
            y: size.height / 2,
            // scale: 1.2,
            // rotation: 180
        });
        this.addChild(this.sprite_canv, 0);




        // Spinnig Wheel /

        var menuItem1 = new cc.MenuItemFont("Pop", pop);
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

        this.sprite1.runAction(
            cc.sequence(
                cc.rotateTo(7, 2500).easing(cc.easeOut(2)),

            )
        );


        // spinning music 

        cc.audioEngine.playEffect(res.Wheel_Sound);


        this.sprite2 = new cc.Sprite(res.Border_light);
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
            // rotation: 10
        });
        this.addChild(this.sprite3, 0);


        this.sprite3.runAction(

            cc.sequence(
                cc.rotateTo(2, -10),
                cc.rotateTo(2, -5),
                cc.rotateTo(1, 0)
            )
        ).speed(2);






        return true;
    }


});

var pop = function () {
    INITIALIZED_2 = false;
    cc.director.popScene();
};

var HelloWorldScene2 = cc.Scene.extend({
    onEnter: function () {
        this._super();
        if (INITIALIZED_2 == false) {
            INITIALIZED_2 = true;
            var layer = new HelloWorldLayer2();
            this.addChild(layer);
        }
    }
});