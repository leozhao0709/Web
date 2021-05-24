<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>{{count}}</h1>
  <button @click="increase">👍+1</button>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    const count = ref(0);
    const increase = () => {
      count.value++;
    };
    return {
      count,
      increase
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
