<template>
  <div>
    <div class="px-8 sm:px-6 md:px-10 mt-12 lg:mt-24 mb-4">
      <h1 class="text-3xl xl:text-4xl font-bold text-oio-black">Werkervaring en opleidingen</h1>
    </div>

    <VueProjectTimeline :projects="projects" />
  </div>
</template>

<script>
  import VueProjectTimeline from '@gerwinov/vue-project-timeline'

  export default {
    name: 'ExperienceSection',

    components: {
      VueProjectTimeline
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
