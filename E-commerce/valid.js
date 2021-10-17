let inputs =  document.getElementsByTagName("input");
let btn = document.getElementById("submit");
let txt =  document.getElementsByTagName("p");

window.addEventListener('load', function(){
    $("#valid-name").fadeOut();
    $("#invalid-name").fadeOut();
})

var pattern1 = /^(?=.*[A-Z])(?=.*[.]).{2}$/;
var pattern2 = /^[A-Z]{2,}$/
var pattern3 = /^[A-Za-z]{2,}$/

function Complete(){
    if (inputs[0].value.match(pattern1) || inputs[0].value.match(pattern3)){

        if (inputs[1].value.match(pattern1)){

            if (inputs[2].value.match(pattern3)){
                $("#valid-name").fadeIn();
            } else {
                $("#invalid-name").fadeIn();
            }
        }else {
            if (inputs[2].value.match(pattern3)) {
                txt[1].innerText = "Middle name pattern not correct";
    
                inputs[1].addEventListener('keydown', function(){
                    txt[1].innerText = " ";
                })
            } else {
                for(let i = 1; i < 3; i++){
                    txt[i].innerText = "Name pattern not correct";
        
                    inputs[i].addEventListener('keydown', function(){
                        txt[i].innerText = " ";
                    })
                }
            }
        }
    } else {
        txt[0].innerText = "First name pattern not correct";

        inputs[0].addEventListener('keydown', function(){
            txt[0].innerText = " ";
        })
    }
}

function firstlast(){
    if (inputs[0].value.match(pattern1)){

        if (inputs[2].value.match(pattern2)){
            $("#valid-name").fadeIn();
        }else{
            $("#invalid-name").fadeIn();
        }
    }else{
        txt[0].innerText = "First name pattern not correct";

        inputs[0].addEventListener('keydown', function(){
            txt[0].innerText = " ";
        })
    }
}


btn.addEventListener('click', function(){
    if (inputs[0].value != ""){

        if (inputs[1].value != ""){

            if (inputs[2].value != "")
            {
                Complete();
            }else
            {
                txt[2].innerText = "Last Name required";

                inputs[2].addEventListener('keydown', function(){
                    txt[2].innerText = " ";
                })
            }
        }else{
            if (inputs[0].value != ""){

                if (inputs[2].value != "")
                {
                    firstlast();
                }else{

                txt[1].innerText = "Middle Name required";

                inputs[1].addEventListener('keydown', function(){
                    txt[1].innerText = " ";
                })

                txt[2].innerText = "Last Name required";

                inputs[2].addEventListener('keydown', function(){
                    txt[2].innerText = " ";
                })
                }
            }
        }
    } else {
        for(let i = 0; i < inputs.length; i++){
            inputs[i].style.border = "1px solid red";
        }
    }
})

for(let i = 0; i < inputs.length; i++){
    inputs[i].addEventListener('keydown', function(){
        $("#valid-name").fadeOut();
        $("#invalid-name").fadeOut();   
    })
}
