<template>
  <nav class="sticky top-0 z-50 bg-white flex px-4 md:px-10 border-b border-blue-200 md:shadow-lg shadow-2xl items-center justify-between">
    <!-- Logo -->
    <div class="text-lg font-bold py-4">
      <img class="w-28 h-12" src="../assets/logo.png" alt="Logo" />
    </div>

    <!-- Burger Icon -->
    <div class="md:hidden text-gray-700 cursor-pointer" @click="toggleMenu">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24">
        <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </div>

    <!-- Menu Items -->
    <ul :class="['md:flex md:space-x-2 md:static absolute top-full left-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 ease-in-out', isMenuOpen ? 'block' : 'hidden']">
      <li>
        <a href="#home" class="nav-link block md:inline-block p-4 hover:text-blue-600">Home</a>
      </li>
      <li>
        <a href="#projects" class="nav-link block md:inline-block p-4 hover:text-blue-600">Products</a>
      </li>
      <li>
        <a href="#solutions" class="nav-link block md:inline-block p-4 hover:text-blue-600">Solutions</a>
      </li>
      <li>
        <a href="#team" class="nav-link block md:inline-block p-4 hover:text-blue-600">Team</a>
      </li>
      <li><a href="#about" class="nav-link block md:inline-block p-4 hover:text-blue-600">About Us</a></li>
      <li><a href="#contact" class="nav-link block md:inline-block p-4 hover:text-blue-600">Contact Us</a></li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
});
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
.nav-link.active {
  color: #2563eb;
  font-weight: bold;
  border-bottom: 2px solid #2563eb;
}
@media (min-width: 768px) {
  .parent:hover .child {
    opacity: 1;
    height: auto;
    overflow: visible;
    transform: translateY(0);
  }
  .child {
    opacity: 0;
    height: 0;
    overflow: hidden;
    transform: translateY(-10%);
    transition: all 0.3s ease;
  }
}
</style>
