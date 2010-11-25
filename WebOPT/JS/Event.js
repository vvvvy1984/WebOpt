
var OnSocketOpenEvent = function () {
    var inc = document.getElementById('incomming');
    inc.value += "websocket connecting\r\n";
    inc.value += "websocket connection open\r\n";
    var loginbutton = document.getElementById("connectbutton");
    loginbutton.style.visibility = "hidden";
}
var OnSocketCloseEvent = function () {
    var inc = document.getElementById('incomming');
    inc.value += "websocket connection close \r\n";
    var loginbutton = document.getElementById("connectbutton");
    loginbutton.style.visibility = "visible";
}
var OnSecondEvent = function (message) {
    
    //    var inc = document.getElementById('incomming');
    //    inc.innerHTML += message.Notice + "<br/>";
}
var GameOver = function (time) {
    pa.Status = 0;
    pb.Status = 0;
    pc.Status = 0;
    pd.Status = 0;
    pe.Status = 0;
    var w1 = new NoticeWindow("leftItem", "A", "Game is Over!小挣一点点....");
    IsGameOver = true;
    AppendLogText(time, ": Game is over \r\n");
}
var BeginP1Setup = function (time) {
    pa.Status = 1;
    AppendLogText(time, ": PinkMachine is setting up P1 poduction \r\n");
    
}
var BeginP2Setup = function (time) {
    pa.Status = 0;
    pc.Status = 1;
    document.getElementById("P1InA").style.visibility = "hidden";  
    AppendLogText(time, ": PinkMachine is setting up P2 production \r\n");
}
var AfterP1Setup = function (time) {
    pa.Status = 2;
    AppendLogText(time, ": PinkMachine has setup for P1 production \r\n");
}
var AfterP2Setup = function (time) {
    pc.Status = 2;
    AppendLogText(time, ": PinkMachine has setup for P2 production \r\n");
}
var BeginP1Produce = function (time) {
    pa.Status = 3;
    pc.Status = 0;
    document.getElementById("P1InA").style.visibility = "visible";
    AppendLogText(time, ": PinkMachine is producing P1 \r\n");
}
var BeginP2Produce = function (time){
    pc.Status = 3;
    document.getElementById("P2InC").style.visibility = "visible";
    AppendLogText(time, ": PinkMachine is producing P2 \r\n");
}
var AfterP1Produced = function (time) {
    pa.Status = 0;
    document.getElementById("P1InA").style.visibility = "hidden";
    AppendLogText(time, ": PinkMachine finished P1 producing \r\n");
    
}
var AfterP2Produced = function (time) {
    pc.Status = 0;
    document.getElementById("P2InC").style.visibility = "hidden";
    AppendLogText(time, ": PinkMachine finished P2 producing \r\n");
}
var BeginStep1Setup = function (time) {
    pb.Status = 1;
    pd.Status = 0;
    AppendLogText(time, ": GreenMachine is setting up for step1 \r\n");
}
var AfterStep1Setup = function (time) {
    pb.Status = 2;
    AppendLogText(time, ": GreenMachine has set up step1 for production \r\n");
}
var BeginStep3Setup = function (time) {
    pb.Status = 0;
    pd.Status = 1;
    AppendLogText(time, ": GreenMachine is setting up for step3 \r\n");
}
var AfterStep3Setup = function (time) {
    pd.Status = 2;
    AppendLogText(time, ": GreenMachine has set up step3 for production \r\n");
}
var BeginStep1Produce = function (time) {
    pb.Status = 3;
    document.getElementById("P2InB").style.visibility = "visible";
    AppendLogText(time, ": GreenMachine is producing for step1 \r\n");
}
var AfterStep1Produced = function (time) {
    pb.Status = 2;
    document.getElementById("P2InB").style.visibility = "hidden";
    AppendLogText(time, ": GreenMachine finished step1 producing \r\n");
}
var BeginStep3Produce = function (time) {
    pd.Status = 3;
    document.getElementById("P2InD").style.visibility = "visible";
    AppendLogText(time, ": GreenMachine is producing for step3 \r\n");
}
var AfterStep3Produced = function (time) {
    pd.Status = 2;
    document.getElementById("P2InD").style.visibility = "hidden";
    AppendLogText(time, ": GreenMachine finished step3 producing \r\n");
}
var BeginSetup = function (time) {
    pe.Status = 1;
    SetInconInEVisibility("hidden");
    
    AppendLogText(time, ": YellowMachine is setting up \r\n");
}
var AfterSetup = function (time) {
    pe.Status = 2;
    SetInconInEVisibility("hidden");
    var w1 = new NoticeWindow("leftItem", "E", "开始赚钱啦");
    AppendLogText(time, ": YellowMachine has set up \r\n");
}
var BeginProduce = function (time) {
    pe.Status = 3;
    SetInconInEVisibility("visible");
    
    AppendLogText(time, ": YellowMachine is producing P \r\n");
}
var AfterProduced = function (time) {
    pe.Status = 0;
    SetInconInEVisibility("hidden");
    AppendLogText(time, ": YellowMachine finished P producing \r\n");
}
var SetInconInEVisibility = function(visibility){
    document.getElementById("P1InE").style.visibility = visibility;
    document.getElementById("P2InE").style.visibility = visibility;
    document.getElementById("PInE").style.visibility = visibility;
    document.getElementById("ArrowInE").style.visibility = visibility;
}
var Paused = function(time){
    var w1 = new NoticeWindow("leftItem", "A", "Who Stopped my game!");
}
var Started = function (time) {
    
    var w1 = new NoticeWindow("leftItem", "E", "Game gets started!");
}
var OneWeekPassed = function (time) {
    var w1 = new NoticeWindow("leftItem", "M", "One week passed! 出血发工资啦");
}
var OnMilestoneEvent = function (message) {
    eval(message.Key + "('" + message.T_P + "')");
    for (var p in message) {
        var el = document.getElementById(p);
        if (el != null) el.innerHTML = message[p];
    }
}

var AppendLogText = function (time,txtInfo) {
    var inc = document.getElementById('incomming');
    inc.value += time+txtInfo;
}