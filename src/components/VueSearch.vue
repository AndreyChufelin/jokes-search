<script setup>
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const searchQuery = computed(() => store.state.searchQuery)
const searchCount = computed(() => store.state.searchCount)

const input = ref()

onMounted(() => {
  input.value.focus()
})
</script>

<template>
  <div class="search">
    <input
      class="input"
      type="text"
      placeholder="Search jokes..."
      ref="input"
      :value="searchQuery"
      @input="store.commit('setSearchQuery', $event.target.value)"
    />
    <div class="count" v-if="searchCount">Found jokes: {{ searchCount }}</div>
  </div>
</template>

<style scoped>
.search {
  max-width: 626px;
  width: 100%;
}
.input {
  width: 100%;
  padding: 19px 30px;
  margin: 0px 5px;
  color: #656ec2;
  font-size: 20px;
  font-weight: 700;
  box-shadow: 0px 7px 12px rgba(100, 100, 111, 0.2);
}
.input::placeholder {
  color: #656ec2;
}

.count {
  font-family: Montserrat;
  color: #282626;
  padding: 20px 35px;
}
</style>
