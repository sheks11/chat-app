let username="";
let toss=true;
document.getElementById("btn").addEventListener("click",(event)=>{
    event.preventDefault();
    username=document.getElementById("username").value;
    console.log(username);
       if(username.trim()!=""){
        document.getElementById("chatbox1").style.display="none";
        document.querySelector(".chatroom-container").style.display="block";
       }

})


    document.getElementById("btn-send").addEventListener("click",(event)=>{
        event.preventDefault();
        const data={
            name:username,
            message:document.getElementById("message-input").value
        };
        // console.log(data.name);
        addMessage(data);
    })

    function addMessage(data){
        let myDiv= document.createElement("div");
        myDiv.innerText=`${data.name}:${data.message} ${new Date().toString().substring(16,24)}`;
        if(toss){
            myDiv.setAttribute("class","message-sent");
            toss=false;
        }
        else{
            myDiv.setAttribute("class","message-received");
            toss=true;
        }
        document.getElementById("messages-container").appendChild(myDiv);
    }