<script setup lang="ts">
import Typography from '@/shared/typography/index.vue';

interface Props {
  color?: 'primary' | 'secondary' | 'grayscale' | 'error';
  decoration?: 'default' | 'outline' | 'none';
  size?: 'L' | 'M' | 'S';
  disabled?: boolean;
}

const props = defineProps<Props>();

const { color = 'primary', decoration = 'default', size = 'M', disabled = false } = props;

const classes = ['button', `size_${size}`, `decoration_${decoration}`, `color_${color}`];
</script>

<template>
  <button :class="classes" :disabled="disabled">
    <slot name="leftIcon"></slot>
    <Typography tagName="p" size="s" class="button__text">
      <slot></slot>
    </Typography>
  </button>
</template>

<style scoped lang="scss">
.button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;

  &.size_M {
    grid-gap: 0.5rem;
    padding: 0.5rem;
  }
  &.color_secondary {
    background-color: var(--main-secondary);
    color: var(--main-on-secondary);
  }

  &__text {
    width: 100%;
    text-align: center;
  }
}
</style>
