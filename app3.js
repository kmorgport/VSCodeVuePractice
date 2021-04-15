const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullname: '',
      lastName: ''
    };
  },
  //use with data binding
  //Computer properties are only re-evaluated if one of their 'used values' changed
  //use for that data that depends on other data
  computed:{
    fullname(){
      if(value == ''){
        this.fullname = '';
    }else{
      this.fullname = value + ' ' + "testname";
    }
    }
  },
  //used the least of the three
  //not directly used in template
  //allows you to run any code in reaction to some changed data(HTTP request)
  //use for any non-data update you want to make
  watch:{
    counter(value){
      if(value>50){
        this.counter = 0;
      }
    },
    name(value){
      if(value == ''){
          this.fullname = '';
      }else{
        this.fullname = value + ' ' + "testname";
      }
    },
    lastName(value){
      if(value == ''){
        this.fullname = '';
    }else{
      this.fullname = this.name + value;
    }
    }
  },
  //use with event binding OR data binding
  //data binding: method is executed for every re-render cycle of component
  //used for data that needs to be reevaluated all the time
  methods: {
    resetInput(){
      this.name = "";
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    }
  }
});

app.mount('#events');
