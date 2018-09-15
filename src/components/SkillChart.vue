<script>
import { PolarArea } from 'vue-chartjs'

export default {
  extends: PolarArea,

  props: {
    skills: {
      required: true,
      type: Object
    }
  },

  data () {
    return {
      options: {
        maintainAspectRatio: false,
        legend: {
          labels: {
            boxWidth: 15,
            padding: 15,
            fontFamily: 'Source Sans Pro, sans-serif'
          }
        },
        tooltips: {
          bodyFontFamily: 'Oxygen, sans-serif',
          cornerRadius: 0,
          xPadding: 10,
          yPadding: 10
        }
      }
    }
  },

  mounted () {
    this.renderChart(this.skills, this.options)
  }
}
</script>
