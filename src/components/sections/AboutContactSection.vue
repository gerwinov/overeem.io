<template>
  <div class="flex flex-wrap-reverse sm:flex-wrap">
    <div class="flex w-full sm:w-3/5">
      <p class="text-xl sm:text-lg lg:text-xl xl:text-2xl font-source italic leading-normal max-w-lg my-8 sm:my-4 md:my-6 lg:my-8 mx-8 sm:mx-6 md:mx-10">
        “Ik ben een all-round developer. Ik ben analytisch sterk, kan zeer snel nieuwe kennis opdoen en beschik over goede communicatieve vaardigheden. Hierdoor heb ik in veel verschillende projecten een waardevolle bijdrage kunnen leveren. Ik hou van werken aan technisch uitdagende projecten en doe dit het liefst samen met een team.”
      </p>
    </div>
    <div class="flex self-start w-full sm:w-2/5 bg-oio-brown" @mouseleave="onlyPhone = onlyMail = false">
      <div class="flex justify-around items-center my-8 sm:my-4 md:my-6 lg:my-8 w-full">
        <span class="leading-none" v-if="!onlyMail" @click="clickPhone">
          <img class="h-8 lg:h-10 xl:h-12 cursor-pointer" src="@/assets/img/icons/whatsapp.svg" alt="whatsapp">
        </span>
        <span class="text-white max-w-15 sm:max-w-xxs md:max-w-15 font-light text-md sm:text-xs md:text-lg" v-if="onlyPhone">Stuur mij een e-mail om telefonisch in contact te komen</span>

        <span class="leading-none" v-if="!onlyPhone" @click="clickMail">
          <img class="h-8 lg:h-10 xl:h-12 cursor-pointer" src="@/assets/img/icons/email.svg" alt="email">
        </span>
        <a class="text-xl text-white no-underline font-light" href="mailto:gerwin@overeem.io" v-if="onlyMail">gerwin@overeem.io</a>

        <a class="leading-none" href="https://www.linkedin.com/in/gerwinovereem" rel="noreferrer nofollow" target="_blank" v-if="!onlyMail && !onlyPhone" @click="trackClick('linkedin')">
          <img class="h-8 lg:h-10 xl:h-12" src="@/assets/img/icons/linkedin.svg" alt="linkedin">
        </a>

        <a class="leading-none" href="https://github.com/gerwinov" rel="noreferrer nofollow" target="_blank" v-if="!onlyMail && !onlyPhone" @click="trackClick('github')">
          <img class="h-8 lg:h-10 xl:h-12" src="@/assets/img/icons/github.svg" alt="github">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutContactSection',

  data () {
    return {
      onlyPhone: false,
      onlyMail: false
    }
  },

  methods: {
    clickPhone () {
      this.onlyPhone = !this.onlyPhone
      if(this.onlyPhone) this.trackClick('phone')
    },

    clickMail () {
      this.onlyMail = !this.onlyMail
      if(this.onlyMail) this.trackClick('mail')
    },

    trackClick (channel) {
      this.$matomo.trackEvent('Contact', 'click', channel)
    }
  }
}
</script>
