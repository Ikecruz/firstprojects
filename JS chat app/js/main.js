let sendBtn = document.getElementById("send-btn");
let messages = document.getElementById("messages");
let input = document.getElementById("input");
let sentBox = document.getElementsByClassName("power");
let quotes = ["You must tell yourself, No matter how hard it is, or how hard it gets, I’m going to make it", "Be loyal to your future, not your past.", "The best revenge is no revenge. Move on, and be happy.", " Do not give your past the power to define your future", "Love yourself first and everything falls into line.", "Success is the ability to go from one failure to another with no loss of enthusiasm."];


function sender(sendMsg) {
    let majors = document.createElement('div');
    majors.classList.add('major');
    messages.appendChild(majors);

    let sender = document.createElement('div');
    sender.classList.add('sender');
    majors.appendChild(sender);
    let msg = document.createElement('p');
    msg.classList.add('power')
    msg.innerText = sendMsg;
    sender.appendChild(msg);

    var time = new Date();
    var hours = time.getHours();
    var min = time.getMinutes();

    let timeContain = document.createElement('p');
    timeContain.classList.add('send-time2');
    if (min <= 9) {
        
        timeContain.innerText = hours+ ":0" +min;
    } else {
        
        timeContain.innerText = hours+ ":" +min;
        
    }
    sender.appendChild(timeContain);

    messages.scrollTop = messages.scrollHeight;
}

function dracoBox(bot) {
    let majors = document.createElement('div');
    majors.classList.add('major');
    messages.appendChild(majors);

    let sender = document.createElement('div');
    sender.classList.add('draco');
    sender.innerText = bot;
    majors.appendChild(sender);
    
    var time = new Date();
    var hours = time.getHours();
    var min = time.getMinutes();

    let timeContain = document.createElement('p');
    timeContain.classList.add('send-time');
    if (min <= 9) {
        
        timeContain.innerText = hours+ ":0" +min;
    } else {
        
        timeContain.innerText = hours+ ":" +min;
        
    }
    sender.appendChild(timeContain);

    messages.scrollTop = messages.scrollHeight;
}

function quoter() {
    var uq = quotes[Math.floor(Math.random() * quotes.length)]
    dracoBox(uq);
}

function draco() {
    let sentBoxRem = sentBox.length - 1;
    let boxValue = sentBox[sentBoxRem].innerText;
    let toLower = boxValue.toLowerCase();
    
    if (toLower == "how are you doing")
    {
        dracoBox("Am doing great, You?");
    }
    else if ((toLower == "hey") || (toLower == "hi") || (toLower == "hola"))
    {
        dracoBox("Good Day");
    } 
    else if ((toLower == "whats your name") || (toLower == "what's your name")) 
    {
        dracoBox("Am Draco, Cruz made me, Am just a friendly chatbot....Am still learning to communicate with Humans, Baby steps...Haha");
        dracoBox("Cruz also promised to make me more advanced, I trust him");
    } 
    else if (toLower == "am fine") 
    {
        dracoBox("That's Nice");
    }
    else if (toLower == "what else can you do")
    {
        dracoBox("I do randomly drop qoutes at your request just say 'A quote Draco' ");
    }
    else if (toLower == "a quote draco"){
        quoter();
    }
    else if (toLower == "thanks")
    {
        dracoBox("You're welcome");
    }
    else if (toLower == "goodbye")
    {
        dracoBox("Byee, Nice Talking to you");
    }
    else if (toLower == "sup mate")
    {
        dracoBox("Am good innit.....Can't see you but i can sense you looking sexy");
    }
    else if (toLower == "whats the new update")
    {
        dracoBox("Bake off blud..No new update innit...Cruz been lazy mahn");
    }
    else 
    {
        dracoBox("Sorry, i don' get you, Am still new to the Human Language, Lol.....Hoping to improve");
    }
}

sendBtn.addEventListener('click', function(){
    if (input.value != "")
    {
        sender(input.value)
        input.value = "";

        var inter = setInterval(draco, 2000);

        function stop(){
            clearInterval(inter);
        }
        setInterval(stop, 2000)
    } else {
        
    }
})