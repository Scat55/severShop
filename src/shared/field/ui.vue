<script setup lang="ts">
import { useSlots } from 'vue';

interface Props {
  onChange: () => string;
  onEnter: () => string;
  disabled?: boolean;
  size?: 'm' | 'l';
  placeholder?: string;
}

const slots = useSlots();

const props = defineProps<Props>();
const {
  disabled = false,
  size = 'm',
  placeholder = '',
  onChange = () => {}
} = props;
</script>

<template>
  <div
    :class="[
      'field',
      `disabled_${disabled}`,
      `size_${size}`,
      `left-icon_${Boolean(slots.leftIcon)}`,
      `right-icon_${Boolean(slots.rightIcon)}`
    ]"
  >
    <slot name="label"></slot>
    <div class="field__container">
      <div v-if="slots.leftIcon" class="field__leftIcon">
        <slot name="leftIcon"></slot>
      </div>
      <input
        @input="(input) => onChange(input.target.value)"
        @keyup.enter="(input) => onEnter(input.target.value)"
        type="text"
        class="field__input"
        :placeholder="placeholder"
        :disabled="disabled"
      />
      <div v-if="slots.rightIcon" class="field__rightIcon">
        <slot name="rightIcon"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.field {
  &__container {
    position: relative;
  }
  &__input {
    width: 100%;
    border-radius: 0.25rem;
    background: var(--main-surface);
    border: 1px solid var(--grayscale-light);
    color: var(--main-on-surface);
    transition: all 0.3s ease-in-out;

    &::placeholder {
      color: var(--grayscale-hard);
    }

    &:focus {
      border: 1px solid var(--main-secondary);
      box-shadow: var(--shadow-secondary-m);
      caret-color: var(--main-secondary);
    }

    &:disabled {
      border: 1px solid var(--grayscale-light);
      background: var(--grayscale-lightest);
    }
  }
  &:deep(.typography) {
    color: var(--grayscale-hard);
  }

  &__leftIcon {
    position: absolute;
  }
  &__rightIcon {
    position: absolute;
  }

  &.size_m &__input {
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }
  &.size_l &__input {
    padding: 0.75rem 1rem;
    font-size: 1.5rem;
  }
}

.field.left-icon_true.size_m .field__leftIcon {
  top: 0.5rem;
  left: 0.5rem;
}
.field.left-icon_true.size_m .field__input {
  padding-left: 2.5rem;
}

.field.right-icon_true.size_m .field__rightIcon {
  top: 0.5rem;
  right: 0.5rem;
}
.field.right-icon_true.size_m .field__input {
  padding-right: 2.5rem;
}
// size l

.field.left-icon_true.size_l .field__leftIcon {
  top: 0.5rem;
  left: 0.5rem;
  padding: 0.375rem;
}
.field.left-icon_true.size_l .field__input {
  padding-left: 3.5rem;
}

.field.right-icon_true.size_l .field__rightIcon {
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.375rem;
}
.field.right-icon_true.size_l .field__input {
  padding-right: 3.5rem;
}
</style>
