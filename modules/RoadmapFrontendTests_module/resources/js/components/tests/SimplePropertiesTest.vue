<script setup lang="ts">
import {ref} from "vue";

const age = ref<string | null>(null);
let message = ref<string>('');

function calculating () {
  setTimeout(setMessage, 1000);
}

function setMessage () {
  if (age.value) {
    message.value = `In 5 years you will be ${parseInt(age.value) + 5} years old`
  }
}
</script>

<template>
  <div>
    <h1>What will in 5 years?</h1>
    <input v-model="age" placeholder="Enter your current age...">
    <button @click="calculating">Calculate age!</button>
    <span v-text="message" />
  </div>
</template>

<style scoped>

</style>