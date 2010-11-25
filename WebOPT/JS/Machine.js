var Machine = function (title, id) {
    this.Title = title;
    this.ID = id;
    this.NoticeID = id + "Info";
    //GetAnimation().AddTask(this);
}
Machine.prototype.InfoColor = "white";
Machine.prototype.InfoX = 0;
Machine.prototype.ID = 0;
Machine.prototype.NoticeID = 0;
Machine.prototype.Title = 0;
Machine.prototype.Offset = 0;
Machine.prototype.Status = 0;
Machine.prototype.Timer = 0;
Machine.prototype.StatusColor = function () {
    var status = this.Status;
    switch (status) {
        case 0:
            return "gray";
        case 1:
            return "orange";
        case 2:
            return "darkblue";
        case 3:
            return "darkred";
            break;
        default:
            break;
    }
}
Machine.prototype.drawTitle = function (ctx, canvas) {
    ctx.fillStyle = "#d1d1d1";
    ctx.font = "9pt Arial Bold";
    ctx.fillText(this.Title, 3, 15);
    ctx.fillStyle = "Black";
    ctx.fillText(this.Title, 2, 14);
}
Machine.prototype.drawWorkingAnimation = function (ctx, canvas) {
    var grd = ctx.createLinearGradient(this.Offset, 0, this.Offset + 18, 3);
    grd.addColorStop(0, this.MachineColor);
    grd.addColorStop(0.5, "white");
    grd.addColorStop(1, this.MachineColor);

    ctx.fillStyle = grd;
    ctx.fillRect(this.Offset - 10, 0, 28, canvas.height);
    if (this.Offset >= canvas.width) this.Offset = 0;
//    var canvas1 = document.getElementById(this.NoticeID);
//    var ctx1 = canvas1.getContext("2d");
//    this.drawInfoAnimation(ctx1, canvas1);

    return this.Offset += 2;
}
Machine.prototype.getInfotext = function(){
    switch (this.InfoColor)  {  
        case "white":
            return "";
        case "gold":
            return "Setting up....";
        case "darkblue":
            return "Ready...."
        case "darkred":
            return "Working...."
    }
}
Machine.prototype.drawInfoAnimation = function (ctx, canvas) {
    var text = this.getInfotext();
    if (text == "") {
        canvas.width = canvas.width;
        return;
    }
    this.InfoX++;
    var y = 0;
    var inity = 30;
    if (this.InfoX <= 5) {
        y++;
        this.drawText(ctx, canvas, y, inity - 2 * y, text);
    }
    if (this.InfoX > 5 && this.InfoX <= 10) {
        y--;
        this.drawText(ctx, canvas, y, inity - 2 * y, text);
    }
    if (this.InfoX > 10 && this.InfoX <= 15) {
        y++;
        this.drawText(ctx, canvas, y, inity - y, text);
    }
    if (this.InfoX > 15 && this.InfoX <= 20) {
        y--;
        this.drawText(ctx, canvas, y, inity - y, text);
    }
    y = 0;
    if (this.InfoX > 20 && this.InfoX <= 30) {
        y += 0.1
        ctx.fillStyle = "rgba(255,255,255," + y + ")";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    if (this.InfoX > 50) {
        this.InfoColor = "white";
        this.InfoX = 1;
    }
}
Machine.prototype.drawText = function (ctx, canvas, x, y, title) {

    canvas.width = canvas.width;
    ctx.font = "16px 'Impact' Bold";
    ctx.fillStyle = "yellow";
    ctx.fillText("!", x, y);
    ctx.fillStyle = this.InfoColor;
    ctx.font = "9px 'Arial' Bold";
    ctx.fillText(title, x+16, y);
}
Machine.prototype.drawStatus = function (ctx,canvas) {
    ctx.fillStyle = "#d1d1d1";
    ctx.beginPath();
    ctx.arc(89, 9, 8, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = this.StatusColor();
    ctx.beginPath();
    ctx.arc(89, 9, 7, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();

    var radgrad = ctx.createRadialGradient(87, 7, 1, 87, 7, 4);
    radgrad.addColorStop(0, '#F3F3F3');
    radgrad.addColorStop(0.99, this.StatusColor());
    radgrad.addColorStop(1, 'Transparent');

    ctx.fillStyle = radgrad;
    ctx.beginPath();
    ctx.arc(87, 7, 4, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
    //ctx.fillRect(80, 0, 100, 20);
}
Machine.prototype.MachineColor = "gray"
Machine.prototype.DoWork = function () {
    var canvas = document.getElementById(this.ID);
    canvas.width = canvas.width;
    var ctx = canvas.getContext("2d");
    if (this.Status == 3) this.drawWorkingAnimation(ctx, canvas);
    this.drawStatus(ctx, canvas);
    this.drawTitle(ctx, canvas);
}
var RedMachine = function (title, id) {
    this.Title = title;
    this.ID = id;
    this.MachineColor = "pink";
    this.NoticeID = id + "Info";
    GetAnimation().AddTask(this);
}
RedMachine.prototype = Machine.prototype;

var GreenMachine = function (title, id) {
    this.Title = title;
    this.ID = id;
    this.MachineColor = "green";
    this.NoticeID = id + "Info";
    GetAnimation().AddTask(this);
}
GreenMachine.prototype = Machine.prototype;

var YellowMachine = function (title, id) {
    this.Title = title;
    this.ID = id;
    this.MachineColor = "gold";
    this.NoticeID = id + "Info";
    GetAnimation().AddTask(this);
}
YellowMachine.prototype = Machine.prototype;

