export default {
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      this.$router.push({ path: '/profile' })
    }
  }
}