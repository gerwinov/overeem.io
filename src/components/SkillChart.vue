<script>
import { PolarArea } from 'vue-chartjs'

export default {
  extends: PolarArea,

  data () {
    return {
      datacollection: {
        datasets: [{
          data: [10, 20, 30],
          backgroundColor: ["rgb(255, 99, 132)", "#F7B93A", "blue"]
        }],

        labels: [
          'Red',
          'Yellow',
          'Blue'
        ],
      },
    }
  },

  mounted () {
    this.renderChart(this.datacollection)
  }
}
</script>
