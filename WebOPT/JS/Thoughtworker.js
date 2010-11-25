var ZhangQunhui;
var ShowFrontFaceX = 637;
var LeftBarX = 3;
var RightBarX = 1080;
var FrontFaceTimeLimit = 100;
var BarTimeLimit = 200;
var EyeMoveOffset = 3;
var DropHeight = 150;
var GetZhangQunhui = function () {
    if (ZhangQunhui == null) ZhangQunhui = new Thoughtworker();
    return ZhangQunhui;
}
var Thoughtworker = function () {
    GetAnimation().AddTask(this);
}
//Thoughtworker.prototype.Status = "Walk";
Thoughtworker.prototype.Position = "normal";
Thoughtworker.prototype.Left = 0;
Thoughtworker.prototype.Top = 0;
Thoughtworker.prototype.ID = "funnytw";
Thoughtworker.prototype.IdleTime = 0;
Thoughtworker.prototype.XOffset = 0;
Thoughtworker.prototype.YOffset = 0;
Thoughtworker.prototype.Direction = "left";//"right"
Thoughtworker.prototype.Blink = false;
Thoughtworker.prototype.BlinkStep = 0;
Thoughtworker.prototype.FrontFaceTime = 0;
Thoughtworker.prototype.BorderTime = 0;
Thoughtworker.prototype.DoWork = function () {
    this.UpdateBlinkStep();
    this.UpdateDirection();
    var canvas = document.getElementById(this.ID);
    canvas.width = canvas.width;
    
    this.RenderFace();
    this.RenerBasicTW();
    this.RenderMouth();
    this.RenderFoot();
    //if(this.Position=="normal") {
        var div = document.getElementById(this.ID).parentNode;
        div.style.left = this.XOffset;
    //}
}
Thoughtworker.prototype.UpdateBlinkStep = function() {
    this.BlinkStep++;
    if (this.BlinkStep > 30) {
        this.Blink = true;
    }
    if (this.BlinkStep >31) {
       this.Blink = false;
       this.BlinkStep = 0;
    }
}
Thoughtworker.prototype.UpdateDirection = function() {
    
    if(this.FrontFaceTime>0 && this.FrontFaceTime<FrontFaceTimeLimit) {
        this.FrontFaceTime ++;
        return;
    }
    if(this.BorderTime>0 && this.BorderTime<BarTimeLimit) {
        this.BorderTime ++;
        return;
    }
    this.BorderTime = 0;
    this.FrontFaceTime = 0;
    
    if(this.XOffset<LeftBorder) this.XOffset = LeftBorder+ShowFrontFaceX;
    if (this.Direction == "left") {
        if ((this.XOffset-LeftBorder)<=RightBarX) {
            this.XOffset += 2;
        }
        else {
            this.Direction = "right";
            this.XOffset -= 2;
        }
    }
    else {
        if (this.XOffset > LeftBorder+2) {
            this.XOffset -= 2;
        }
        else {
            this.Direction = "left";
            this.XOffset += 2;
        }
    }
    if((this.XOffset - LeftBorder)<=(ShowFrontFaceX+2) && (this.XOffset - LeftBorder)>=ShowFrontFaceX) {
        this.FrontFaceTime = 1;
    }
    this.Position = "normal";
    if((this.XOffset - LeftBorder)<LeftBarX) {this.Position="left"; this.BorderTime =1;}
    if ((this.XOffset-LeftBorder)>RightBarX) {this.Position="right";this.BorderTime =1;}
}

Thoughtworker.prototype.RenerBasicTW = function () {
    var canvas = document.getElementById(this.ID);
    var ctx = canvas.getContext("2d");
    var offset = 0;
    var canvas = document.getElementById(this.ID);
    var div = canvas.parentNode;
    
    if(this.BorderTime==56) offset = 20;
    if(this.BorderTime==57) offset = 40;
    if(this.BorderTime>=58 && this.BorderTime<80) return;
    if(this.BorderTime==81) div.style.top = 500;
    if(this.BorderTime==82) div.style.top = 535;
    if(this.BorderTime==120) {
        canvas.style.height = "90pt";
        div.style.top = 545;
    }
    if(this.BorderTime==121) {
        canvas.style.height = "80pt";
        div.style.top = 555;
    }
    if(this.BorderTime==122) {
        canvas.style.height = "70pt";
        div.style.top = 565;
    }
    if(this.BorderTime==123) {
        canvas.style.height = "60pt";
        div.style.top = 575;
    }
    if(this.BorderTime==130) {
        canvas.style.height = "80pt";
        div.style.top = 555;
    }
    if(this.BorderTime==131) {
        canvas.style.height = "100pt";
        div.style.top = 535;
    }
    
    if(this.BorderTime==132) offset = -20;
    if(this.BorderTime==133) offset = -40;
    if(this.BorderTime==134) div.style.top = 500;
    if(this.BorderTime==135) div.style.top = 450;
    if(this.BorderTime==136) div.style.top = 407;
    if(this.BorderTime==137) offset = -40;
    if(this.BorderTime==138) offset = -20;
    ctx.fillStyle = "black";
    ctx.font = "50pt 'Arial'";
    ctx.fillText("T", 5, 50+offset);
    ctx.font = "17pt 'Arial' bold";
    ctx.fillText("houghtworker",50, 50+offset);
}
Thoughtworker.prototype.RenderFace = function () {
    if(this.Position=="normal"){
        if(this.FrontFaceTime>0) this.RenderFrontFace();
        else this.RenderSideFace();
    }
    else {
        this.RenderPanicFace();
    }
}
Thoughtworker.prototype.RenderPanicFace = function() {
    var dropOffsetY = 0;
    var angry = false;
    var canvas = document.getElementById(this.ID);
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = "gray";
    
    if(this.BorderTime==83) dropOffsetY = -10;
    if(this.BorderTime==84) dropOffsetY = -5;
    if(this.BorderTime>=100 && this.BorderTime<140) angry = true;
    
    this.RenderFrontEyeBrow(dropOffsetY);
    if(this.BorderTime>=10 && this.BorderTime<25) this.RenderFrontEyes(0-EyeMoveOffset,0,dropOffsetY,angry);
    if(this.BorderTime>=25 && this.BorderTime<40) this.RenderFrontEyes(EyeMoveOffset,0,dropOffsetY,angry);
    if(this.BorderTime>=40 && this.BorderTime<83){
        this.RenderFrontEyes(0,EyeMoveOffset,dropOffsetY,angry);
        ctx.moveTo(5,35);
        ctx.lineTo(5,60);
        ctx.stroke();    
        ctx.moveTo(8,37);
        ctx.lineTo(8,62);
        ctx.stroke();
        ctx.moveTo(11,35);
        ctx.lineTo(11,60);
        ctx.stroke();
        ctx.moveTo(14,38);
        ctx.lineTo(14,63);
        ctx.stroke();
    }
    if(this.BorderTime>=83 && this.BorderTime<100){
        this.RenderFrontEyes(0,0-EyeMoveOffset,0,angry);
    }
    if(this.BorderTime>=100 && this.BorderTime<131){
        this.RenderFrontEyes(0,0,0,angry);
    }
    if(this.BorderTime>=133 && this.BorderTime<=138){
        ctx.moveTo(15,35);
        ctx.lineTo(15,60);
        ctx.stroke();    
        ctx.moveTo(18,37);
        ctx.lineTo(18,62);
        ctx.stroke();
        ctx.moveTo(21,35);
        ctx.lineTo(21,60);
        ctx.stroke();
        ctx.moveTo(24,38);
        ctx.lineTo(24,63);
        ctx.stroke();
    }
    if(this.BorderTime>140 || this.BorderTime<10) this.RenderFrontEyes(0,0,dropOffsetY,angry);
    
}
Thoughtworker.prototype.RenderSideFace = function() {
    var canvas = document.getElementById(this.ID);
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
    if(this.Direction=="left") {
        ctx.lineWidth = 1;
        ctx.strokeStyle = "gray";
        ctx.beginPath();
        ctx.moveTo(31,21);
        ctx.lineTo(41,21);
        ctx.moveTo(31,26);
        ctx.lineTo(41,26);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(31,13);
        ctx.lineTo(41,20);
        ctx.lineTo(31,12);
        ctx.stroke();
        ctx.closePath();
        
        ctx.beginPath();
        ctx.arc(36, 24, 3, 0, Math.PI * 2, false);
        ctx.fill();    
        
        ctx.lineWidth = 2;
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(42,13);
        ctx.lineTo(46,33);
        ctx.lineTo(40,33);
        ctx.stroke();
        ctx.closePath();
        
        ctx.beginPath();
        ctx.rect(31,36,12,6);
        ctx.stroke();
        ctx.closePath();
        
        //this.RenderWind(0);
        
    }
    else{
        ctx.lineWidth = 1;
        ctx.strokeStyle = "gray";
        ctx.beginPath();
        ctx.moveTo(10,21);
        ctx.lineTo(20,21);
        ctx.moveTo(10,26);
        ctx.lineTo(20,26);
        ctx.stroke();
        ctx.closePath();
        
        ctx.beginPath();
        ctx.moveTo(20,13);
        ctx.lineTo(10,20);
        ctx.lineTo(20,12);
        ctx.stroke();
        ctx.closePath();
        
        ctx.beginPath();
        ctx.arc(15, 24, 3, 0, Math.PI * 2, false);
        ctx.fill();
        
        ctx.lineWidth = 2;
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(9,13);
        ctx.lineTo(5,33);
        ctx.lineTo(11,33);
        ctx.stroke();
        ctx.closePath();
        
        ctx.beginPath();
        ctx.rect(7,36,12,6);
        ctx.stroke();
        ctx.closePath();
    }
}
Thoughtworker.prototype.RenderFrontFace = function () {
    this.RenderFrontEyeBrow(0,false);
    this.RenderFrontEyes(0,0,0,false);
}
Thoughtworker.prototype.RenderFrontEyes = function(panicOffsetX,panicOffsetY,dropOffsetY,angry){
    this.RenderFrontEye("left",panicOffsetX,panicOffsetY,dropOffsetY,angry);
    this.RenderFrontEye("right",panicOffsetX,panicOffsetY,dropOffsetY,angry);
}

Thoughtworker.prototype.RenderFrontEye = function (leftorright,panicOffsetX,panicOffsetY,dropOffsetY,angry) {
    var canvas = document.getElementById(this.ID);
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.strokeStyle = "black";
    var offset = 0;
    if (leftorright == "right") offset = 32;

    ctx.fillStyle = "black";
    if (this.Blink) {
	    ctx.moveTo(3+offset, 25+dropOffsetY);
    	ctx.lineTo(17+offset, 25+dropOffsetY);
        ctx.stroke();
    	return;        
    }
    if(angry){
        ctx.lineWidth = 3;
        ctx.beginPath();
        if(leftorright == "right"){
            ctx.moveTo(17+offset, 25+dropOffsetY);
        	ctx.lineTo(3+offset, 33+dropOffsetY);
        	ctx.lineTo(14+offset, 25+dropOffsetY)
            ctx.stroke();
            ctx.closePath();
        }
        else {
            ctx.moveTo(3+offset, 25+dropOffsetY);
        	ctx.lineTo(17+offset, 33+dropOffsetY);
        	ctx.lineTo(6+offset, 25+dropOffsetY);
            ctx.stroke();
            ctx.closePath();    
        }
        
    }
    else{
        ctx.beginPath();
        ctx.arc(9 + offset, 25, 9, 0+dropOffsetY, Math.PI * 2, false);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(9 + offset+panicOffsetX, 25+panicOffsetY+dropOffsetY, 6, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fill();

        var radgrad = ctx.createRadialGradient(6 + offset+panicOffsetX, 25+panicOffsetY+dropOffsetY, 
            1, 6 + offset+panicOffsetX, 25+panicOffsetY+dropOffsetY, 5);
        radgrad.addColorStop(0, '#F3F3F3');
        radgrad.addColorStop(0.9, "black");
        radgrad.addColorStop(1, 'Transparent');

        ctx.fillStyle = radgrad;
        ctx.beginPath();
        ctx.arc(11 + offset+panicOffsetX, 23+panicOffsetY+dropOffsetY, 3, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fill();    
    }
    
}
Thoughtworker.prototype.RenderMouth = function(){
    if(this.Position=="normal"){
        if(this.FrontFaceTime>0) this.RenderFrontMouth();
        else this.RenderSideMouth();
    }
    else {
        this.RenderPanicMouth();
    }
}
Thoughtworker.prototype.RenderPanicMouth = function() {
    var canvas = document.getElementById(this.ID);
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.lineWidth = 2;
    if(this.BorderTime>=10 && this.BorderTime<100){
        var canvas = document.getElementById(this.ID);
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(26, 52, 8, Math.PI * 2, false);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }
    else if(this.BorderTime>=100 && this.BorderTime<131){
        ctx.beginPath();
        ctx.rect(15, 40, 21,5);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.rect(15, 45, 21, 10);
        ctx.fill();
        ctx.stroke();
        ctx.lineWidth = 1;
        ctx.moveTo(15,50);
        ctx.lineTo(37,50);
        ctx.stroke();
        ctx.moveTo(22,45);
        ctx.lineTo(22,55);
        ctx.stroke();
        ctx.moveTo(29,45);
        ctx.lineTo(29,55);
        ctx.stroke();
        
        ctx.closePath();
    }
    else this.RenderFrontMouth();
}
Thoughtworker.prototype.RenderSideMouth = function(){
}
Thoughtworker.prototype.RenderFrontMouth = function(){
    var canvas = document.getElementById(this.ID);
    var ctx = canvas.getContext("2d");
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(26, 12, 38, Math.PI * 0.3, Math.PI * 0.7, false);
    ctx.stroke();
    ctx.closePath();
}
Thoughtworker.prototype.RenderFoot = function(){
    if(this.Position=="normal"){
        if(this.FrontFaceTime>0) this.RenderFrontFoot();
        else this.RenderSideFoot();
    }
    if(this.BorderTime>138) this.RenderFrontFoot();
}
Thoughtworker.prototype.FootStep = 0;
Thoughtworker.prototype.RenderSideFoot = function(){
    var canvas = document.getElementById(this.ID);
    var ctx = canvas.getContext("2d");
    var speed =2;
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    var offset = 0;
    if(this.FootStep<speed) offset = 0;
    else offset = 2;
    this.FootStep ++;
    if(this.FootStep>speed*2) this.FootStep = 0;
    ctx.beginPath();
    ctx.arc(10+offset, 58+offset/2, 7,Math.PI*2,false);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(23+offset, 58+offset/2, 7,Math.PI*2,false);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(36+offset, 58+offset/2, 7,Math.PI*2,false);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(49+offset, 58+offset/2, 7,Math.PI*2,false);
    ctx.stroke();
    ctx.closePath();
    
    ctx.strokeStyle = "lightgray";
    ctx.beginPath();
    ctx.moveTo(10-offset, 56-offset/2);
    ctx.lineTo(50-offset, 56-offset/2);
    ctx.moveTo(20-offset, 59-offset/2);
    ctx.lineTo(55-offset, 59-offset/2);
    ctx.moveTo(12-offset, 62-offset/2);
    ctx.lineTo(52-offset, 62-offset/2);
    ctx.stroke();

}
Thoughtworker.prototype.LeftStep1 = function(ctx){
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.moveTo(15,65);
    ctx.lineTo(27,77)
    ctx.arc(21,71,8,Math.PI*0.1,Math.PI*1.2,true);
    ctx.lineTo(21,60);
    //ctx.lineTo(20,70);
    //ctx.lineTo(26,40);
    //ctx.lineTo(36,70);
    //ctx.arc(44,70,8,Math.PI*1,false);
    //ctx.lineTo(36,70);
    ctx.stroke();
    ctx.closePath();
}
Thoughtworker.prototype.RenderFrontFoot = function(){
    var canvas = document.getElementById(this.ID);
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.lineWidth = 1;
    ctx.moveTo(16,70);
    ctx.arc(8,70,8,Math.PI*1,false);
    ctx.lineTo(16,70);
    ctx.lineTo(26,40);
    ctx.lineTo(36,70);
    ctx.arc(44,70,8,Math.PI*1,false);
    ctx.lineTo(36,70);
    ctx.stroke();
    ctx.closePath();
}
Thoughtworker.prototype.RenderFrontEyeBrow = function(dropOffsetY,angry){
    var canvas = document.getElementById(this.ID);
    var ctx = canvas.getContext("2d");
    if(angry){
        ctx.moveTo(3, 11+dropOffsetY);
        ctx.lineTo(17, 18+dropOffsetY);
        ctx.lineTo(3, 18+dropOffsetY);
        ctx.stroke();
        ctx.moveTo(33, 18+dropOffsetY);
        ctx.lineTo(47, 11+dropOffsetY);
        ctx.lineTo(47, 18+dropOffsetY);
        ctx.lineTo(33, 18+dropOffsetY);
    }
    else{
        ctx.moveTo(3, 11+dropOffsetY);
        ctx.lineTo(17, 13+dropOffsetY);
        ctx.lineTo(3, 13+dropOffsetY);
        ctx.stroke();
        ctx.moveTo(33, 13+dropOffsetY);
        ctx.lineTo(47, 11+dropOffsetY);
        ctx.lineTo(47, 13+dropOffsetY);
        ctx.lineTo(33, 13+dropOffsetY);    
    }
    
    ctx.stroke();
}
//var Idle = function () {
    
//}
