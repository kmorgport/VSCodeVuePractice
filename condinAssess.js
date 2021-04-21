const app = Vue.createApp({
    data(){
        return{
            enteredTask: '',
            tasks: [],
            isVisible: true,
        };
    },
    methods:{
        addTask(){
            this.tasks.push(this.enteredTask);
        },
        toggleTask(){
            this.isVisible = !this.isVisible;
        }
    },
    computed:{
        buttonCaption(){
            return this.isVisible ? "Hide List" : "Show List";
        }
    }

})

app.mount("#assignment")