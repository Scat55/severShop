<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { Typography } from '@/shared/typography';
import { Icon } from '@/shared/icon';

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
  <nav class="header__navigation">
    <ul class="header__navigation__list">
      <li v-for="item in data" :key="item.label" class="list__item">
        <RouterLink :to="item.link" class="item">
          <Icon :type="item.icon" />
          <Typography tagName="span" size="xs">
            {{ item.label }}
          </Typography>
          <span v-if="item.count > 0" class="item__count">{{ item.count }}</span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.header {
  &__navigation {
    &__list {
      display: flex;
      grid-gap: 24px;
    }
  }
}
.item {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-gap: 8px;
  text-decoration: none;
  color: var(--main-on-surface);

  &__count {
    position: absolute;
    top: -6px;
    right: 6px;
    padding: 2px 4px;
    background-color: var(--main-primary);
    color: var(--main-on-primary);
    border-radius: 4px;
  }
}
</style>
