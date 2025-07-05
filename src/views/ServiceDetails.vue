<template>
  <section class="py-20 px-6 md:px-16 bg-white text-gray-800">
    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
      <!-- Left Column: Service Info -->
      <div>
        <h1 class="text-4xl font-bold text-primary mb-6">
          {{ serviceData.title }}
        </h1>
        <p class="text-lg mb-4">
          {{ serviceData.description }}
        </p>

        <p class="text-md text-gray-700 mb-6">
          {{ serviceData.details }}
        </p>

        <div class="space-y-4 mb-8">
          <div
            v-for="point in serviceData.features"
            :key="point"
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

      <!-- Right Column: Form + Image -->
      <div class="bg-gray-50 p-6 rounded-lg shadow-md">
        <!-- <img
          src="../assets/serviceFormBanner.png"
          alt="Request Service Illustration"
          class="w-full h-48 object-contain mb-6 rounded"
        /> -->

        <h2 class="text-2xl font-bold text-primary mb-4">
          Request This Service
        </h2>

        <form @submit.prevent="submitForm" class="space-y-4">
          <!-- Service Name (readonly) -->
          <div>
            <label class="block mb-1 font-medium">Service Name</label>
            <input
              v-model="form.service"
              type="text"
              readonly
              class="w-full px-4 py-2 border rounded bg-gray-100 text-gray-700"
            />
          </div>

          <div>
            <label class="block mb-1 font-medium">Full Name</label>
            <input
              v-model="form.name"
              type="text"
              required
              class="w-full px-4 py-2 border rounded"
              placeholder="Your name"
            />
          </div>

          <div>
            <label class="block mb-1 font-medium">Email</label>
            <input
              v-model="form.email"
              type="email"
              required
              class="w-full px-4 py-2 border rounded"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label class="block mb-1 font-medium">Message</label>
            <textarea
              v-model="form.message"
              rows="3"
              class="w-full px-4 py-2 border rounded"
              placeholder="Tell us more about your needs"
            ></textarea>
          </div>

          <button
            type="submit"
            class="bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90 w-full"
          >
            Send Request
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

// 1. Define all services
const services = {
  "ai-consultation": {
    title: "AI Business Consultation",
    description:
      "Get expert advice on implementing AI to streamline operations and enhance decision-making.",
    features: [
      "Tailored AI strategies",
      "Market & competitor analysis",
      "Operational efficiency boost",
    ],
  },
  "lead-management": {
    title: "AI-Powered Lead Management",
    description:
      "Automatically collect, filter, and respond to leads using smart CRM tools integrated with AI.",
    features: [
      "Real-time Facebook leads capture",
      "AI-based scoring & response",
      "CRM integration",
    ],
  },
  "web-ai": {
    title: "AI-Integrated Web Solutions",
    description:
      "Build smarter websites that adapt to user behavior, personalize content, and optimize performance.",
    features: [
      "AI-powered personalization",
      "Fast, scalable codebase",
      "User engagement tracking",
    ],
  },
};

// 2. Get serviceKey from query
const serviceKey = route.query.service;

// 3. Get serviceData based on key
const serviceData = services[serviceKey] || {
  title: "Service Not Found",
  description: "Please go back and choose a valid service.",
  features: [],
};

// 4. Define form AFTER serviceData
const form = ref({
  service: "",
  name: "",
  email: "",
  message: "",
});

// 5. Watch and set form.service from serviceData.title
watch(
  () => serviceData.title,
  (newTitle) => {
    form.value.service = newTitle;
  },
  { immediate: true }
);
</script>

<style scoped>
.bg-primary {
  background-color: var(--color-primary);
}
.text-primary {
  color: var(--color-primary);
}
</style>
