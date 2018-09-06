<template>
  <div id="app">
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style src="./styles/main.css"></style>