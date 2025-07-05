<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-6 md:px-12">
      <!-- Title & Description -->
      <div class="text-center mb-12">
        <h2 class="text-5xl font-bold text-primary mb-2">AI Solutions</h2>
        <p class="text-lg font-semibold">
          Empowering businesses through intelligent, data-driven technologies.
        </p>
      </div>

      <!-- Grid of Services -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- AI Business Consultation -->
        <div
          data-aos="fade-up"
          class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
        >
          <img
            src="../assets/silustion6.jpg"
            alt="AI Consultation"
            class="w-55 h-30 m-auto object-contain mb-4"
          />
          <h3 class="text-xl font-semibold text-gray-800 mb-2">
            AI Business Consultation
          </h3>
          <p class="text-gray-600">
            Leverage AI strategies to optimize operations, enhance productivity,
            and gain competitive insights.
          </p>

          <button
            @click="
              router.push({
                name: 'ServiceDetails',
                query: { service: 'ai-consultation' },
              })
            "
            class="mt-4 text-primary font-medium hover:underline"
          >
            Learn More →
          </button>
        </div>

        <!-- AI-Powered Lead Management -->
        <div
          data-aos="fade-up"
          class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
        >
          <img
            src="../assets/silustion1.jpg"
            alt="CRM AI Leads"
            class="w-45 h-30 m-auto object-contain mb-4"
          />
          <h3 class="text-xl font-semibold text-gray-800 mb-2">
            AI-Powered Lead Management
          </h3>
          <p class="text-gray-600">
            Automate your Facebook leads collection and manage them
            intelligently using AI-enhanced CRM.
          </p>
          <button
            @click="
              router.push({
                name: 'ServiceDetails',
               query: { service: 'lead-management' }
,
              })
            "
            class="mt-4 text-primary font-medium hover:underline"
          >
            Learn More →
          </button>
        </div>

        <!-- Smart Web Development -->
        <div
          data-aos="fade-up"
          class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
        >
          <img
            src="../assets/silustion2.jpg"
            alt="Web AI"
            class="w-45 h-30 m-auto object-contain mb-4"
          />
          <h3 class="text-xl font-semibold text-gray-800 mb-2">
            AI-Integrated Web Solutions
          </h3>
          <p class="text-gray-600">
            Build intelligent, responsive, and scalable websites and platforms
            powered by AI logic.
          </p>
          <button
            @click="
              router.push({
                name: 'ServiceDetails',
                query: { service: 'web-ai' }
,
              })
            "
            class="mt-4 text-primary font-medium hover:underline"
          >
            Learn More →
          </button>
        </div>

        <!-- Google AI Ecosystem -->
        <div
          data-aos="fade-up"
          class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
        >
          <img
            src="../assets/silustion3.png"
            alt="Google Systems"
            class="w-45 h-30 m-auto object-contain mb-4"
          />
          <h3 class="text-xl font-semibold text-gray-800 mb-2">
            Google AI Ecosystem
          </h3>
          <p class="text-gray-600">
            Seamlessly integrate your business into Google’s AI-driven tools for
            smarter workflows and collaboration.
          </p>
          <button
            @click="
              router.push({
                name: 'ServiceDetails',
               query: { service: 'google-ai' }
,
              })
            "
            class="mt-4 text-primary font-medium hover:underline"
          >
            Learn More →
          </button>
        </div>

        <!-- Intelligent Task Automation -->
        <div
          data-aos="fade-up"
          class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
        >
          <img
            src="../assets/silustion4.jpg"
            alt="Task Management"
            class="w-45 h-30 m-auto object-contain mb-4"
          />
          <h3 class="text-xl font-semibold text-gray-800 mb-2">
            Intelligent Task Automation
          </h3>
          <p class="text-gray-600">
            Manage and automate team tasks using AI to prioritize goals, monitor
            productivity, and track efficiency.
          </p>
          <button
            @click="
              router.push({
                name: 'ServiceDetails',
             query: { service: 'task-automation' }
,
              })
            "
            class="mt-4 text-primary font-medium hover:underline"
          >
            Learn More →
          </button>
        </div>

        <!-- Smart Notification System -->
        <div
          data-aos="fade-up"
          class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
        >
          <img
            src="../assets/silustion5.jpg"
            alt="Smart SMS"
            class="w-45 h-30 m-auto object-contain mb-4"
          />
          <h3 class="text-xl font-semibold text-gray-800 mb-2">
            Smart Notification System
          </h3>
          <p class="text-gray-600">
            Keep customers engaged with real-time AI-triggered messages, alerts,
            and behavior-based communications.
          </p>
          <button
            @click="
              router.push({
                name: 'ServiceDetails',
                query: { service: 'smart-notifications' }
,
              })
            "
            class="mt-4 text-primary font-medium hover:underline"
          >
            Learn More →
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>
