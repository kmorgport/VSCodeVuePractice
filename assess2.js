const app = Vue.createApp({
    data(){
        return{
            paragraph: "",
            paragraph2: ""
        };
    },
    methods:{
        alert(){
            alert("here is an alert!");
        },
        keydown(){
            return this.paragraph = event.target.value
        },
        keydownEnter(){
            return this.paragraph2 = event.target.value
        }
    }
})

app.mount("#assignment")