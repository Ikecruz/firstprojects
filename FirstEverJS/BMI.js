function fn1()
{
    var height, weight, total;

    height = parseInt(document.getElementById("height").value);
    weight = parseInt(document.getElementById("weight").value);

    if (height == "" || isNaN(height))
    {
        document.getElementById("for-height").innerHTML = "Please Input height";
    }else if (weight == "" || isNaN(weight))
    {
        document.getElementById("for-weight").innerHTML = "Please Input weight";
    }else{
        total = (weight /((height * height)/1000))
        if (total <= 18.6)
        {
            document.getElementById("total").innerHTML = "Under weight: " +total;
        } else if(total >= 18.6 && total < 24.9)
        {
            document.getElementById("total").innerHTML = "Normal : " +total;
        }else
        {
            document.getElementById("total").innerHTML = "Over weight : " +total;
        }
    }

}