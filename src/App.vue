<template>
  <div id="app" class="container mx-auto">
    <VueProjectTimeline :projects="projects" />
  </div>
</template>

<script>
import VueProjectTimeline from '@gerwinov/vue-project-timeline';

export default {
  name: 'app',

  components: {
    VueProjectTimeline
  },

  data () {
    return {
      projects: [
        {
          title: 'Ebicus',
          startYear: 2010,
          endYear: 2014
        },
        {
          title: 'Foryard',
          startYear: 2013,
          endYear: 2018
        }
      ]
    }
  }
}
</script>

<style>

</style>

<style src="./styles/main.css"></style>