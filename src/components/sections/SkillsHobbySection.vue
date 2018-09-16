<template>
  <div class="flex flex-wrap sm:flex-wrap">
    <div class="flex w-full sm:w-3/5 xl:w-2/3 flex-wrap flex-col">
      <div class="flex pb-6 pt-12">
        <h1 class="text-3xl xl:text-4xl font-bold text-oio-black mx-8 sm:mx-6 md:mx-10">Vaardigheden en methoden</h1>
      </div>
      <div class="flex w-full lg:w-3/4 xl:w-3/5 sm:mb-16">
        <div class="relative h-full w-full sm:mx-6 md:mx-10 ">
          <skill-chart :skills="skills"></skill-chart>
        </div>
      </div>
    </div>

    <div class="flex w-full sm:w-2/5 xl:w-1/3 flex-wrap flex-col">
      <div class="flex pb-6 pt-12 px-8 sm:px-0">
        <h1 class="text-3xl xl:text-4xl font-bold text-oio-black">Hobby's</h1>
      </div>
      <div class="flex flex-wrap flex-col py-8 sm:py-4 md:py-6 lg:py-8 px-8 sm:px-6 md:px-10 bg-oio-grey flex-grow">
        <div class="flex w-full items-center">
          <div class="flex w-1/4 xl:w-1/6 sm:justify-end">
            <img class="h-16" src="@/assets/img/bierenbenzine.png" alt="bier_en_benzine_logo">
          </div>
          <div class="flex w-3/4 xl:w-5/6 flex-col flex-wrap ml-3">
            <h3 class="text-white leading-tight text-2xl sm:text-xl lg:text-2xl">Reizen</h3>
            <h4 class="text-white text-md sm:text-xs lg:text-md">Zie <a class="font-oxygen" href="https://bierenbenzine.nl" rel="noreferrer nofollow" @click="trackClick">bierenbenzine.nl</a></h4>
          </div>
        </div>
        <div class="flex w-full items-center pt-8">
          <div class="flex w-1/4 xl:w-1/6 sm:justify-end">
            <img class="h-16" src="@/assets/img/sport.svg" alt="footbal">
          </div>
          <div class="flex w-3/4 xl:w-5/6 flex-col flex-wrap ml-3">
            <h3 class="text-white leading-tight text-2xl sm:text-xl lg:text-2xl">Sporten</h3>
            <h4 class="text-white text-md sm:text-xs lg:text-md">Wielrennen, boksen, hardlopen</h4>
          </div>
        </div>
        <div class="flex w-full items-center pt-8">
          <div class="flex w-1/4 xl:w-1/6 sm:justify-end">
            <img class="h-16" src="@/assets/img/motorbike.svg" alt="motorbike">
          </div>
          <div class="flex w-3/4 xl:w-5/6 flex-col flex-wrap ml-3">
            <h3 class="text-white leading-tight text-2xl sm:text-xl lg:text-2xl">Motoren</h3>
            <h4 class="text-white text-md sm:text-xs lg:text-md">Rijden, sleutelen en er over praten</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SkillChart from '@/components/SkillChart'
  import { skills } from '@/assets/data/skills'

  export default {
    name: 'SkillsHobbySection',

    components: {
      SkillChart
    },

    data () {
      return {
        skills: skills
      }
    },

    methods: {
      trackClick () {
        this.$matomo.trackEvent('Links', 'click', 'bierenbenzine')
      }
    }
  }
</script>
