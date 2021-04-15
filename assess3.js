const app = Vue.createApp({
    data(){
        return {
            counter: 0
        }
    },
    computed:{
        result(){
            if(this.counter<37){
                return "Not there yet!";
            }else if(this.counter>37){
                return "Too much!"   
            }
        }
    },
    watch:{
        counter(value){
            if(this.counter>37){
                const that = this;
                setTimeout(()=> {
                    that.counter = 0
                }, 5000);
            }
        }
    },
    methods:{
        add5(){
            console.log(this.counter)
            this.counter+=5;
        },
        add1(){
            this.counter++
        }
    }

})
app.mount("#assignment")