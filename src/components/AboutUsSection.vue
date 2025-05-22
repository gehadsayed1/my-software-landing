<template>
  <section class="py-10 bg-white" id="about">
    <div class="container mx-auto px-6 md:px-12">
      <div class="text-center mb-20">
        <h3 class="text-4xl font-bold text-primary mb-6">About Us</h3>
        <p class="text-lg font-medium text-gray-700 mb-6">
          We maximize your profits by integrating the latest technologies with
          modern business management sciences.
        </p>
        <p class="text-gray-600 font-medium mb-6">
          We facilitate decision-making through comprehensive reports on your
          work performance, employees, and secure data management.
        </p>
        <p class="text-gray-600 font-medium mb-4">
          Creating a professional company image for both current and potential
          customers.
        </p>
      </div>
      <div class="flex flex-wrap items-center">
        <!-- Text Content -->
        <div class="w-full md:w-1/2 mb-10 md:mb-0">
          <h4 class="text-2xl font-bold mb-15 text-primary">
            All our systems are:
          </h4>

          <div class="grid md:grid-cols-2 gap-6">
            <!-- Easy to Use -->
            <div class="flex items-start space-x-4 rtl:space-x-reverse">
              <span class="bg-blue-100 p-3 rounded-full text-blue-600">
                <!-- Icon: Settings / Simple -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <div>
                <h5 class="font-bold text-gray-800">Easy to use</h5>
                <p class="text-gray-600">
                  We build pretty simple tools and this allows us to take
                  business and turn them into functional quickly and easily.
                </p>
              </div>
            </div>

            <!-- Powerful -->
            <div class="flex items-start space-x-4 rtl:space-x-reverse">
              <span class="bg-purple-100 p-3 rounded-full text-blue-800">
                <!-- Icon: Lightning Bolt -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              <div>
                <h5 class="font-bold text-gray-800">Powerful</h5>
                <p class="text-gray-600">
                  Our systems work based on Google systems concepts, so feel
                  the power and modern technology between your hands.
                </p>
              </div>
            </div>

            <!-- Cloud Based -->
            <div class="flex items-start space-x-4 rtl:space-x-reverse">
              <span class="bg-green-100 p-3 rounded-full text-green-600">
                <!-- Icon: Cloud -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </span>
              <div>
                <h5 class="font-bold text-gray-800">Cloud Based</h5>
                <p class="text-gray-600">
                  Internet-based computing that provides shared computer
                  processing resources.
                </p>
              </div>
            </div>

            <!-- One Box -->
            <div class="flex items-start space-x-4 rtl:space-x-reverse">
              <span class="bg-yellow-100 p-3 rounded-full text-yellow-600">
                <!-- Icon: Briefcase -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 13.255A23.931 23.931 0 0112 15.75m-1.75-8.486a9.75 9.75 0 11-3.502 15.056m1.556-15.056a1 1 0 011-1h.5a1 1 0 011 1v.75a1 1 0 01-1 1h-.5a1 1 0 01-1-1v-.75z" />
                </svg>
              </span>
              <div>
                <h5 class="font-bold text-gray-800">One Box</h5>
                <p class="text-gray-600">
                  All you need in one place, run multiple businesses in one
                  account.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Image / Visual -->
        <div class="w-full md:w-1/2 md:pl-12">
          <img src="../assets/team.png" alt="About Us Image" class="w-full max-w-md mx-auto" />
        </div>
      </div>
    </div>
  </section>
</template>