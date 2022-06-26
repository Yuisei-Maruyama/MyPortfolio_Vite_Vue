<script setup lang="ts"></script>

<template>
  <router-link :to="{ path: '/othello' }">Othello</router-link>
  <router-link :to="{ path: '/Page2' }">Page2</router-link>
</template>

<style scoped lang="scss">
a {
  color: #42b983;
  font-size: 35px;
  text-decoration: underline;
  &:nth-child(2) {
    margin-left: 20px;
  }
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
