var websocket
function GetSocket() {
    if (websocket == null) {
        websocket = new OPTSocket();
        websocket.AddOnOpenEvent(OnSocketOpenEvent);
        websocket.AddOnCloseEvent(OnSocketCloseEvent);
        websocket.AddOnSecondEvent(OnSecondEvent);
        websocket.AddMilestoneEvent(OnMilestoneEvent);
    }
    return websocket;
}
function OPTSocket() {
    var onOpenEventListeners = new Array();
    var onCloseEventListeners = new Array();
    var onSecondEventListeners = new Array();
    var onMilestoneEventListeners = new Array();
    var ws;
    var status=0;

    this.AddOnOpenEvent = function (listener) {
        onOpenEventListeners[onOpenEventListeners.length] = listener;
    }

    this.AddOnCloseEvent = function (listener) {
        onCloseEventListeners[onCloseEventListeners.length] = listener;
    }

    this.AddOnSecondEvent = function (listener) {
        onSecondEventListeners[onSecondEventListeners.length] = listener;
    }

    this.AddMilestoneEvent = function (listener) {
        onMilestoneEventListeners[onMilestoneEventListeners.length] = listener;
    }
    this.Send = function (message) {
        ws.send(message)
    }
    this.Start = function () {
        if (status == 1) return;
        ws = new WebSocket('ws://' + document.getElementById("server").value + ':8181/TWCompetition', 'ClientInstruction');
        ws.onopen = function () {
            status = 1;
            for (var i = 0; i < onOpenEventListeners.length; i++)
                onOpenEventListeners[i]();
        }
        ws.onclose = function () {
            status = 0;
            for (var i = 0; i < onCloseEventListeners.length; i++)
                onCloseEventListeners[i]();
        }
        ws.onmessage = function (evt) {
            var message = eval('(' + evt.data + ')');
            switch (message.Key) {
                case "InitData":
                    if (message.Trace.length > 0) RenderMoneyInitTrace("MoneyDashboard", message.Trace, "MoneyIcon");
                    break;
                case "Users":
                    OnlineUsers = message;
                    DisplayUsers();

                    break;
                case "Private":
                    var sender = message.Sender;
                    var conversationMessage = message.Message;
                    var name;
                    
                    if(conversationMessage=="black you"){
                        if(blackyouObj!=null) {
                            blackyouObj.OpenBlack();
                            ClosePrivateWindow("PW"+sender);
                            return;
                        }
                    }
                    for (i = 0; i < OnlineUsers.Keys.length; i++) {
                        if (OnlineUsers.Keys[i] == sender) {
                            name = OnlineUsers.Names[i];
                        }
                    }
                    PrivateConversation(sender, name, conversationMessage)
                    break;
                case "Register":
                    Token = message.Token;
                    SendName(document.getElementById('name').value);
                    break;
                case "OneSecond":
                    for (var i = 0; i < onSecondEventListeners.length; i++)
                        onSecondEventListeners[i](message);
                    break;
                default:
                    for (var j = 0; j < onMilestoneEventListeners.length; j++)
                        onMilestoneEventListeners[j](message);
                    break;
            }
        }
    }
}