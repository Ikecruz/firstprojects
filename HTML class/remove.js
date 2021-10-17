const removeDup = (array) => {
    newarr = [];
    for (let i = 0; i < array.length; i++) {
        let count = 0;

        for (let j = 0; j < array.length; j++) {
            
            if (array[i] == array[j]) {
                count++;
            }

        }

        if (count === 1) {
            newarr.push(array[i])
        }
    }

    return newarr;
}
const arr = [2, 3, 6, 7, 2, 3 ,6 , 10]

console.log(removeDup(arr))