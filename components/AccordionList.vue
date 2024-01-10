<template>
  <div class="accordion">
    <div v-for="(item, index) in items" :key="index">
      <div 
        class="accordion__item" 
        :style="(border ? `border: 1px solid ${ border_color };` : '') + `border-radius: ${ rounded }px`"
      >
        <div
          class="item__title"
          @click="handleItemClick(index)"
          :style="`background: ${ bg_title };` + (isActive(index) ? `border-radius: ${ rounded }px ${ rounded }px 0 0;` : `border-radius: ${ rounded }px;`)"
          :aria-label="`Accordion item: ${item.title}`"
        >
          <h3 :style="`color: ${ title_color };`">{{ item.title }}</h3>
          <i class="fa-solid fa-chevron-up" :style="(isActive(index) ? 'transform: rotate(180deg);' : 'transform: rotate(0);') + `color: ${ icon_color }; transition: 200ms ease-in-out;`"></i>
        </div>
        <div 
          v-if="isActive(index)" 
          class="accordion-content"
          :style="`background: ${ bg_content }; color: ${ content_color }; border-radius: 0 0 ${ rounded }px ${ rounded }px;`"
        >
          {{ item.content }}
        </div>
      </div>
    </div>
  </div>
</template>

  
  <script>
import { ref } from "vue";

export default {
  props: {
    multiple_items_open: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: true,
    },
    border_color: {
      type: String,
      default: '#fff',
    },
    rounded: {
      type: Number,
      default: 0,
    },
    bg_title: {
      type: String,
      default: 'transparent',
    },
    bg_content: {
      type: String,
      default: 'transparent',
    },
    title_color: {
      type: String,
      default: '#000',
    },
    icon_color: {
      type: String,
      default: '#000',
    },
    content_color: {
      type: String,
      default: '#000',
    },
    rouded: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const activeItem = ref(null);
    const activeItems = ref([]);
    const items = [
      {
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        title: "Item 2",
        content: "Content for Item 2",
      },
      {
        title: "Item 3",
        content: "Content for Item 3",
      },
    ];

    const isActive = (index) => {
      if (props.multiple_items_open) {
        return activeItems.value && activeItems.value.includes(index);
      } else {
        return activeItem.value === index;
      }
    };

    const handleItemClick = (index) => {
      if (props.multiple_items_open) {
        if (activeItems.value.includes(index)) {
          activeItems.value = activeItems.value.filter((item) => item !== index);
          console.log('activeItems.value', activeItems.value)
        } else {
          activeItems.value.push(index);
        }
      } else {
        activeItem.value = isActive(index) ? null : index;
      }
    };

    const formatedRoundedValue = (value) => {
      if(value <= 30) {
        return value
      } else {
        return 30
      }
    }

    return {
      items,
      activeItems,
      activeItem,
      isActive,
      handleItemClick,
      formatedRoundedValue
    };
  },
};
</script>
  
  <style>
/* Estilos básicos para o acordeão */
.accordion__item {
  margin-bottom: 5px;
}

.accordion__item .item__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  cursor: pointer;
}

.accordion-content {
  padding: 10px;
}
</style>