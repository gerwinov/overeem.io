<template>
  <div class="flex flex-wrap-reverse sm:flex-wrap">
    <div class="flex w-full sm:w-3/5">
      <p class="text-xl sm:text-lg lg:text-xl xl:text-2xl font-source italic leading-normal max-w-lg my-8 sm:my-4 md:my-6 lg:my-8 mx-8 sm:mx-6 md:mx-10">
        “I am an all-round developer who is not just technically skilled, but I also have an analytical mind, I'm a fast learner and have excellent communication skills. Therefore I reside best in an agile environment working in a multidisciplinary team.”
      </p>
    </div>
    <div class="flex self-start w-full sm:w-2/5 bg-oio-brown">
      <div class="flex justify-around items-center my-8 sm:my-4 md:my-6 lg:my-8 w-full">
        <a class="leading-none" href="mailto:gerwin@overeem.io">
          <img class="h-8 lg:h-10 xl:h-12" src="@/assets/img/icons/email.svg" alt="linkedin">
        </a>
        <a class="leading-none" href="https://www.linkedin.com/in/gerwinovereem" rel="noreferrer nofollow" target="_blank">
          <img class="h-8 lg:h-10 xl:h-12" src="@/assets/img/icons/linkedin.svg" alt="linkedin">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutContactSection',
}
</script>
