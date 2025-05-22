<script setup>
import AboutUsSection from "../components/AboutUsSection.vue";
import ContactUssection from "../components/ContactUssection.vue";
import Footer from "../components/Footer.vue";
import HeroSection from "../components/HeroSection.vue";
import Navbar from "../components/NaveBar.vue";
import ProjectsSection from "../components/ProjectsSection.vue";
import SolutionsSection from "../components/SolutionsSection.vue";
import TeamSection from "../components/TeamSection.vue";
import WhyChooseUsSection from "../components/WhyChooseUsSection.vue";
</script>

<template>
  <div class="min-h-screen bg-gray-50 text-gray-800">
    <!-- Header -->
  
      <Navbar />
  

    <!-- Hero Section -->
    <HeroSection id="home"/>

    <!-- About Us Section -->
    <AboutUsSection />

    <!-- Solutions Section -->
    <SolutionsSection id="Solutions"/>
    <!-- Why Choose Us Section -->
  <WhyChooseUsSection id="Choose"/>

    <!-- Projects Section -->
<ProjectsSection id="projects"/>

    <!-- Team Section -->
<TeamSection id="team"/>

<!-- Contact Us section -->
<ContactUssection id="contact"/>
<!-- Footer -->
<Footer/>






  </div>
</template>

<style scoped>
.bg-img {
  background-image: url("../assets/backgroundHero.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
}
/* Custom styles if needed */
.rounded-lg {
  border-radius: 0.5rem;
}
.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
.max-w-md {
  max-width: 28rem;
}
</style>
