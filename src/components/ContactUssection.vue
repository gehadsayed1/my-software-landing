<template>
  <section class="bg-orange-50 py-20">
    <div class="container mx-auto px-6">
      <!-- Title -->
      <div class="text-center mb-12">
        <h2 class="text-4xl font-extrabold text-indigo-900 mb-4">
          Get in touch!
        </h2>
        <p class="text-gray-600 text-lg">
          Contact us for a quote, help or to join the team.
        </p>
      </div>

      <!-- Contact Info -->
      <div
        class="flex flex-col md:flex-row justify-center items-center gap-6 mb-14"
      >
        <div
          class="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow hover:shadow-lg transition"
        >
          <div class="text-primary text-2xl mb-2">
            <i class="fas fa-map-marker-alt"></i>
          </div>
          <p class="text-gray-800">102 Street 2714 Don</p>
        </div>
        <div
          class="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-lg border-2 border-primary"
        >
          <div class="text-primary text-2xl mb-2">
            <i class="fas fa-phone-alt"></i>
          </div>
          <p class="text-gray-800 cursor-pointer">+02 1234 567</p>
        </div>
        <div
          class="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow hover:shadow-lg transition"
        >
          <div class="text-primary text-2xl mb-2">
            <i class="fas fa-envelope"></i>
          </div>
          <p class="text-gray-800">hello@flowbase.com</p>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="max-w-4xl mx-auto bg-white rounded-2xl p-8">
        <form @submit.prevent="submitForm">
          <div class=" ">
            <div class="grid md:grid-cols-2 gap-6">
              <!-- Name -->
              <div>
                <label class="block text-gray-700 font-semibold mb-1"
                  >Your Name</label
                >
                <div class="relative">
                  <i
                    class="fas fa-user absolute top-3.5 left-4 text-gray-400"
                  ></i>
                  <input
                    v-model="form.name"
                    type="text"
                    required
                    placeholder="Your Name"
                    class="pl-10 w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
              </div>

              <!-- Email -->
              <div>
                <label class="block text-gray-700 font-semibold mb-1"
                  >Mail</label
                >
                <div class="relative">
                  <i
                    class="fas fa-envelope absolute top-3.5 left-4 text-gray-400"
                  ></i>
                  <input
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    class="pl-10 w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
              </div>
            </div>

            <!-- Phone -->
            <!-- <div>
              <label class="block text-gray-700 font-semibold mb-1">Phone</label>
              <div class="relative">
                <i
                  class="fas fa-phone absolute top-3.5 left-4 text-gray-400"
                ></i>
                <input
                  v-model="form.phone"
                  type="text"
                  placeholder="+20 123456789"
                  class="pl-10 w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary outline-none"
                />
              </div>
            </div> -->

            <!-- Message -->
            <div>
              <label class="block text-gray-700 font-semibold mb-1">
                Message
              </label>
              <textarea
                v-model="form.message"
                rows="5"
                required
                placeholder="Write your message here..."
                class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary outline-none"
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            class="mt-6 w-60 mx-auto bg-primary flex items-center justify-center text-white font-bold py-3 rounded-lg hover:bg-primary transition transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  phone: "",
  message: "",
});

function submitForm() {
  alert("Form submitted!");
  form.value = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
}
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css");
</style>
