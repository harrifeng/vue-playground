var app = new Vue({
  el: '#app',
  data: {
    output: '',
    message: 'Hello!'
  },
  methods: {
    getFormValues () {
      body = [{"member_id": parseInt(this.$refs.my_input.value)}]
      console.log(body)

      this.$http.post('member_info', body).then(response => {
        let ret = response.body;
        console.log(ret.Data[0].member_id)
        if (ret.code != 0 ) {
          this.output = {}
          this.output.id = -1
          this.output.mobile = ""
          this.output.friends = []
        } else {
          this.output = {}
          this.output.member_id = ret.Data[0].member_id
          this.output.telephone = ret.Data[0].telephone
          this.output.friends = [12, 34, 56]
          console.log("output is")
          console.log(this.output)
        }
      }, response => {
      });
    }
  }
})
