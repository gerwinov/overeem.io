<template>
  <div>
    <div class="px-8 sm:px-6 md:px-10 mt-24 lg:mt-32 mb-4">
      <h1 class="text-3xl xl:text-4xl font-bold text-oio-black">Experience and courses</h1>
    </div>

    <VueProjectTimeline :projects="experience" />
  </div>
</template>

<script>
  import VueProjectTimeline from '@gerwinov/vue-project-timeline'
  import { experience } from '@/assets/data/experience'

  export default {
    name: 'ExperienceSection',

    components: {
      VueProjectTimeline
    },

    data () {
      return {
        experience: experience
      }
    }
  }
</script>
