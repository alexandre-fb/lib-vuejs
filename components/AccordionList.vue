<template>
    <div class="accordion">
      <div v-for="(item, index) in items" :key="index">
        <div class="accordion-item">
          <div
            class="accordion-title"
            @click="handleItemClick(index)"
            :class="{ active: isActive(index) }"
          >
            {{ item.title }}
          </div>
          <div v-if="isActive(index)" class="accordion-content">
            {{ item.content }}
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  
  export default {
    props: {
      multipleItemsOpen: {
        type: Boolean,
        default: false,
      },
    },
    setup(props) {
      const activeItem = ref(null);
      const items = [
        {
          title: 'Item 1',
          content: 'Content for Item 1',
        },
        {
          title: 'Item 2',
          content: 'Content for Item 2',
        },
        {
          title: 'Item 3',
          content: 'Content for Item 3',
        },
      ];
  
      const isActive = (index) => {
        if (props.multipleItemsOpen) {
          return activeItem.value && activeItem.value.includes(index);
        } else {
          return activeItem.value === index;
        }
      };
  
      const handleItemClick = (index) => {
        if (props.multipleItemsOpen) {
          activeItem.value = activeItem.value ? [...activeItem.value] : [];
          const isActive = activeItem.value.includes(index);
          if (isActive) {
            activeItem.value = activeItem.value.filter((item) => item !== index);
          } else {
            activeItem.value.push(index);
          }
        } else {
          activeItem.value = isActive(index) ? null : index;
        }
      };
  
      return {
        items,
        isActive,
        handleItemClick,
      };
    },
  };
  </script>
  
  <style>
  /* Estilos básicos para o acordeão */
  .accordion-item {
    border: 1px solid #ccc;
    margin-bottom: 5px;
  }
  
  .accordion-title {
    padding: 10px;
    cursor: pointer;
    background-color: #f0f0f0;
  }
  
  .accordion-title.active {
    background-color: #e0e0e0;
  }
  
  .accordion-content {
    padding: 10px;
    background-color: #fff;
  }
  </style>
  