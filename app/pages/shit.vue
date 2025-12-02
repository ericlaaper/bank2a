<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center text-center p-6">
    <p class="text-2xl font-semibold mb-8 max-w-xl text-primary">
      Je gaat nu al je geld overboeken naar Eric. Hij is hier heel blij mee.
    </p>

    <div class="flex flex-col space-y-4 w-full max-w-xs">
      <button
        @click="$router.push('/dank')"
        class="px-6 py-3 bg-primary text-white rounded-lg text-lg hover:opacity-80 transition"
      >
        OK, helemaal prima
      </button>

      <button
        @click="$router.push('/dank')"
        class="px-6 py-3 bg-secondary text-black rounded-lg text-lg hover:opacity-80 transition"
      >
        Nee, dat wil ik niet
      </button>
    </div>
  </div>
</template>

<style scoped></style>
