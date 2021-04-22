const app = Vue.createApp({
    data(){
        return{
            playerHealth: 100,
            monsterHealth: 100
        };
    },
    methods:{
        attackMonster() {
            Math.floor(Math.random()*(12-5))+5;
        }
    }
})