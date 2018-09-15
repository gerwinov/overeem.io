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

  mounted () {
    this.renderChart(this.skills)
  }
}
</script>
