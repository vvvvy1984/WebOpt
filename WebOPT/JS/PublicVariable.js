var RegisterName;
var Token;
var OnlineUsers;
var LeftBorder;
var ScreenWidth=1280;

var GetUserName = function (id) {
    for (var i = 0; i < OnlineUsers.Keys.length; i++) {
        if (OnlineUsers.Keys[i] == id) return OnlineUsers.Names[i];
    }
}
var DisplayUsers = function () {
    var el = document.getElementById("users");
    var inner = "<table>";
    CheckExpiredWindow(OnlineUsers.Keys);
    el.innerHTML

    for (var i = 0; i < OnlineUsers.Keys.length; i++) {
        inner += "<tr><td><canvas class='UserDiv' width='24' height='24' id='" + OnlineUsers.Keys[i] +
                        "'></canvas></td><td><div class='UserDiv'  onclick=\"PrivateConversation('" + OnlineUsers.Keys[i] +
                        "','" + OnlineUsers.Names[i] + "','@@')\">" +
                        OnlineUsers.Names[i] + "</div></td></tr>";
    }
    inner += "</table>";
    el.innerHTML = inner;
    for (var i = 0; i < OnlineUsers.Keys.length; i++) {
        if (OnlineUsers.Keys[i] == Token) {
            RenderStatusIcon("pink", OnlineUsers.Keys[i]);
        }
        else {
            RenderStatusIcon("green", OnlineUsers.Keys[i]);
        }
    }
    
}

