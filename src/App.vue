<template>
  <div id="app" >
    <banner-section />

    <about-contact-section />
  </div>
</template>

<script>
  import BannerSection from './components/sections/BannerSection'
  import AboutContactSection from './components/sections/AboutContactSection'

  export default {
    name: 'App',

    components: {
      BannerSection,
      AboutContactSection
    }
  }
</script>

<style src="./styles/main.css"></style>
