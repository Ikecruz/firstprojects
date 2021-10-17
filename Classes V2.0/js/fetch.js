// fetch API 

const getData = async () => {

    const response = await fetch('./data.json');

    if ( response.status != 200) {
        throw new Error('cannot get data');
    }

    const data = await response.json();

    return data
}

getData()
    .then(data => {console.log('resolved', data)})
    .catch(err => {console.log('fowl',err)})

// fetch('data.json').then( (response) => {
//     console.log('Success', response);
//     return response.json();
// }).then( data => {
//     console.log(data);
//     console.log(data[0].name)
// }).catch( (err) => {
//     console.log('Error fetching API', err)
// })