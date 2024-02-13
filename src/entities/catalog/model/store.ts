import { defineStore } from 'pinia';
import { reactive, computed } from 'vue';
import { type CatalogSection, type CatalogStore } from './types';

export const useCatalogStore = defineStore('catalog', () => {
  const catalog = reactive<CatalogStore>({
    sections: [
      { label: 'Молоко, сыр, яйцо', link: '/' },
      { label: 'Напитки', link: '/' },
      { label: 'Бакалея', link: '/' },
      { label: 'Непродовольственные товары', link: '/' },
      { label: 'Хлеб', link: '/' },
      { label: 'Кондитерские изделия', link: '/' },
      { label: 'Здоровое питание', link: '/' },
      { label: 'Детское питание', link: '/' },
      { label: 'Фрукты и овощи', link: '/' },
      { label: 'Чай, кофе', link: '/' },
      { label: 'Зоотовары', link: '/' },
      { label: 'Мясо, птица, колбаса', link: '/' },
      { label: 'Замороженные продукты', link: '/' },
    ],
  });

  const catalogSection = computed(() => catalog.sections);

  const setCatalogSection = (sections: CatalogSection[]) => (catalog.sections = sections);

  return { catalog, catalogSection, setCatalogSection };
});
