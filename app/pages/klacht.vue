<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');
const rekeningnummer = ref('');
const klacht = ref('');
const files = ref<File[]>([]);

const emailError = ref('');
const rekeningError = ref('');
const klachtError = ref('');
const fileError = ref('');

const submitted = ref(false);

function validateEmail(value: string) {
  return /[^\s@]+@[^\s@]+\.[^\s@]+/.test(value);
}

function onFileChange(event: Event) {
  const target = event.target as HTMLInputElement;
  const selected = target.files ? Array.from(target.files) : [];
  files.value = selected;
}

function submit() {
  emailError.value = '';
  rekeningError.value = '';
  klachtError.value = '';
  fileError.value = '';

  if (!validateEmail(email.value)) {
    emailError.value = 'Vul een geldig e-mailadres in.';
  }

  if (rekeningnummer.value.trim().length < 3) {
    rekeningError.value = 'Rekeningnummer moet minimaal 3 karakters hebben.';
  }

  if (!klacht.value.trim()) {
    klachtError.value = 'Vul een klachtomschrijving in.';
  }

  if (files.value.length === 0) {
    fileError.value = 'Upload minstens één bestand (screenshot).';
  }

  if (!emailError.value && !rekeningError.value && !klachtError.value && !fileError.value) {
    submitted.value = true;
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-background px-4">
    <div class="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
      <h1 class="text-3xl font-bold mb-2 text-primary text-center">Klacht indienen</h1>
      <p class="text-secondary text-center mb-8">Vul je gegevens in en voeg één of meer screenshots toe.</p>

      <div v-if="!submitted">
        <form class="space-y-6" @submit.prevent="submit">
          <!-- E-mailadres -->
          <div>
            <label class="block text-sm font-medium mb-1 text-primary"> E-mailadres </label>
            <input
              type="email"
              v-model="email"
              class="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
              placeholder="naam@voorbeeld.nl"
            />
            <p v-if="emailError" class="text-red-500 text-sm mt-1">
              {{ emailError }}
            </p>
          </div>

          <!-- Rekeningnummer -->
          <div>
            <label class="block text-sm font-medium mb-1 text-primary"> Rekeningnummer </label>
            <input
              type="text"
              v-model="rekeningnummer"
              class="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
              placeholder="Bijvoorbeeld: NL00BANK0123456789"
            />
            <p v-if="rekeningError" class="text-red-500 text-sm mt-1">
              {{ rekeningError }}
            </p>
          </div>

          <!-- Klachtomschrijving -->
          <div>
            <label class="block text-sm font-medium mb-1 text-primary"> Klachtomschrijving </label>
            <textarea
              v-model="klacht"
              rows="4"
              class="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
              placeholder="Beschrijf hier je klacht..."
            ></textarea>
            <p v-if="klachtError" class="text-red-500 text-sm mt-1">
              {{ klachtError }}
            </p>
          </div>

          <!-- Bestanden uploaden -->
          <div>
            <label class="block text-sm font-medium mb-1 text-primary"> Screenshots uploaden </label>
            <input
              type="file"
              multiple
              accept="image/*,.png,.jpg,.jpeg,.gif"
              @change="onFileChange"
              class="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-secondary file:text-black file:font-medium hover:file:opacity-80"
            />
            <p v-if="fileError" class="text-red-500 text-sm mt-1">
              {{ fileError }}
            </p>

            <ul v-if="files.length" class="mt-2 text-sm text-gray-600 list-disc list-inside">
              <li v-for="file in files" :key="file.name">
                {{ file.name }}
              </li>
            </ul>
          </div>

          <!-- Verstuur knop -->
          <div class="pt-4 flex justify-end">
            <button
              type="submit"
              class="rounded-md bg-primary px-6 py-2 text-sm font-semibold text-white shadow-md hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Verstuur
            </button>
          </div>
        </form>
      </div>

      <div v-else class="text-center mt-8">
        <p class="text-2xl font-semibold text-primary mb-4">Bedankt, je klacht is verstuurd.</p>
        <p class="text-gray-600">We gaan er naar kijken maar dat kan even duren.</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
