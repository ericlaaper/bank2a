<script setup>
definePageMeta({
  layout: 'landing',
})
</script>

<template>
  <div class="min-h-screen flex flex-col bg-[#f1f1f1]">
    <!-- Meldingsbalk bovenaan -->
    <div class="w-full bg-primary text-white text-center py-3 text-sm sm:text-base">
      Momenteel ondervinden wij problemen, ook last?
      <NuxtLink to="/klacht" class="underline font-semibold hover:opacity-80">
        Klik hier
      </NuxtLink>
    </div>

    <!-- Content: logo gecentreerd -->
    <div class="flex flex-1 items-start justify-center">
      <div class="mt-[28vh] md:mt-[33vh] text-center">
        <NuxtLink to="/login">
          <img
            src="/img/bank-logo.png"
            alt="De Zuid Oost Bank"
            class="mx-auto cursor-pointer transition-transform duration-200 hover:scale-105
                   w-40 sm:w-52 md:w-64 lg:w-80"
          />
        </NuxtLink>

        <p class="mt-4 text-gray-700 text-sm sm:text-base">
          Klik op het logo om verder te gaan
        </p>
      </div>
    </div>
  </div>
</template>
