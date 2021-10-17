const app = Vue.createApp({
    data() {
        return{
            name: 'pablo',
            showState: true,
            shoes: [
                {name: 'Nike', size: 12, Color: 'Red', Image: 'img/red.png', isAval: false},
                {name: 'Puma', size: 15, Color: 'Blue', Image: 'img/blue.png', isAval: false},
                {name: 'Adidas', size: 10, Color: 'Black', Image: 'img/black.png', isAval: false}
            ]
        }
    },
    methods: {
        toggleShow() {
            this.showState = !this.showState
        },
        Event(shoe) {
            shoe.isAval = !shoe.isAval
        }
    }
})

const mountedapp = app.mount('#app')