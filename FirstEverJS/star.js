var star = ["*", "***", "*****", "***", "*"];

function fn1()
{
    document.write('<div style="text-align: center">')
    for(var i=0; i < star.length; i++)
    {
        // document.getElementById("body").innerHTML = "<p>"+star[i]+"</p><br>";
        document.write("<p>"+star[i]+"</p>");
    }
    document.write("</div>");
}
