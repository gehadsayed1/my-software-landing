<template>
  <section class="py-10 bg-white" id="about" data-aos="fade-up">
    <div class="container mx-auto px-4 sm:px-6 lg:px-12">
      <div class="text-center mb-12" data-aos="fade-down" data-aos-delay="100">
        <h3 class="text-3xl sm:text-4xl font-bold text-primary mb-4">About AI Brooklyn</h3>
        <!-- <p class="text-base sm:text-lg font-medium text-gray-700 mb-4">
          At AI Brooklyn, we harness the power of artificial intelligence to build smarter solutions for tomorrow’s challenges.
        </p>
        <p class="text-sm sm:text-base text-gray-600 font-medium">
          We empower businesses with intelligent tools, automation, and cloud-based technologies to unlock their full potential.
        </p> -->
      </div>

      <div class="flex flex-col md:flex-row items-center md:items-start gap-10">
        <!-- Text Content -->
        <div class="w-full md:w-1/2" data-aos="fade-right" data-aos-delay="200">
          <h4 class="text-xl sm:text-2xl font-bold mb-8 text-primary">
            Our AI solutions are:
          </h4>

          <div class="grid sm:grid-cols-2 gap-10">
            <!-- Easy to Use -->
            <div class="flex items-start gap-4" data-aos="fade-up" data-aos-delay="300">
              <span class="bg-blue-100 p-3 rounded-full text-blue-600">
                <!-- SVG icon -->
              </span>
              <div>
                <h5 class="font-bold text-gray-800">User-Friendly</h5>
                <p class="text-gray-600 text-md">
                  Seamless interfaces designed to simplify complex AI processes for every user.
                </p>
              </div>
            </div>

            <!-- Powerful -->
            <div class="flex items-start gap-4" data-aos="fade-up" data-aos-delay="400">
              <span class="bg-purple-100 p-3 rounded-full text-blue-800">
                <!-- SVG icon -->
              </span>
              <div>
                <h5 class="font-bold text-gray-800">AI-Powered</h5>
                <p class="text-gray-600 text-md">
                  Leveraging the latest in machine learning and neural networks for accurate, fast results.
                </p>
              </div>
            </div>

            <!-- Cloud Based -->
            <div class="flex items-start gap-4" data-aos="fade-up" data-aos-delay="500">
              <span class="bg-green-100 p-3 rounded-full text-green-600">
                <!-- SVG icon -->
              </span>
              <div>
                <h5 class="font-bold text-gray-800">Cloud-Integrated</h5>
                <p class="text-gray-600 text-md">
                  Access your intelligent systems anywhere, anytime — powered by secure cloud technology.
                </p>
              </div>
            </div>

            <!-- Scalable -->
            <div class="flex items-start gap-4" data-aos="fade-up" data-aos-delay="600">
              <span class="bg-yellow-100 p-3 rounded-full text-yellow-600">
                <!-- SVG icon -->
              </span>
              <div>
                <h5 class="font-bold text-gray-800">Scalable</h5>
                <p class="text-gray-600 text-md">
                  Whether you're a startup or enterprise, our AI solutions scale with your business needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Image -->
        <div class="w-full md:w-1/2 flex justify-center" data-aos="zoom-in" data-aos-delay="700">
          <img src="../assets/team.png" alt="About Us Image" class="w-full max-w-sm md:max-w-md lg:max-w-lg" />
        </div>
      </div>
    </div>
  </section>
</template>
