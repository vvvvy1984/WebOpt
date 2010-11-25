
var RenderPipe = function (id) {
    var canvas = document.getElementById(id);
    canvas.width = canvas.width;
    var ctx = canvas.getContext("2d");
    var mywidth = 8;
    var grd = ctx.createLinearGradient(0, 0, 0, mywidth);
    grd.addColorStop(0, "gray");
    grd.addColorStop(0.5, "white");
    grd.addColorStop(1, "gray");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, canvas.width, mywidth);

    grd = ctx.createLinearGradient(0, canvas.height-mywidth, 0, canvas.height);
    grd.addColorStop(0, "gray");
    grd.addColorStop(0.5, "white");
    grd.addColorStop(1, "gray");
    ctx.fillStyle = grd;
    ctx.fillRect(0, canvas.height - mywidth, canvas.width, canvas.height);

    grd = ctx.createLinearGradient(0, 0, mywidth,0);
    grd.addColorStop(0, "gray");
    grd.addColorStop(0.5, "white");
    grd.addColorStop(1, "gray");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, mywidth, canvas.height);

    grd = ctx.createLinearGradient(canvas.width-mywidth, 0, canvas.width, 0);
    grd.addColorStop(0, "gray");
    grd.addColorStop(0.5, "white");
    grd.addColorStop(1, "gray");
    ctx.fillStyle = grd;
    ctx.fillRect(canvas.width - mywidth, 0, mywidth, canvas.height);
}
var RenderPrivateWindow = function (title, color, id) {
    var canvas = document.getElementById(id);
    canvas.width = canvas.width;
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#d1d1d1";
    ctx.beginPath();
    ctx.arc(8, 9, 8, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(8, 9, 7, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();

    var radgrad = ctx.createRadialGradient(6, 7, 1, 6, 7, 4);
    radgrad.addColorStop(0, '#F3F3F3');
    radgrad.addColorStop(0.99, color);
    radgrad.addColorStop(1, 'Transparent');

    ctx.fillStyle = radgrad;
    ctx.beginPath();
    ctx.arc(6, 7, 4, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "#d1d1d1";
    ctx.font = "9pt Arial Bold";
    ctx.fillText(title, 23, 15);
    ctx.fillStyle = "Black";
    ctx.fillText(title, 22, 14);
}
var RenderPBase = function (title,color, id) {
    var canvas = document.getElementById(id);
    canvas.width = canvas.width;
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "#E3E3E3";
    ctx.beginPath();
    ctx.arc(17, 17, 14, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(15, 15, 14, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();

    var radgrad = ctx.createRadialGradient(11, 11, 2, 11, 11, 8);
    radgrad.addColorStop(0, 'white');
    radgrad.addColorStop(0.99, color);
    radgrad.addColorStop(1, 'Transparent');

    ctx.fillStyle = radgrad;
    ctx.beginPath();
    ctx.arc(11, 11, 8, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
    //ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = "12pt Arial Bold";
    ctx.fillStyle = "lightgray";
    ctx.fillText(title, 15, 28)
    ctx.fillText(title, 17, 30)
    ctx.fillText(title, 17, 28)
    ctx.fillStyle = color;
    ctx.fillText(title, 16, 29)
}
var RenderP = function (id) {
    RenderPBase("P", "darkgreen", id);
}
var RenderP2 = function (id) {
    RenderPBase("P2","darkblue", id);
}
var RenderP1 = function (id) {
    RenderPBase("P1","orange", id);
}
var RenderArrow = function (id) {
    var canvas = document.getElementById(id);
    canvas.width = canvas.width;
    var ctx = canvas.getContext("2d");
    grd = ctx.createLinearGradient(8, 0, 8, 70);
    grd.addColorStop(0, "white");
    grd.addColorStop(1, "Orange");
    ctx.fillStyle = grd;
    ctx.fillRect(8, 0, 20, 70);

    ctx.fillStyle = "Orange";
    ctx.beginPath();
    ctx.moveTo(0, 70); 
    ctx.lineTo(36, 70);
    ctx.lineTo(18, 100);
    ctx.lineTo(0, 70);
    ctx.fill();
    ctx.closePath();
}
var RenderStatusIcon = function (color, id) {
    var canvas = document.getElementById(id);
    canvas.width = canvas.width;
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "#E3E3E3";
    ctx.beginPath();
    ctx.arc(12, 12, 7, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(10,10,7,0,Math.PI*2,false);
    ctx.closePath();
    ctx.fill();

    var radgrad = ctx.createRadialGradient(8, 8, 1, 8, 8, 4);
    radgrad.addColorStop(0, '#F3F3F3');
    radgrad.addColorStop(0.99, color);
    radgrad.addColorStop(1, 'Transparent');

    ctx.fillStyle = radgrad;
    ctx.beginPath();
    ctx.arc(8, 8, 4, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
}
var RenderNotReadyIcon = function (id) {
    RenderStatusIcon("gray",id);
}
var RenderSetupIcon = function (id) {
    RenderStatusIcon("darkorange", id);
}
var RenderReadyIcon = function (id) {
    RenderStatusIcon("darkblue", id);
}
var RenderWorkingIcon = function (id) {
    RenderStatusIcon("darkred", id);
}
var RenderMoneyMileStone = function (ctx, x, y, color, text, textcolor) {
    x = x - 12;
    y = y - 12;
    ctx.fillStyle = "#d1d1d1";
    ctx.beginPath();
    ctx.arc(9 + x, 9 + y, 8, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(9 + x, 9 + y, 7, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "white";
    ctx.font = "9pt Impact";
    ctx.fillText("$", 6 + x, 14 + y);
    ctx.fillStyle = textcolor;
    ctx.fillText(text, 18 + x, 14 + y)
}
//var RenderMoneyIcon = function (ctx, x, y) {
//    RenderMoneyMileStone(ctx, x, y, "darkred", "$","white");
//}
var RenderMileStonePoint = function (canvas, ctx, trace) {
    var lastX = 10;
    var lastY = trace[0];
    for (var i = 1; i < trace.length - 1; i++) {
        var oldy = lastY;
        lastY = trace[i];
        var nexty = trace[i + 1];
        lastX += Step;

        if (lastY > oldy && lastY > nexty) RenderMoneyMileStone(ctx, lastX, canvas.height-lastY/3, "red", lastY*10,"black");
        if (lastY < oldy && lastY < nexty) RenderMoneyMileStone(ctx, lastX, canvas.height - lastY / 3, "darkgreen", lastY*10,"black");
    }
}
var Step = 5;
var RenderMoneyInitTrace = function (id, trace, iconid) {
    var canvas = document.getElementById(id);
    var ctx = canvas.getContext("2d");
    RenderMoneyDashboard(id);
    var lastX = 10;
    var lastY = canvas.height - trace[0] / 3;
    
    ctx.beginPath();
    ctx.moveTo(lastX, 50);

    RenderMoneyMileStone(ctx, lastX, lastY, "darkgreen", "");
    ctx.fillStyle = "red";
    for (var i = 0; i < trace.length; i++) {
        lastY = canvas.height - trace[i] / 3;
        ctx.lineTo(lastX, lastY);
        lastX += Step;
    }
    ctx.stroke();
    ctx.closePath();

    RenderMileStonePoint(canvas, ctx, trace);
    //RenderMoneyIcon(ctx, lastX, lastY);
    RenderMoneyMileStone(ctx, lastX, lastY, "darkred",  trace[trace.length - 1] * 10, "darkblue"); 
    //    var icon = document.getElementById(iconid);
    //    icon.style.left = lastX;
    //    icon.style.top = trace[trace.length - 1];
}
var RenderMoneyDashboard = function (id) {
    var canvas = document.getElementById(id);
    canvas.width = canvas.width;
    var ctx = canvas.getContext("2d");
    var grd = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    grd.addColorStop(0, "Snow");
    grd.addColorStop(1, "Seashell");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
var RenderBanner = function (id) {
    var canvas = document.getElementById(id);
    var ctx = canvas.getContext("2d");
    ctx.font = "16pt Arial Bold";
    ctx.fillStyle = "Gray";
    ctx.fillText("Thoughtworks", 10, 18)

    ctx.fillStyle = "Black";
    ctx.font = "10pt Arial Bold";
    ctx.fillText("Thoughtworks Competition Web Presentation", 80, 36);

    var grd = ctx.createLinearGradient(10, 22, 500, 2);
    grd.addColorStop(0, "Orange");
    grd.addColorStop(1, "#FFFFFF");
    ctx.fillStyle = grd;
    ctx.fillRect(10, 22, 500, 2);

    var title = "Optimized Production Technology";
    ctx.fillStyle = "#F1F1F1";
    ctx.font = "22pt Impact";
    ctx.fillText(title, 410, 24);

    ctx.fillStyle = "#E1E1E1";
    ctx.font = "12pt Arial Bold";
    ctx.fillText(title, 602, 38);
    ctx.fillStyle = "Black";
    ctx.fillText(title, 600, 36);
}
var DrawNoticeLine = function (canvas, ctx, offset, color,step) {
    var grd = ctx.createLinearGradient(1, 22, canvas.width-offset, 22);
    grd.addColorStop(1, "#FFFFFF");
    grd.addColorStop(0, color);
    ctx.fillStyle = grd;
    ctx.fillRect(10, 2+step, canvas.width-offset, 1);
}
var RenderNoticeWindow = function (id, symbol) {
    var canvas = document.getElementById(id);
    var ctx = canvas.getContext("2d");
    var color = "gold";
    var title;
    switch (symbol) {
        case "A":
            color = "darkblue";
            title = "Information";
            break;
        case "E":
            color = "darkgreen";
            title = "Discussion";
            break;
        default:
            color = "darkorange";
            title = "Bad News";
            break;
    }

    ctx.font = "16px 'MS Outlook' Bold";
    step = 1;
    DrawNoticeLine(canvas, ctx, 10, color, step);
    step += 3;
    DrawNoticeLine(canvas, ctx, 70, color, step);
    step += 3;
    DrawNoticeLine(canvas, ctx, 115, color, step);
    step += 3;
    DrawNoticeLine(canvas, ctx, 135, color, step);
    step += 3;
    DrawNoticeLine(canvas, ctx, 145, color, step);
    step += 3;
    DrawNoticeLine(canvas, ctx, 151, color, step);
    step += 3;
    DrawNoticeLine(canvas, ctx, 156, color, step);
    step += 3;
    DrawNoticeLine(canvas, ctx, 160, color, step);


    var radgrad = ctx.createRadialGradient(17, 15, 8, 17, 15, 14);
    radgrad.addColorStop(0, 'rgba(255,255,255,1)');
    radgrad.addColorStop(0.9, color);
    radgrad.addColorStop(0.95, color);
    radgrad.addColorStop(1, 'rgba(255,255,255,0)');

    ctx.fillStyle = radgrad;
    ctx.beginPath();
    ctx.arc(17, 15, 14, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(14, 10);
    ctx.lineTo(23, 15);
    ctx.lineTo(14, 20);
    ctx.closePath();
    ctx.fill();


    ctx.font = "16px 'Impact' Bold";
    ctx.fillText(title, 70, 24);

}
var RenderNoticeBox = function (id, color, info) {
    var canvas = document.getElementById(id);
    var ctx = canvas.getContext("2d");
    ctx.font = "18px 'Algerian' Bold"

}