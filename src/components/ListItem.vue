<script setup>
import { computed } from 'vue'

const props = defineProps({
  item: Object
})

const date = computed(() => {
  const date = new Date(props.item.created_at)

  function format(value) {
    return value < 10 ? '0' + value : value
  }

  const day = format(date.getDate())
  const month = format(date.getMonth() + 1)

  return `${day}.${month}.${date.getFullYear()}`
})
</script>

<template>
  <a :href="item.url" class="item">
    <div class="item__body">
      {{ item.value }}
    </div>
    <div class="item__info">
      <span>{{ item.id }}</span
      ><span>{{ date }}</span>
    </div>
  </a>
</template>

<style scoped>
.item {
  min-width: 100%;
  display: flex;
  flex: 1 1 0px;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 7px 25px 0px rgba(100, 100, 111, 0.2);
  padding: 30px;
  min-height: 150px;
}
.item__info {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  gap: 5px;
  font-family: Montserrat;
  font-size: 14px;
  color: #767676;
}

@media (min-width: 768px) {
  .item:nth-child(1),
  .item:nth-child(2) {
    font-size: 20px;
    padding: 40px;
    flex-basis: 45%;
    min-height: 262px;
  }

  .item {
    min-width: 40%;
  }
}
@media (min-width: 992px) {
  .item {
    min-width: 30%;
  }
}
</style>
