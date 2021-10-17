var mybody =  document.getElementsByTagName("body");

var students = [];
students[0] = [3];

function fn1()
{
    students[0][0] = document.getElementById("name").value;
    students[0][1] = document.getElementById("address").value;
    students[0][2] = document.getElementById("contact").value;
    length = students[0][2].length
    students[0][3] = document.getElementById("qual").value;
    students[0][4] = document.getElementById("age").value;
    
    if (students[0][0] != '' && students[0][1] != '' && students[0][2] != '' && students[0][3] != '' && students[0][4] != '')
    {
        if (length == 11 && students[0][4] >= 18)
        {
            document.write('<table border = 1;><tr><th>Student Name</th><th>Address</th><th>Contact</th><th>Qualification</th><th>Age</th></tr>');
            var i = 0;
            document.write('<tr>')
                for (j=0; j<=4; j++)
                {
                    document.write('<td>'+students[i][j]+'</td>');
                    continue;
                }
            document.write('</tr>')
            document.write('</table>')
            
        } else {
            document.getElementById("for-contact").innerHTML = "invalid contact";
            document.getElementById("for-age").innerHTML = "User must be above the age of 18";
            
        }
    } else {
        alert('All boxes should be filled');
    }
}