var color = document.getElementById("input");
var button = document.getElementById("btn");
var body = document.getElementById("contain");

button.addEventListener('click', function(){
    if (color.value == "")
    {
        color.style.borderColor = "red";

    }else
    {
        color.style.borderColor = "";
        body.style.backgroundColor = color.value;

        color.value = "";
    }
})