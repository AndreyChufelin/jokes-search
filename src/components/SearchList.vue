<script setup>
import { computed, watchEffect } from 'vue'
import { useStore } from 'vuex'
import { useJokes } from '../services/jokes'
import VueList from './VueList.vue'

const store = useStore()

const query = computed(() => store.state.searchQuery)

const { jokes, searchJokes } = useJokes()

watchEffect(async () => {
  if (query.value.length > 2) {
    await searchJokes(query.value)
    store.commit("setSearchCount", jokes.value.length)
  }
})
</script>

<template>
  <VueList v-if="jokes" :items="jokes" />
</template>
