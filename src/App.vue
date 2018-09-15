<template>
  <div id="app" >
    <div class="flex flex-wrap">
      <div class="flex w-full sm:w-1/2 h-96 md:h-128 sm:justify-center bg-oio-yellow px-8 sm:px-0">
        <div class="flex flex-col justify-between py-10">
          <div>
            <h1 class="text-white text-4xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl font-bold">Gerwin Overeem</h1>
            <h2 class="text-white text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-source font-light">Frontend developer</h2>
          </div>
          <div>
            <div class="flex items-center my-4">
              <img class="h-8 sm:h-6 md:h-8 lg:h-10 xl:h-12" src="@/assets/img/icons/location.svg" alt="location_marker">
              <h3 class="text-white text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-source ml-6">Amsterdam</h3>
            </div>
            <div class="flex items-center">
              <img class="h-8 sm:h-6 md:h-8 lg:h-10 xl:h-12" src="@/assets/img/icons/cake.svg" alt="birthday_cake">
              <h3 class="text-white text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-source ml-5 lg:ml-4">10 december 1989</h3>
            </div>
          </div>
        </div>
      </div>

      <div class="flex w-full sm:w-1/2 h-96 md:h-128 bg-oio-banner">
        <!-- CSS Background loaded here -->
      </div>
    </div>

    <div class="flex flex-wrap-reverse sm:flex-wrap">
      <div class="flex w-full sm:w-3/5 py-8 sm:py-4 md:py-6 lg:py-8 px-8 sm:px-6 md:px-10">
        <p class="text-2xl sm:text-xl lg:text-2xl font-source font-light italic leading-tight">
          “Ik ben een all-round developer. Ik ben analytisch sterk, kan zeer snel nieuwe kennis opdoen en beschik over goede communicatieve vaardigheden. Hierdoor heb ik in veel verschillende projecten een waardevolle bijdrage kunnen leveren. Ik hou van werken aan technisch complexe issues en doe dit het liefst samen met een team.”
        </p>
      </div>
      <div class="flex self-start justify-around items-center w-full sm:w-2/5 bg-oio-brown py-8 sm:py-4 md:py-6 lg:py-8">
        <a href="tel:+31611475498">
          <img class="h-10 sm:h-8 md:h-10 lg:h-12" src="@/assets/img/icons/whatsapp.svg" alt="whatsapp">
        </a>
        <a href="mailto:gerwin@overeem.io">
          <img class="h-10 sm:h-8 md:h-10 lg:h-12" src="@/assets/img/icons/email.svg" alt="email">
        </a>
        <a href="https://www.linkedin.com/in/gerwinovereem" rel="noreferrer nofollow">
          <img class="h-10 sm:h-8 md:h-10 lg:h-12" src="@/assets/img/icons/linkedin.svg" alt="linkedin">
        </a>
        <a href="https://github.com/gerwinov" rel="noreferrer nofollow">
          <img class="h-10 sm:h-8 md:h-10 lg:h-12" src="@/assets/img/icons/github.svg" alt="github">
        </a>
      </div>
    </div>

    <div class="px-8 sm:px-6 md:px-10 mt-12 lg:mt-24 mb-4">
      <h1 class="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold text-oio-black">Werkervaring en opleidingen</h1>
    </div>

    <VueProjectTimeline :projects="projects" />

    <div class="flex flex-wrap-reverse sm:flex-wrap">
      <div class="flex w-full sm:w-3/5 flex-wrap flex-col">
        <div class="flex py-8 sm:py-4 md:py-6 lg:py-8 px-8 sm:px-6 md:px-10">
          <h1 class="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold text-oio-black">Vaardigheden</h1>
        </div>
        <div class="flex w-full lg:w-3/4 xl:w-2/3 px-8 sm:px-6 md:px-10 mb-8">
          <div class="relative h-full w-full">
            <skill-chart></skill-chart>
          </div>
        </div>
      </div>

      <div class="flex w-full sm:w-2/5 flex-wrap flex-col">
        <div class="flex py-8 sm:py-4 md:py-6 lg:py-8 px-8 sm:px-6 md:px-10">
          <h1 class="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold text-oio-black">Hobby's</h1>
        </div>
        <div class="flex flex-wrap flex-col py-8 sm:py-4 md:py-6 lg:py-8 px-8 sm:px-6 md:px-10 bg-oio-grey flex-grow">
          <div class="flex w-full items-center">
            <div class="flex">
              <img class="h-16" src="@/assets/img/bierenbenzine.png" alt="bier_en_benzine_logo">
            </div>
            <div class="flex flex-col flex-wrap ml-3">
              <h3 class="text-white text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Reizen</h3>
              <h4 class="text-white text-lg sm:text-sm md:text-md lg:text-lg">Zie <a class="font-oxygen" href="https://bierenbenzine.nl" rel="noreferrer nofollow">bierenbenzine.nl</a></h4>
            </div>
          </div>
          <div class="flex w-full items-center pt-8">
            <div class="flex">
              <img class="h-16" src="@/assets/img/sport.svg" alt="footbal">
            </div>
            <div class="flex flex-col flex-wrap ml-3">
              <h3 class="text-white text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Sporten</h3>
              <h4 class="text-white text-lg sm:text-sm md:text-md lg:text-lg">Wielrennen, boksen, hardlopen</h4>
            </div>
          </div>
          <div class="flex w-full items-center pt-8">
            <div class="flex">
              <img class="h-16" src="@/assets/img/motorbike.svg" alt="motorbike">
            </div>
            <div class="flex flex-col flex-wrap ml-3">
              <h3 class="text-white text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Motoren</h3>
              <h4 class="text-white text-lg sm:text-sm md:text-md lg:text-lg">Rijden, sleutelen en er over praten</h4>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center w-full h-16 md:h-32 bg-oio-brown py-4">
      <span class="text-white text-sm">&copy; Gerwin Overeem - 2018</span>
    </div>
  </div>
</template>

<script>
import VueProjectTimeline from '@gerwinov/vue-project-timeline';
import SkillChart from './components/SkillChart'

export default {
  name: 'app',

  components: {
    VueProjectTimeline, SkillChart
  },

  data () {
    return {
      projects: [
        {
          title: 'Example',
            subtitle: 'Role',
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
            image: `https://orig00.deviantart.net/e475/f/2011/338/e/f/the_green_circle___flag___logo_by_exxp0-d4i51ve.png`,
            startYear: 2010,
            endYear: 2018,
            color: 'blue'
        },
        {
          title: 'Example 2',
            subtitle: 'Role 2',
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
            image: `https://orig00.deviantart.net/e475/f/2011/338/e/f/the_green_circle___flag___logo_by_exxp0-d4i51ve.png`,
            startYear: 2017,
            endYear: 2018,
            color: 'green'
        },
        {
          title: 'Example 2',
            subtitle: 'Role 2',
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
            image: `https://orig00.deviantart.net/e475/f/2011/338/e/f/the_green_circle___flag___logo_by_exxp0-d4i51ve.png`,
            startYear: 2017,
            endYear: 2018,
            color: 'green'
        },
        {
          title: 'Example 2',
            subtitle: 'Role 2',
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
            image: `https://orig00.deviantart.net/e475/f/2011/338/e/f/the_green_circle___flag___logo_by_exxp0-d4i51ve.png`,
            startYear: 2017,
            endYear: 2018,
            color: 'green'
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