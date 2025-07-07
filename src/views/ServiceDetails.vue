<template>
  <section
    class="py-20 px-6 md:px-16 bg-white text-gray-800"
    :dir="isArabic ? 'rtl' : 'ltr'"
  >
    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
      <!-- Left Column: Service Info -->
      <div>
        <h1 class="text-4xl font-bold text-primary mb-6">
          {{ t(`services.${serviceKey}.title`) }}
        </h1>
        <p class="text-lg mb-4">
          {{ t(`services.${serviceKey}.description`) }}
        </p>

        <p class="text-md text-gray-700 mb-6">
          {{ t(`services.${serviceKey}.details`) }}
        </p>

        <div class="space-y-4 mb-8">
          <div
            v-for="(point, index) in featureList"
            :key="index"
            class="flex items-start gap-4 bg-gray-50 p-4 rounded"
          >
            <!-- Icon -->
            <div
              class="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <!-- Text -->
            <div class="text-gray-700 text-sm sm:text-base">{{ point }}</div>
          </div>
        </div>
      </div>

      <!-- Right Column: Form -->
      <div class="bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold text-primary mb-4">
          {{ t('serviceForm.title') }}
        </h2>

        <form @submit.prevent="submitForm" class="space-y-4">
          <div>
            <label class="block mb-1 font-medium">{{ t('serviceForm.serviceName') }}</label>
            <input
              v-model="form.service"
              type="text"
              readonly
              class="w-full px-4 py-2 border rounded bg-gray-100 text-gray-700"
            />
          </div>

          <div>
            <label class="block mb-1 font-medium">{{ t('serviceForm.name') }}</label>
            <input
              v-model="form.name"
              type="text"
              required
              class="w-full px-4 py-2 border rounded"
              :placeholder="t('serviceForm.namePlaceholder')"
            />
          </div>

          <div>
            <label class="block mb-1 font-medium">{{ t('serviceForm.email') }}</label>
            <input
              v-model="form.email"
              type="email"
              required
              class="w-full px-4 py-2 border rounded"
              :placeholder="t('serviceForm.emailPlaceholder')"
            />
          </div>

          <div>
            <label class="block mb-1 font-medium">{{ t('serviceForm.message') }}</label>
            <textarea
              v-model="form.message"
              rows="3"
              class="w-full px-4 py-2 border rounded"
              :placeholder="t('serviceForm.messagePlaceholder')"
            ></textarea>
          </div>

          <button
            type="submit"
            class="bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90 w-full"
          >
            {{ t('serviceForm.button') }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch, computed } from "vue"
import { useRoute } from "vue-router"
import { useI18n } from "vue-i18n"

const { t, locale } = useI18n()
const route = useRoute()

// Detect current language
const isArabic = computed(() => locale.value === 'ar')

// Get service key from URL
const serviceKey = route.query.service || ''

// Form state
const form = ref({
  service: "",
  name: "",
  email: "",
  message: "",
})

// Watch title and sync it to form
watch(
  () => t(`services.${serviceKey}.title`),
  (newTitle) => {
    form.value.service = newTitle
  },
  { immediate: true }
)

// Extract features array safely
const featureList = computed(() => {
  const raw = t(`services.${serviceKey}.features`, { returnObjects: true })
  return Array.isArray(raw) ? raw : []
})
console.log("serviceKey:", serviceKey)
console.log("features:", featureList.value)


// Submit form (demo)
function submitForm() {
  alert(t('serviceForm.success'))
  form.value.name = ''
  form.value.email = ''
  form.value.message = ''
}
</script>

<style scoped>
.bg-primary {
  background-color: var(--color-primary);
}
.text-primary {
  color: var(--color-primary);
}
</style>
