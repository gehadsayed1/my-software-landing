<template>
  <section
    class="bg-img md:h-[70vh] text-center px-4 md:px-20 py-10 flex flex-col-reverse md:flex-row items-center justify-between bg-white"
  >
    <!-- Content -->
    <div class="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
      <h2 class="text-2xl md:text-5xl font-bold mb-4 text-primary">
        Building the Future with Code
      </h2>
      <p class="text-sm md:text-lg text-black font-semibold my-6 px-2 md:px-0 max-w-xl mx-auto md:mx-0">
        At CODEWAVE, we craft innovative software solutions that turn your ideas into reality.
        Whether it's web development, mobile apps, or digital transformation — we're your trusted
        partner in the tech world.
      </p>
      <button
        class="bg-gray-200 shadow-xl mt-5 hover:shadow-2xl rounded-2xl text-primary px-8 py-3 font-semibold hover:bg-gray-100 transition"
      >
        Get Started
      </button>
    </div>

    <!-- Image -->
    <div class="w-full md:w-1/2 flex justify-center">
      <img
   
        src="../assets/undraw_programming_65t2.png"
        alt="Programming Illustration"
        class="w-52 md:w-96"
      />
    </div>
  </section>
</template>
<script setup>

</script>
<style scoped>
.bg-img {
  background-image: url("../assets/backgroundHero.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
}</style>