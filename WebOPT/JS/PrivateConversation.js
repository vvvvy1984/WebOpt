var PrivateList = new Array();

var PrivateConversation = function (id, name, message) {
    if (id == Token) return;
    id = id;
    var el = document.getElementById("PW" + id);
    if (el == null) {
        var tmpdiv = document.createElement("div");
        var str = "<table id='PW" + id + "' class='PrivateWindow'>" +
                  "<tr><td colspan=2 class='ContentBanner'><canvas id='PWC" + id + "' width='99' height='19' ondblclick=\"ClosePrivateWindow('PW" +
                  id + "')\"></canvas></td></tr>" +
                  "<tr><td class='ContentBorder'></td><td class='Content'><textarea id='txt" + id +
                  "' class='Log' style='width:100%; height:120' onkeypress=\"CheckEnter(event);KeyPress('" + id + "')\"></textarea>" +
                  "</td><td class='ContentBorder'></td></tr>" +
                  "</table>";
        tmpdiv.innerHTML = str;
        //document.getElementById("conversationdiv").innerHTML += str;
        document.getElementById("conversationdiv").appendChild(tmpdiv.firstChild);
        PrivateList[PrivateList.length] = id;
        ReSetWindows();
    }
    if (message != "@@") {
        document.getElementById('txt' + id).value = message;
    }
}
var ReSetWindows = function () {
    var offset = 0;
    for (var i = 0; i < PrivateList.length; i++) {
        var el = document.getElementById("PW" + PrivateList[i]);
        if (el == null) continue;

        RenderPrivateWindow(GetUserName(PrivateList[i]), "darkred", "PWC" + PrivateList[i]);
        el.style.left = offset;
        offset += 200;
    }
}
var IsSend = false;
var CheckEnter = function (e) {
    var keynum
    var keychar

    if (window.event) // IE
    {
        keynum = e.keyCode
    }
    else if (e.which) // Netscape/Firefox/Opera
    {
        keynum = e.which
    }
    if (keynum == 13) IsSend = true;
    else IsSend = false;
}
var KeyPress = function (id) {
    if (IsSend) {
        SendMessage(id, document.getElementById('txt' + id).value);
    }
}
var CheckExpiredWindow = function (validuserlist) {
    var tmpID = PrivateList;

    for(var i=0; i<tmpID.length; i++){
        var ifFound = false;
        for(var j=0; j<validuserlist.length; j++){
            if(tmpID[i] == validuserlist[j]){
                ifFound = true;
                break;
            }
        }
        if(!ifFound) {
            ClosePrivateWindow("PW"+tmpID[i]);
        }
    }
}
var ClosePrivateWindow = function (id) {
    var el = document.getElementById(id);
    var parent = document.getElementById("conversationdiv");
    parent.removeChild(el);
    var tmpID = new Array();
    var j = 0;
    for (var i = 0; i < PrivateList.length; i++) {

        if ("PW"+PrivateList[i] != id) {
            tmpID[j] = PrivateList[i];
            j++;
        }
    }
    PrivateList = tmpID;
    ReSetWindows();
}
