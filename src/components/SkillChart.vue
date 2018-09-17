<script>
import { PolarArea } from 'vue-chartjs'
import inViewport from 'vue-in-viewport-mixin'

export default {
  extends: PolarArea,

  mixins: [inViewport],

  props: {
    skills: {
      required: true,
      type: Object
    }
  },

  data () {
    return {
      chartRendered: false,
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

  watch: {
    'inViewport.fully': function(visible) {
      if (visible && !this.chartRendered) {
        this.renderChart(this.skills, this.options)
        this.chartRendered = true
      }
    }
  },

  mounted () {
    this.renderChart(this.skills, this.options)
  }
}
</script>
