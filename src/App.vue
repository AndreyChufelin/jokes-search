<script setup>
import TheHeader from './components/TheHeader.vue'
import SearchList from './components/SearchList.vue'
</script>

<template>
  <div class="app">
    <TheHeader />
    <main>
      <SearchList />
    </main>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  padding: 6.6% 0 3.125% 0;
  justify-content: center;
}
</style>
