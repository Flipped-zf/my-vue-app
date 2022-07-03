<script setup lang="ts">
import { ref, reactive, toRefs } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
const person = reactive({
  name: "person",
  age: 12,
});
console.log(person);
console.log(toRefs(person));
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="$store.commit('change')">
    count is: {{ count }}
  </button>
  <button type="button" @click="$router.push('home')">hello</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <router-view></router-view>
</template>
