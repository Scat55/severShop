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
    <ul v-for="item in data" :key="item.label">
      <li>
        <RouterLink :to="item.link">{{ item.label }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss"></style>
