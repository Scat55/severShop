<script setup lang="ts">
interface Props {
  tagName: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  bold?: boolean
  size?: 'xs' | 's' | 'm' | 'l' | 'xl'
}

const props = defineProps<Props>()
</script>

<template>
  <component
    :is="tagName"
    :class="['typography', size ? `size_${size}` : '', bold ? 'bold' : '', `tag_${tagName}`]"
  >
    <slot> </slot>
  </component>
</template>

<style lang="scss" scoped>
.typography {
  font-style: normal;
  line-height: 150%;
}

.bold {
  font-weight: 700;
}

.size_xs {
  font-size: 0.75rem;
}

.size_s {
  font-size: 1rem;
}

.size_m {
  font-size: 1.125rem;
}

.size_l {
  font-size: 1.5rem;
}

.size_xl {
  font-size: 2.25rem;
}

.tag_h1 {
  font-size: 4rem;
}

.tag_h2 {
  font-size: 3rem;
}

.tag_h3 {
  font-size: 2.25rem;
}

.tag_h4 {
  font-size: 1.5rem;
}

.tag_h5 {
  font-size: 1.125rem;
}

@media screen and (max-width: 48rem) {
  .size_xs {
    font-size: 0.5rem;
  }

  .size_s {
    font-size: 0.75rem;
  }

  .size_m {
    font-size: 0.875rem;
  }

  .size_l {
    font-size: 1.25rem;
  }

  .size_xl {
    font-size: 2rem;
  }
  // Заголовки

  .tag_h1 {
    font-size: 3rem;
  }

  .tag_h2 {
    font-size: 2.25rem;
  }

  .tag_h3 {
    font-size: 1.5rem;
  }

  .tag_h4 {
    font-size: 1.25rem;
  }

  .tag_h5 {
    font-size: 1rem;
  }
}
</style>
