var noticeWindowIndex = 0;
var idList = new Array();
var symbolList = new Array();
var IsGameOver = true;
var NoticeWindowList = new Array();


var NoticeWindow = function (parentid, symbol, content) {
    this.ParentID = parentid;
    this.ClearInformation();
    noticeWindowIndex++;
    this.ID = "nw" + noticeWindowIndex;
    this.Content = content;
    this.Symbol = symbol;
    var el = document.getElementById(this.ParentID);
    var canvas = "<div id='div" + this.ID + "' class='NoticeWindow'><canvas id='" + this.ID + "' width='190' height='33' style='position:relative;'>" +
        "</canvas><table><td width='5'></td><td>" + this.Content + "</td><td width='5'></td></table><br /></div>";
    el.innerHTML += canvas;
    var me = document.getElementById("div" + this.ID);
    me.style.position = "relative";
    //me.style.top = 520 + "px";
    NoticeWindowList[NoticeWindowList.length] = this;
    for (var i = 0; i < NoticeWindowList.length; i++) {
        RenderNoticeWindow(NoticeWindowList[i].ID, NoticeWindowList[i].Symbol);
    }
    //GetAnimation().AddTask(this);
}
NoticeWindow.prototype.StartTop = 520;
NoticeWindow.prototype.ParentID;
NoticeWindow.prototype.Symbol;
NoticeWindow.prototype.Content;
NoticeWindow.prototype.ID;
NoticeWindow.prototype.Top;

NoticeWindow.prototype.ClearInformation = function () {
    if (IsGameOver == true) {
        var el = document.getElementById(this.ParentID);
        el.innerHTML = "";
        var inc = document.getElementById('incomming');
        inc.value = "";
        IsGameOver = false;
        NoticeWindowList = new Array();
        noticeWindowIndex = 0;
    }
}
NoticeWindow.prototype.DoWork = function () {
    var el = document.getElementById("div" + this.ID);
    var step = this.StartTop;
    if (step>0) {
        this.AppearStep += 100;
        var np = this.StartTop - step;
        el.style.top = np + "px";
    }
}
