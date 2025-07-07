<template>
  <section class="py-16 bg-gray-100 text-gray-800" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
    <div class="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 bg-white shadow-lg rounded-lg p-8">

      <!-- Contact Info -->
      <div class="space-y-6">
        <h2 class="text-4xl font-bold text-primary">{{ $t('contact.title') }}</h2>
        <p class="text-lg text-gray-600">{{ $t('contact.subtitle') }}</p>

        <div class="space-y-4 text-gray-700">
          <div class="flex items-start gap-4">
            <i class="fas fa-map-marker-alt text-primary text-xl mt-1"></i>
            <span>{{ $t('contact.address') }}</span>
          </div>
          <a href="https://wa.me/966567844965" target="_blank" class="flex items-start gap-4 hover:underline">
            <i class="fab fa-whatsapp text-green-500 text-xl mt-1"></i>
            <span>0567844965</span>
          </a>
          <div class="flex items-start gap-4">
            <i class="fas fa-envelope text-primary text-xl mt-1"></i>
            <span>sherifbrooklyn@gmail.com</span>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <form @submit.prevent="submitForm" class="space-y-5">
        <div>
          <label class="block font-medium mb-1">{{ $t('contact.name') }}</label>
          <input
            v-model="form.name"
            required
            type="text"
            :placeholder="$t('contact.placeholderName')"
            class="w-full rounded-md border-gray-300 p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label class="block font-medium mb-1">{{ $t('contact.email') }}</label>
          <input
            v-model="form.email"
            required
            type="email"
            :placeholder="$t('contact.placeholderEmail')"
            class="w-full rounded-md border-gray-300 p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label class="block font-medium mb-1">{{ $t('contact.message') }}</label>
          <textarea
            v-model="form.message"
            required
            rows="4"
            :placeholder="$t('contact.placeholderMessage')"
            class="w-full rounded-md border-gray-300 p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
        </div>

        <button
          type="submit"
          class="bg-primary hover:bg-blue-800 text-white font-medium py-3 rounded-md w-full flex justify-center items-center gap-2 transition duration-200"
        >
          <span v-if="!loading">{{ $t('contact.send') }}</span>
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

        <p v-if="success" class="text-green-600 font-semibold text-center mt-2">{{ $t('contact.success') }}</p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()

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
      body: JSON.stringify(form.value)
    })

    form.value = { name: '', email: '', message: '' }
    success.value = true
  } catch (err) {
    alert(t('contact.sendFail'))
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.bg-primary {
  background-color: #1e3a8a;
}
.text-primary {
  color: #1e3a8a;
}
</style>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
</style>
