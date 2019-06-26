export default {
  name: 'Header',
  data() {
    return {
      showProfile: false
    }
  },
  methods: {
    onShowProfile() {
      this.showProfile = !this.showProfile;
    },
    onLogout() {
      this.$router.push({ path: '/home' })
    },
    navigateTo(path) {
      this.$router.push({ path: '/' + path + '/1' })
    }
  }
}