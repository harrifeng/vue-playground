var app = new Vue({
  el: '#app',
  data: {
    outputs: [],
    message: 'Hello World Vue!'
  },
  methods: {
    getFormValues () {
      ids = this.$refs.my_input.value.split(',')
      body = []

      for (let i = 0; i < ids.length; i++) {
        body.push({"member_id": parseInt(ids[i])})
      }

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
