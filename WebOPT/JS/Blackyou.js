var Blackyou = function(id){
    this.ID = id;
    this.CloseBlack();
    this.Timeline = 0;
    var canvas = document.getElementById(this.ID);
    var blackyoudiv = canvas.parentNode;
    blackyoudiv.style.left = LeftBorder;
    blackyoudiv.style.top = 0;
    blackyoudiv.style.backgroundColor = "black";
    GetAnimation().AddTask(this);
}
Blackyou.prototype.Timeline = 0;
Blackyou.prototype.TimelineMax = 50;
Blackyou.prototype.ID="";
Blackyou.prototype.Status="Stop";
Blackyou.prototype.BlackTimes = 0;
Blackyou.prototype.CloseBlack = function(){
    var canvas = document.getElementById(this.ID);
    var blackyoudiv = canvas.parentNode;
    blackyoudiv.style.visibility = "hidden";
    this.Status = "Stop";
    this.Timeline = 0;
    if(this.BlackTimes>0) this.BlackTimes--;
    document.body.style.backgroundColor = "white";
}
Blackyou.prototype.OpenBlack = function(){
    var canvas = document.getElementById(this.ID);
    var blackyoudiv = canvas.parentNode;
    blackyoudiv.style.visibility = "visible";
    this.Status = "Run";
    this.BlackTimes++;
    document.body.style.backgroundColor = "black";
}
Blackyou.prototype.DoWork = function(){
    if(this.Status == "Stop"){return;}
    this.Timeline ++;
    if(this.Timeline==50) this.CloseBlack();
    var canvas = document.getElementById(this.ID);
    var ctx = canvas.getContext("2d");
    canvas.width = canvas.width;
    var adjustoffset = 400;
    var offsetX = 0;
    var offsetY = 0;
    ctx.strokeStyle = "lightgray";
    ctx.lineWidth = 3;

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(100+adjustoffset,100,100,Math.PI*2,false);
    ctx.arc(500+adjustoffset,100,100,Math.PI*2,false);
    ctx.fill();
    ctx.closePath;
    if(this.Timeline>=12 && this.Timeline<24){
        offsetX = -30;
    }
    if(this.Timeline>=24 && this.Timeline<36){
        offsetX = 30;
    }
    if(this.Timeline>=36) {
        offsetY = 20;
        ctx.beginPath();
        ctx.moveTo(80+adjustoffset,210);
        ctx.lineTo(80+adjustoffset,470);
        ctx.moveTo(110+adjustoffset,220);
        ctx.lineTo(110+adjustoffset,480);
        ctx.moveTo(140+adjustoffset,208);
        ctx.lineTo(140+adjustoffset,476);
        ctx.moveTo(170+adjustoffset,216);
        ctx.lineTo(170+adjustoffset,483);
        ctx.stroke();
    }
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(100+offsetX+adjustoffset,95+offsetY,80,Math.PI*2,false);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(500+offsetX+adjustoffset,95+offsetY,80,Math.PI*2,false);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(300+adjustoffset,475,40,Math.PI*2,false);
    ctx.stroke();
    ctx.closePath();
    ctx.moveTo(300+adjustoffset,100);
    ctx.lineTo(275+adjustoffset,397);
    ctx.lineTo(300+adjustoffset,400);
    ctx.stroke();
}