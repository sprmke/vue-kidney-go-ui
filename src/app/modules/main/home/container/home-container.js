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
      markers: [
        {
          position: { lat: 25.2048, lng: 55.2708 }
        }
      ],
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
      this.usePlace();
    },

    usePlace(place) {
      if (this.place) {
        const position = {
          lat: this.place.geometry.location.lat(),
          lng: this.place.geometry.location.lng(),
        }
        this.markers = [];
        this.markers.push({
          position: position
        })
        this.$refs.mapRef.panTo(position);
        this.place = null;
      }
    }
  }
}