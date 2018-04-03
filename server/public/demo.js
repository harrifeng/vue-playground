var app = new Vue({
  el: '#app',
  data: {
    output: '',
    message: 'Hello World Vue!'
  },
  methods: {
    getFormValues () {
      body = {}
      this.$http.post('member_info', body).then(response => {
        let body = response.body;
        console.log(body.code)
        if (body.code != 0 ) {
          this.output = "Member Not existed"
        } else {
          this.output = body.Data
        }
      }, response => {
        this.output = 'error return'
      });
    }
  }
})
