const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName= ""
    };
  },
  methods: {
    confirmInput(){
      this.confirmedName = this.name;
    },
    submitForm(event){
      event.prevetDefault();
      alert('Submitted');
    },
    add(num){
      this.counter = this.counter+num;
    },
    reduce(num){
      this.counter = this.counter -num;
    },
    setName(event, lastname){
      return this.name = event.target.value+' '+lastname;
    }
  }
});

app.mount('#events');
