<script setup lang="ts">
import Container from '@/shared/container/index.vue';
import Logo from '@/shared/logo/index.vue';
</script>

<template>
  <header class="header">
    <Container class="header__container">
      <Logo orientation="horizontal" bgColor="white" colorFull withText />
      <p>mssm</p>
    </Container>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  left: 0;
  background: var(--surface);
  box-shadow: var(--shadow-default-s);

  &__container {
    display: flex;
    align-items: center;
    height: 4.5rem;
  }
}
</style>
