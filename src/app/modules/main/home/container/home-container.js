import LoginModal from '../components/login-modal/login-modal.vue'
import SignupModal from '../components/signup-modal/signup-modal.vue'
import ClinicModal from '../components/clinic-modal/clinic-modal.vue'

export default {
  components: {
      LoginModal,
      SignupModal,
      ClinicModal
  },

  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      show: true,
      markers: [],
      place: null
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
      this.$router.push({ path: '/profile' })
    },
    setPlace(place) {
      this.place = place
    },

    usePlace(place) {
      if (this.place) {
        this.markers.push({
          position: {
            lat: this.place.geometry.location.lat(),
            lng: this.place.geometry.location.lng(),
          }
        })

        this.place = null;

      }

    }

  }
}