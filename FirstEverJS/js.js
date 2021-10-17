function fn1()
{
    var Id = document.getElementById("EmpID").value;
    var Name = document.getElementById("EmpNAME").value;
    var La = parseInt(document.getElementById("EmpLA").value);
    var Des = document.getElementById("EmpDES").value;
    var Int = document.getElementById("EmpINT").value;

        var length = 0;
        length = Id.length;

        var firstLetter = "";
        firstLetter = Id[0];

        if (length >= 4 && firstLetter == "E"){
            alert("Welcome " +Name+ " Have a Goodday")

            document.getElementById("loan-amount").innerHTML = La;
            document.getElementById("interest").innerHTML = Int;

            var interestAmount, totalAmount;
            interestAmount =parseInt(La * (Int/100));

            document.getElementById("interest-amount").innerHTML = interestAmount;
            totalAmount = La + interestAmount;

            document.getElementById("total-amount").innerHTML = totalAmount;

        } else {
            alert("Invalid Employee ID")
        }
    
}