<script setup lang="ts">
import { Avatar } from '@/shared/avatar';
import { Typography } from '@/shared/typography';
import { Button } from '@/shared/button';
import { Icon } from '@/shared/icon';

interface Props {
  data: {
    avatar: string;
    name: string;
    menu: any[];
  };
}

const { data } = defineProps<Props>();
</script>

<template>
  <div class="user-menu">
    <Avatar class="user-menu__avatar" :img="data.avatar" />
    <Typography class="user-menu__name" tagName="span" size="s">
      {{ data.name }}
    </Typography>
    <Button class="user-menu__button" decoration="none" size="M">
      <template v-slot:leftIcon>
        <Icon type="chevron" />
      </template>
    </Button>
  </div>
</template>

<style scoped lang="scss">
.user-menu {
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  gap: 10px;
  align-items: center;
  padding: 8px;

  &__name,
  &__avatar,
  &__button {
    cursor: pointer;
  }
}
</style>
