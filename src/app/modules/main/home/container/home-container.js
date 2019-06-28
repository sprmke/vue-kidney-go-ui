import LoginModal from '../components/login-modal/login-modal.vue'
import SignupModal from '../components/signup-modal/signup-modal.vue'
import ClinicModal from '../components/clinic-modal/clinic-modal.vue'
import Autocomplete from '../components/autocomplete/autocomplete.vue'

export default {
  components: {
    LoginModal,
    SignupModal,
    ClinicModal,
    Autocomplete
  },

  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      show: true,
      showClinicInfo: false,
      markers: [
        {
          position: { lat: 25.2048, lng: 55.2708 }
        }
      ],
      place: null,
      clinics: [
        {
          name: 'Dialysis Clinic Slovenia',
          position: { lat: 46.2469849, lng: 13.5770014 },
          address: 'Trg svobode 4, 5222 Kobarid, Slovenia',
          phone: '+386 820 51645',
          website: 'dializakobarid.si',
          image: 'https://geo1.ggpht.com/cbk?panoid=b09jX1mOwQUHvG4ei9z2-Q&output=thumbnail&cb_client=search.TACTILE.gps&thumb=2&w=408&h=240&yaw=25.548496&pitch=0&thumbfov=100'
        },
        {
          name: 'Dialysis Clinic Croatia',
          position: { lat: 45.0806929, lng: 13.6624391 },
          address: 'Naselje Monfiorenzo 8, 52210, Rovinj, Croatia',
          phone: '',
          website: 'poliklinika-hemodijaliza.hr',
          image: 'https://maps.gstatic.com/tactile/pane/default_geocode-1x.png'
        }
      ],
      clinicSelected: [{
        name: 'Clinic Name',
        position: {}
      }]
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
    },

    navigateToClinic(clinic) {
      if (clinic) {
        this.clinicSelected = this.clinics.filter(_clinic => _clinic.name.replace(/ /g, '').toLowerCase() === clinic.replace(/ /g, '').toLowerCase())
        this.markers.push({
          position: this.clinicSelected[0].position
        })
        this.$refs.mapRef.panTo(this.clinicSelected[0].position);
        this.showClinicInfo = true;
      } else {
        this.showClinicInfo = false;
      }
    },

    onMarkerClick() {
      this.$bvModal.show('clinic-modal');
      this.showClinicInfo = false;
    }
  }
}