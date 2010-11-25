var ani;
var GetAnimation = function () {
    if (ani == null) {
        ani = new Animation();
    }
    return ani;
}
var Animation = function () {
    var tasks = new Array();
    this.AddTask = function (task) {
        tasks[tasks.length] = task;
    }
    this.Go = function () {
        setInterval(function () {
            if (tasks.length == 0) return;
            for (var i = 0; i < tasks.length; i++) {
                tasks[i].DoWork();
            }
        }, 50);
    }
}

var SendInstruction = function (type, number) {
    var json = JSON.stringify({ Type: type, Number: number });
    ws.Send(json);
}
var AutoRun = function(){
    SendInstruction(0, 0);
}
var ManualRun = function(){
    SendInstruction(1, 0);
}


var Start = function () {
    SendInstruction(2, 0);
}
var Pause = function () {
    IsGameOver = false;
    SendInstruction(3, 0);
}
var Stop = function () {
    IsGameOver = true;
    SendInstruction(4, 0);
}
var InputP1 = function (number) {
    SendInstruction(6, number);
}
var InputP2 = function (number) {
    SendInstruction(7, number);
}
var SetSpeed = function (number) {
    SendInstruction(5, number);
}
var SendMessage = function (receiver, message) {
    var json = JSON.stringify({ Type: 8, Sender: Token, To: receiver, Notice: message });
    ws.Send(json);
}
var SendName = function (name) {
    var json = JSON.stringify({ Type: 9, Sender: Token, Notice: name });
    ws.Send(json);
}