cc.Class({
    extends: cc.Component,

    properties: {
        mainPanel : cc.Node,
        cmdTouchPanel: cc.Node,
        _target: cc.Node,
    },

    onLoad: function(){
        this.cmdTouchPanel.on("touchstart",this.onTouchStart.bind(this));
        this.cmdTouchPanel.on("touchmove",this.onTouchMove.bind(this));
        this.cmdTouchPanel.on("touchend",this.onTOuchEnd.bind(this));
    },

    cmd: function (event,from,to,playerData) {
        //touch the map to move
        //touch the player and drag to draw the throw line
        //multi-touch in drag line to exit the drag line
        //drag line and release to commit the line
        this._target = ths.mainPanel.getChildByName("player#" + playerData.id);
        this.cmdTouchPanel.active = true;
        //move control
        //drag control
        //release control
        //cancel control
        
    },

    onTouchStart: function(e){
        console.log("touchStart");
    },

    onTouchMove: function(e){
        console.log("touchMove");
    },

    onTouchEnd: function(e){
        console.log("touchEnd");
    },

});