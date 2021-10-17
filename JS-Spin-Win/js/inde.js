let input = document.getElementById('input');
let click = document.getElementById('click')
let toggle = false;

click.addEventListener('click', () => {

    // if (toggle) {
    //     toggle = !toggle;
    //     input.setAttribute('type', 'text');
    // } else {
    //     toggle = !toggle;
    //     input.setAttribute('type', 'password');
    // }

    if (input.type === "password") {
        input.type = "text"
    }
    else{
        input.type = "password"
    }
})