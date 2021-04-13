const app = Vue.createApp({
    data (){
        return{
            courseGoalA: "Finish the course and learn vue",
            courseGoalB: "Master Vue and build amazing apps!",
            vueLink: "Https://vuejs.org/"

        };
    },
    methods: {
        outputGoal(){
            Math.random();
        }
    }
});

app.mount("#user-goal");