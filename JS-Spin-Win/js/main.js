const app = Vue.createApp({

    data(){
        return{
            product: 'SHOES',
            productDes: "Men's Knit Running Trousers",
            image: 'img/blue.png',
            url: 'https://www.google.com',
            aval: true,
            sizes: ['12', '6', '7', '8', '10'],
            variants: [
                {id: 1000, color: 'Blue', Image: 'img/blue.png', quantity: 100},
                {id: 1001, color: 'Red', Image: 'img/red.png', quantity: 10}
            ],
            cart: 0
        }
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        updateImg(varientImage){
            this.image = varientImage
        }
    }
})

const mountedApp = app.mount('#app')

console.log(mountedApp.product)