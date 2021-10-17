var info = [
    ["Mr John ordered a phone", "images/cardio.png"],
    ["Mr Mark ordered a wrist watch", "images/psycho.png"],
    ["Mr John ordered a Calculator", "images/cardio.png"],
    ["Mr Mark ordered a wrist watch", "images/psycho.png"],
    ["Mr John ordered a pot", "images/cardio.png"],
    ["Mr Mark ordered a terminator svg", "images/psycho.png"],
    ["Mr John ordered a Ps4", "images/cardio.png"],
    ["Mr Mark ordered FIFA 21", "images/psycho.png"],
    ["Mr John ordered PES", "images/cardio.png"],
    ["Mr Mark just deleted his account", "images/psycho.png"],
];

let txt = document.getElementsByClassName("text");
let img = document.getElementsByClassName("image");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

window.addEventListener('load', function() {
    for (let i = 0; i < 3; i++)
    {
        for (let j = 0; j < 3; j++)
        {
            img[i].src = info[i][1];
            txt[i].innerHTML = info[i][0];
        } 
        
    }
})

let xx = 0;
let val = 3;

next.addEventListener('click', function (){
    // for (xx = xx + 3; xx < val + 3; xx++)
    // {
    //     // alert(info[xx][0])
    //     for (let j = 0; j < 3; j++)
    //     {
    //         img[j].src = info[xx][1];
    //         txt[j].innerHTML = info[xx][0];
    //     }
    // }

    // xx = 3;
    // val = 7;
    for (let ii = 0; ii < 3; ii++) {
        for (let i = 3; i < 6; i++)
        {
            
            for (let j = 0; j < 3; j++)
            {
                img[ii].src = info[i][1];
                txt[ii].innerHTML = info[i][0];
            }
            
        }
    }
})

prev.addEventListener('click', function (){

    for (let i = 0; i < 3; i++){
        for (xx = xx - 3; xx < val - 3; xx++)
        {
            // alert(info[xx][0])
            for (let j = 0; j < 3; j++)
            {
                img[i].src = info[xx][1];
                txt[i].innerHTML = info[xx][0];
            }
        }
    }
    
    xx = xx - 3;
    val = val - 3;
})