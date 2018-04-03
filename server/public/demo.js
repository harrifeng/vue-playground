var app = new Vue({
  el: '#app',
  data: {
    outputs: [],
    message: 'Hello World Vue!'
  },
  methods: {
    getFormValues () {
      body = [
        {
          'member_id': parseInt(this.$refs.my_input.value)
        },
        {
          'member_id': parseInt(this.$refs.my_input.value)
        }
      ]
      this.$http.post('member_info', body).then(response => {
        let ret = response.body;
        console.log(ret.code)
        if (ret.code != 0 ) {
          this.outputs = []
        } else {
          this.outputs = ret.Data
        }
      }, response => {
        this.outputs = []
      });
    }
  }
})
