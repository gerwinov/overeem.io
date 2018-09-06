<template>
  <div id="app" >
    <div class="flex flex-wrap">
      <div class="flex w-full sm:w-1/2 h-128 bg-oio-yellow">
        <div class="flex">
          <h1 class="text-white text-4xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl font-bold">Gerwin Overeem</h1>
        </div>
      </div>
      <div class="flex w-full sm:w-1/2 h-128 bg-oio-banner">
      </div>
    </div>
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
  .bg-oio-banner {
    background-image: url("~@/assets/img/banner.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
</style>

<style src="./styles/main.css"></style>