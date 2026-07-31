const socket = new WebSocket("ws://localhost:3000");

const chatBox = document.getElementById("chatBox");

const messageInput = document.getElementById("message");

const sendBtn = document.getElementById("sendBtn");

// Connected
socket.onopen = () => {

    addMessage("Connected to Server");

};

// Receive message
socket.onmessage = (event) => {

    addMessage(event.data);

};

// Connection closed
socket.onclose = () => {

    addMessage("Disconnected");

};

// Error
socket.onerror = (err) => {

    console.log(err);

};

// Button click
sendBtn.addEventListener("click", sendMessage);

// Enter Key
messageInput.addEventListener("keypress", (e)=>{

    if(e.key==="Enter"){

        sendMessage();

    }

});

function sendMessage(){

    const msg = messageInput.value.trim();

    if(msg==="") return;

    socket.send(msg);

    messageInput.value="";

}

function addMessage(msg){

    const div=document.createElement("div");

    div.className="message";

    div.innerText=msg;

    chatBox.appendChild(div);

    chatBox.scrollTop=chatBox.scrollHeight;
}