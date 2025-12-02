<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const email = ref('');
const password = ref('');

const emailError = ref('');
const passwordError = ref('');

function validateEmail(value: string) {
  return /[^\s@]+@[^\s@]+\.[^\s@]+/.test(value);
}

function submit() {
  emailError.value = '';
  passwordError.value = '';

  if (!validateEmail(email.value)) {
    emailError.value = 'Vul een geldig e-mailadres in.';
  }

  if (password.value.length < 2) {
    passwordError.value = 'Wachtwoord moet minimaal 2 karakters hebben.';
  }

  if (!emailError.value && !passwordError.value) {
    router.push('/overzicht');
  }
}
</script>

<!-- pages/login.vue -->
<template>
  <!-- Volledig scherm, center-center -->
  <div class="min-h-screen w-screen flex items-center justify-center bg-slate-100 px-4">
    <!-- De kaart -->
    <div class="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      <div class="flex flex-col-reverse md:flex-row">
        <!-- Linkerkolom: logo / tekst -->
        <div class="md:w-1/2 flex flex-col items-center justify-center p-10">
          <img src="/img/bank-logo.png" alt="De Zuid Oost Bank" class="h-16 mb-6" />

          <h2 class="text-xl font-semibold text-primary text-center">De bank voor jou!</h2>

          <p class="mt-6 text-secondary text-2xl font-bold text-center">Welkom</p>
        </div>

        <!-- Rechterkolom: formulier -->
        <div class="md:w-1/2 flex items-center justify-center p-10 bg-slate-50">
          <div class="w-full max-w-sm">
            <p class="mb-6 text-primary">Gebruik je e-mailadres en wachtwoord om verder te gaan.</p>

            <form class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"> E-mailadres </label>
                <input
                  type="email"
                  v-model="email"
                  class="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="naam@voorbeeld.nl"
                />
                <p v-if="emailError" class="text-red-500 text-sm mt-1">{{ emailError }}</p>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"> Wachtwoord </label>
                <input
                  type="password"
                  v-model="password"
                  class="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="••••••••"
                />
                <p v-if="passwordError" class="text-red-500 text-sm mt-1">{{ passwordError }}</p>
              </div>

              <div class="pt-2 flex justify-end">
                <button
                  type="button"
                  @click="submit"
                  class="rounded-md bg-primary px-6 py-2 text-sm font-semibold text-white shadow-md hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Verder
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
