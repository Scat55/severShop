<script setup lang="ts">
import { RouterLink } from 'vue-router';

interface Props {
  data: {
    label: string;
    icon: string;
    count: number;
    link: string;
  }[];
}
const { data } = defineProps<Props>();
</script>

<template>
  <nav>
    <ul>
      <li v-for="item in data" :key="item.label">
        <RouterLink :to="item.link">{{ item.label }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
ul {
  display: flex;
  gap: 0.625rem;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: black;
}
</style>
