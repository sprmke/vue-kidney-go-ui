export default {
  data () {
    return {
      email: ''
    }
  },

  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      if (this.email) {
        this.$router.push({ path: '/doctor/1' })
      } else {
        this.$router.push({ path: '/patient/1' })
      }
    }
  }
}