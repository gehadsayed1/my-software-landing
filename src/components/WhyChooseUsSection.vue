<template>
  <section class="py-20 bg-blue-50">
    <div class="container mx-auto px-6 md:px-12">
      <!-- العنوان -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-primary mb-4">{{ $t('whyUs.title') }}</h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          {{ $t('whyUs.description') }}
        </p>
      </div>

      <!-- العناصر -->
      <div class="grid md:grid-cols-3 gap-10">
        <!-- item 1 -->
        <div class="bg-white p-8 rounded-full shadow-md text-center" data-aos="flip-right">
          <div class="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <!-- Icon -->
          </div>
          <h3 class="text-2xl font-semibold text-gray-800 mb-4">
            {{ $t('whyUs.items.quality.title') }}
          </h3>
          <p class="text-gray-600 leading-relaxed">
            {{ $t('whyUs.items.quality.desc') }}
          </p>
        </div>

        <!-- item 2 -->
        <div class="bg-white p-8 rounded-full shadow-md text-center" data-aos="flip-right">
          <div class="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <!-- Icon -->
          </div>
          <h3 class="text-2xl font-semibold text-gray-800 mb-4">
            {{ $t('whyUs.items.timely.title') }}
          </h3>
          <p class="text-gray-600 leading-relaxed">
            {{ $t('whyUs.items.timely.desc') }}
          </p>
        </div>

        <!-- item 3 -->
        <div class="bg-white p-8 rounded-full shadow-md text-center" data-aos="flip-right">
          <div class="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <!-- Icon -->
          </div>
          <h3 class="text-2xl font-semibold text-gray-800 mb-4">
            {{ $t('whyUs.items.learning.title') }}
          </h3>
          <p class="text-gray-600 leading-relaxed">
            {{ $t('whyUs.items.learning.desc') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>

import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
