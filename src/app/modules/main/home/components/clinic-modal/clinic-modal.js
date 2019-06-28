import AppDatepicker from 'vuejs-datepicker';

export default {
  components: {
    AppDatepicker
  },

  props: {
    title: {
      default: 'Clinic Name',
      type: String
    }
  },

  data () {
    return {
      highlighted: {
        dates: []
      }
    }
  },

  methods: {
    setDialysis(date) {
      const newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate())
      this.highlighted.dates.push(newDate);
    },
    onSendRequest() {
      this.$router.push({ path: '/patient/1' })
    }
  }
}