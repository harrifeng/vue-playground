var app = new Vue({
  el: '#app',
  data: {
    output: '',
    message: 'Hello World Vue!'
  },
  methods: {
    getFormValues () {
      this.output = this.$refs.my_input.value
    }
  }
})
