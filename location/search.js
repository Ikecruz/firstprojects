$(function(){
    var availableTags = [
        "Benin",
        "Ibadan",
        "Onitsha",
        "Osun",
        "Port-harcourt"
    ];
    $("#input").autocomplete({
        source:availableTags
    });
});

$("#pop").hide();

var ph = ["Diobu", "Abuloma", "Eagle Island", "Rumuwoji", "Rebisi"];
ph.sort();

var osun = ["Ode-Omu", "Orile Owu", "Ile Ogbo", "Kuta", "Olupona"];
osun.sort();

var ibadan = ["Ido", "Oluyole", "Ona Ara", "Akinyele", "Egbeda"];
ibadan.sort();

var benin = ["Ososo", "Use", "Ebelle", "Ewu", "Irrua"];
benin.sort();

var onitsha = ["Fegge", "Awada", "Woliwo", "Odoakpu", "33"];
onitsha.sort();

var input = document.getElementById("input");
var searchBtn = document.getElementById("btn1");
var verify = document.getElementById("verify");
var com = document.getElementById("com");
var effectBtn = document.getElementById("btn2");

searchBtn.addEventListener('click', function(){
    if (input.value == '')
    {
        input.style.border = "1px solid red";
        verify.innerText = "Please enter a recognized city";
    }
    else if (input.value == 'Port-harcourt')
    {
        input.style.border = "";
        verify.innerText = "";
        com.remove(option);
        com.remove(option);
        com.remove(option);
        com.remove(option);
        com.remove(option);

        for(i = 0; i < ph.length; i++){
            var option = document.createElement('option');
            option.innerText = ph[i];
            com.appendChild(option);
        }
    }
    else if (input.value == 'Benin')
    {
        input.style.border = "";
        verify.innerText = "";
        com.remove(option);
        com.remove(option);
        com.remove(option);
        com.remove(option);
        com.remove(option);

        for(i = 0; i < benin.length; i++){
            var option = document.createElement('option');
            option.innerText = benin[i];
            com.appendChild(option);
        }
    }
    else if (input.value == 'Ibadan')
    {
        input.style.border = "";
        verify.innerText = "";
        com.remove(option);
        com.remove(option);
        com.remove(option);
        com.remove(option);
        com.remove(option);

        for(i = 0; i < ibadan.length; i++){
            var option = document.createElement('option');
            option.innerText = ibadan[i];
            com.appendChild(option);
        }
    }
    else if (input.value == 'Osun')
    {
        input.style.border = "";
        verify.innerText = "";
        com.remove(option);
        com.remove(option);
        com.remove(option);
        com.remove(option);
        com.remove(option);

        for(i = 0; i < osun.length; i++){
            var option = document.createElement('option');
            option.innerText = osun[i];
            com.appendChild(option);
        }
    }
    else if (input.value == 'Onitsha')
    {
        input.style.border = "";
        verify.innerText = "";
        com.remove(option);
        com.remove(option);
        com.remove(option);
        com.remove(option);
        com.remove(option);

        for(i = 0; i < onitsha.length; i++){
            var option = document.createElement('option');
            option.innerText = onitsha[i];
            com.appendChild(option);
        }
    }
    else{
        input.style.border = "1px solid red";
    }
})

effectBtn.addEventListener('click', function(){
    var live = document.getElementById("live");
    live.innerText = com.value;

    if (com.value == ''){
        
    } else {
        $("#pop").fadeIn();
    }
})

$("#pop").click(function(){
    $("#pop").fadeOut();
})