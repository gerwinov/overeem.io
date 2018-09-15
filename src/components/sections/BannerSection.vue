<template>
  <div class="flex flex-wrap">
    <div class="flex w-full sm:w-1/2 h-96 lg:h-128 bg-oio-yellow px-8 sm:px-6 md:px-10">
      <div class="flex flex-col justify-between py-10">
        <div>
          <h1 class="text-white text-3xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-7xl font-bold">Gerwin Overeem</h1>
          <h2 class="text-white text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-source font-light">Frontend developer</h2>
        </div>
        <div>
          <div class="flex items-center my-4">
            <img class="h-8 sm:h-6 md:h-8 lg:h-10 xl:h-10" src="@/assets/img/icons/location.svg" alt="location_marker">
            <h3 class="text-white text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-source ml-6">Amsterdam</h3>
          </div>
          <div class="flex items-center">
            <img class="h-8 sm:h-6 md:h-8 lg:h-10 xl:h-10" src="@/assets/img/icons/cake.svg" alt="birthday_cake">
            <h3 class="text-white text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-source ml-5 lg:ml-4">10 december 1989</h3>
          </div>
        </div>
      </div>
    </div>

    <div class="flex w-full sm:w-1/2 h-96 lg:h-128 bg-oio-banner">
      <!-- CSS Background loaded here -->
    </div>
  </div>
</template>

<style scoped>
  .bg-oio-banner {
    background-image: url("~@/assets/img/banner.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
</style>
