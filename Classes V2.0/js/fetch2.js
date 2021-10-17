const caller = (resources) => {

    const request = new XMLHttpRequest();
    
    request.addEventListener('readystatechange', () => {
    
        if (request.readyState === 4) {
    
            console.log(request.responseText);
    
            const data = JSON.parse(request.responseText);
        }
    })
    
    request.open('GET', resources, true);
    request.send();

}

caller('./data.json');