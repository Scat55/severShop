<script setup lang="ts">
import { Container } from '@/shared/container';
</script>

<template>
  <div class="dropdown-menu">
    <Container>
      <ul class="dropdown-menu__list">
        <li class="list__item">test</li>
        <li class="list__item">test</li>
        <li class="list__item">test</li>
        <li class="list__item">test</li>
        <li class="list__item">test</li>
        <li class="list__item">test</li>
        <li class="list__item">test</li>
        <li class="list__item">test</li>
        <li class="list__item">test</li>
        <li class="list__item">test</li>
      </ul>
    </Container>
  </div>
</template>

<style scoped lang="scss">
.dropdown-menu {
  position: fixed;
  top: 4.5rem;
  left: 0;
  width: 100%;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.15);
  background: var(--main-onprimary);

  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 1.5rem;
    grid-column-gap: 2.5rem;
    padding: 2.5rem 0;
  }
}
</style>
