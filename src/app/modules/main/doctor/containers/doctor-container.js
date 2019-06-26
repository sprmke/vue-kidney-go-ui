import Header from '@/app/modules/main/_shared/header/header.vue';
import DoctorSummary from '@/app/modules/main/doctor/components/doctor-summary/doctor-summary.vue';
import DoctorBloodTests from '@/app/modules/main/doctor/components/doctor-blood-tests/doctor-blood-tests.vue';
import DoctorDialysis from '@/app/modules/main/doctor/components/doctor-dialysis/doctor-dialysis.vue';

export default {
  name: 'DoctorContainer',
  components: {
    Header,
    DoctorSummary,
    DoctorBloodTests,
    DoctorDialysis
  },
  data() {
    return {
      requestFields: {
        hospital: {
            tdClass: 'w-25'
        },
        message: {
            tdClass: ''
        },
        progressBar: {
            tdClass: 'w-50'
        },
        status: {
            tdClass: ''
        }
      },
      requestItems: [
        { hospital: 'Hospital Zadar - Zadar, Crotia', message: '<i class="fa fa-envelope-o" aria-hidden="true"></i>', progressBar: '{"value": 45, "max": 100, "variant": "primary"}', status: 'Pending' },
        { hospital: 'Hospital Zadar - Zadar, Crotia', message: '', progressBar: '{"value": 100, "max": 100, "variant": "success"}', status: 'Success' },
        { hospital: 'Hospital Zadar - Zadar, Crotia', message: '', progressBar: '{"value": 0, "max": 100, "variant": "danger"}', status: 'Failed' }
      ],
      historyItems: [
        {
          hospital: 'Hospital Zadar - Zadar, Crotia',
          html: '<span class="fa fa-star mr-1 checked"></span><span class="fa fa-star mr-1 checked"></span><span class="fa fa-star mr-1 checked"></span><span class="fa fa-star mr-1"></span><span class="fa fa-star mr-1"></span>'
        },
        {
          hospital: 'Hospital Zadar - Zadar, Crotia',
          html: '<span class="fa fa-star mr-1 checked"></span><span class="fa fa-star mr-1 checked"></span><span class="fa fa-star mr-1 checked"></span><span class="fa fa-star mr-1"></span><span class="fa fa-star mr-1"></span>'
        },
        {
          hospital: 'Hospital Zadar - Zadar, Crotia',
          html: '<span class="fa fa-star mr-1 checked"></span><span class="fa fa-star mr-1 checked"></span><span class="fa fa-star mr-1 checked"></span><span class="fa fa-star mr-1"></span><span class="fa fa-star mr-1"></span>'
        }
      ]
    }
  },
  methods: {
    getProgressBarValue(data) {
      if (data) {
        const parsedJson = JSON.parse(data);
        return parsedJson;
      }
      return {value: 0, max: 100}
    }
  }
}
