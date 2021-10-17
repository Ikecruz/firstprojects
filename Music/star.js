var count = 0;
var i = 0;

for(i = 0; i <=6; i++){
    document.write("<div style='text-align: center>")
    for(var j = 0; j <= count; j++)
    {
        document.write("*");
    }
    document.write("</div>");
    count++;
    if(count == 1){
        count++;
    }
    if(i == 1){
        count += 4;
    }
    if(i == 2){
        count -= 4;
    }
    if(i == 3){
        count -= 3;
    }
    if(i == 4){
        count += 1;
    }
    if(i == 5){
        count += 1;
    }

}