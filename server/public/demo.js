var app = new Vue({
  el: '#app',
  data: {
    output: '',
    message: 'Hello World Vue!'
  },
  methods: {
    getFormValues () {
      body = [{
        'member_id': parseInt(this.$refs.my_input.value)
      }]
      this.$http.post('member_info', body).then(response => {
        let ret = response.body;
        console.log(ret.code)
        if (ret.code != 0 ) {
          this.output = "Member Not existed"
        } else {
          this.output = ret.Data[0]
        }
      }, response => {
        this.output = 'error return'
      });
    }
  }
})
