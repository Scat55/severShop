<script setup lang="ts">
import Container from '@/shared/container/index.vue';
import Logo from '@/shared/logo/index.vue';
import Button from '@/shared/button/index.vue';
import Icon from '@/shared/icon/index.vue';
</script>

<template>
  <header class="header">
    <Container class="header__container">
      <Logo orientation="horizontal" bgColor="white" colorFull withText />

      <div class="header__catalog">
        <Button color="secondary">
          <template v-slot:leftIcon><Icon type="menu" /></template>
          Каталог
        </Button>
      </div>
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

  &__catalog {
    width: 8.75rem;
    margin-left: 2.5rem;
  }
}
</style>
