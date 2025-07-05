<template>
  <section class="py-10 dark:bg-gray-100 dark:text-gray-900">
    <div class="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">

      <!-- Contact Info -->
      <div class="py-6 md:py-0 md:px-6">
        <h1 class="text-4xl font-bold">Get in touch</h1>
        <p class="pt-2 pb-4">Fill in the form to start a conversation</p>
        <div class="space-y-4">
          <p class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"
              class="w-5 h-5 mr-2 sm:mr-6">
              <path fill-rule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clip-rule="evenodd"></path>
            </svg>
            <span>Dubai, Deira, Port Said, Golden Business Centre, Office 206</span>
          </p>
          <a href="https://wa.me/966567844965" target="_blank" class="flex items-center hover:underline">
            <i class="fab fa-whatsapp w-5 h-5 mr-2 text-xl "></i>
            <span>0567844965</span>
          </a>
          <p class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"
              class="w-5 h-5 mr-2 sm:mr-6">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span>sherifbrooklyn@gmail.com</span>
          </p>
        </div>
      </div>

      <!-- Contact Form -->
      <form @submit.prevent="submitForm" class="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
        <label class="block">
          <span class="mb-1">Full name</span>
          <input v-model="form.name" required type="text" placeholder="Leroy Jenkins"
            class="block w-full rounded-md p-2 shadow-sm focus:ring focus:ring-opacity-75 dark:bg-gray-100" />
        </label>
        <label class="block">
          <span class="mb-1">Email address</span>
          <input v-model="form.email" required type="email" placeholder="leroy@jenkins.com"
            class="block w-full rounded-md p-2 shadow-sm focus:ring focus:ring-opacity-75 dark:bg-gray-100" />
        </label>
        <label class="block">
          <span class="mb-1">Message</span>
          <textarea v-model="form.message" required rows="3"
            class="block w-full rounded-md shadow p-3 focus:ring focus:ring-opacity-75 dark:bg-gray-100"></textarea>
        </label>

        <!-- Submit Button with Spinner -->
        <button type="submit"
          class="self-center px-10 py-1 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-primary text-white flex items-center justify-center gap-2 w-full">
          <span v-if="!loading">Submit</span>
          <span v-else>
            <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"></path>
            </svg>
          </span>
        </button>

        <!-- Success Message -->
        <p v-if="success" class="text-green-600 text-center font-semibold">Message sent successfully!</p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const loading = ref(false)
const success = ref(false)

const submitForm = async () => {
  loading.value = true
  success.value = false

  try {
    await fetch('https://formsubmit.co/ajax/sherifbrooklyn@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        message: form.value.message
      })
    })

    // Reset form + show success
    form.value = { name: '', email: '', message: '' }
    success.value = true
  } catch (err) {
    alert('Failed to send. Please try again later.')
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.bg-primary {
  background-color: #1e3a8a; /* Example blue */
}
</style>

<!-- FontAwesome for WhatsApp -->
<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
</style>

