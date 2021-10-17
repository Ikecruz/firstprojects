const premium = (customersarr) =>{
    let premiumCus = [];
    let total = [];

    customersarr.forEach(customer => {
        const newprice =  customer.price.filter((pr) => (pr >= 50))
    
        if (newprice.length >= 3) {
            let sum = 0;

            newprice.forEach(price => {
                sum += price;
            })

            total.push(sum);
            premiumCus.push({name: customer.name, total: sum})
        }
    });

    console.log("Our Premuim Customers")
    let counter = 1;
    
    premiumCus.forEach(cus => {
        if (cus.total == Math.max(...total)) {
            console.log(counter+") Gold Premium Membership award to "+cus.name+" with a total purchase of "+cus.total)
            premiumCus = premiumCus.filter((i) => i.total != cus.total)
            counter++;
        }
    })

    premiumCus.forEach(cus => {
        console.log(counter+") Silver Membership award to "+cus.name)
        premiumCus = premiumCus.filter((i) => i.total != cus.total)
        counter++;
    })
}

let customer = [
    {name: 'Bola', price: [21, 90, 30, 16, 50, 60]},
    {name: 'King', price: [30, 40, 45, 60, 25]},
    {name: 'Favour', price: [50, 55, 65, 13, 20, 60]},
    {name: 'Emeka', price: [80, 90, 85, 22, 20]},
]

// premium(customer)

const test = (user) => {
    user.length = 2;
    let newarr = user;

    console.log(newarr);
}

test(customer)