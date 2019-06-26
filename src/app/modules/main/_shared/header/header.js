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
    }
  }
}