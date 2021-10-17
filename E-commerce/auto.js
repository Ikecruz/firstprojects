var foods = ["Rice", "Pizza", "Stew", "Yam", "Soup", "Beans", ];
foods.sort();

var input = document.getElementById("input");
var autocomplete = document.getElementById("autocomplete");
var contain = document.getElementById("ul");


input.addEventListener('keyup', function(){
    autocomplete.style.display = "inline";

    for(let i = 0; i < foods.length; i++)
    {
        var sub = foods[i];
        
        for(let j = 0; j < sub.length; j++)
        {
            if(input.value == sub[j])
            {
                var list = document.createElement("li");
                list.innerText = sub;
                list.classList.add('list');
                contain.appendChild(list);

                list.addEventListener('click', function(){
                    listVal = list.innerText;
                    input.value = listVal;

                    contain.remove(list);
                })

            }else if(input.value == "")
            {
                contain.remove(list);
                
            }
        }
    }
})