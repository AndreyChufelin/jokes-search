<script setup>
import ListItem from './ListItem.vue'

defineProps({
  items: Array
})
</script>

<template>
  <div class="list container">
    <ListItem
      v-for="item in items"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
