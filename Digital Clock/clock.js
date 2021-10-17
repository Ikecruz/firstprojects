function printTime(){
    var time = new Date();
    var hours = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();

    document.getElementById("hour").innerHTML = hours+ " ";
    document.getElementById("min").innerHTML = ": " +min+ " ";
    document.getElementById("sec").innerHTML = ": " +sec;
}
setInterval(printTime, 1000)