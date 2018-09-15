<template>
  <div id="app" >
    <banner-section />

    <about-contact-section />

    <experience-section />

    <skills-hobby-section />

    <div class="flex justify-center items-center w-full h-8 bg-oio-brown">
      <span class="text-white text-sm">&copy; Gerwin Overeem - 2018</span>
    </div>
  </div>
</template>

<script>
  import BannerSection from './components/sections/BannerSection'
  import AboutContactSection from './components/sections/AboutContactSection'
  import ExperienceSection from './components/sections/ExperienceSection'
  import SkillsHobbySection from './components/sections/SkillsHobbySection'

  export default {
    name: 'App',

    components: {
      BannerSection,
      AboutContactSection,
      ExperienceSection,
      SkillsHobbySection
    }
  }
</script>

<style src="./styles/main.css"></style>
