<script setup lang="ts">
import { Container } from '@/shared/container';
import { RouterLink } from 'vue-router';
import { Typography } from '@/shared/typography';
import { useCatalogStore } from '@/entities/catalog';

const catalogStore = useCatalogStore();
const { catalogSection } = catalogStore;
</script>

<template>
  <div class="dropdown-menu">
    <Container>
      <ul class="dropdown-menu__list">
        <li class="list__item" v-for="catalogItems in catalogSection" :key="catalogItems.label">
          <RouterLink :to="catalogItems.link">
            <Typography tag-name="span" size="s" :bold="true" class="item__text">{{
              catalogItems.label
            }}</Typography>
          </RouterLink>
        </li>
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

.item__text {
  transition: all 0.2s;
  &:hover {
    color: var(--main-primary);
  }
}
</style>
