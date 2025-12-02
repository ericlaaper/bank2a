<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center text-center p-6">
    <h1 class="text-5xl font-bold mb-2 text-primary">Jouw</h1>
    <h1 class="text-5xl font-bold mb-2 text-primary">Saldo</h1>
    <h1 class="text-5xl font-bold mb-2 text-primary">=</h1>
    <h2 class="text-6xl font-extrabold mb-6 text-primary">234,52</h2>
    <p class="text-lg text-secondary mb-4">Klik om verder te gaan.</p>
    <button
      @click="$router.push('/shit')"
      class="mt-4 px-6 py-3 bg-primary text-white rounded-lg text-lg hover:opacity-80 transition"
    >
      Verder
    </button>
  </div>
</template>

<style scoped></style>
