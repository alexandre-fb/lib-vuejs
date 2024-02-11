export const accordionListData = [
  {
    title: "Pergunta 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo ex a bibendum pulvinar. In vestibulum mattis condimentum Curabitur scelerisque auctor mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Pergunta 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo ex a bibendum pulvinar. In vestibulum mattis condimentum Curabitur scelerisque auctor mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo ex a bibendum pulvinar. In vestibulum mattis condimentum Curabitur scelerisque auctor mollis.",
  },
  {
    title: "Pergunta 3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo ex a bibendum pulvinar. In vestibulum mattis condimentum Curabitur scelerisque auctor mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo ex a bibendum pulvinar. In vestibulum mattis condimentum Curabitur scelerisque auctor mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo ex a bibendum pulvinar. In vestibulum mattis condimentum Curabitur scelerisque auctor mollis.",
  },
];

export const propsListData = [
  {
    name: "data",
    type: "Array",
    required: "Sim",
    description: "Informações das abas.",
  },
  {
    name: "multiple_items_open",
    type: "Boolean",
    required: "Não",
    description: "Permite abrir mais de uma aba ao mesmo tempo.",
  },
];

export const componentCodeString = `
<template>
  <ul class="accordion">
    <li v-for="(item, index) in data" :key="index" class="accordion__item" :class="{ active: isActive(index) }">
      <!-- Title-->
      <button 
        class="title__area" 
        @click="handleItemClick(index)" 
        :aria-label="'Accordion item: ' + item.title" 
        :aria-expanded="isActive(index)"
        :aria-controls="'accordion-content-' + index"
      >
        <h3 class="title__text">
          <i class="title__text__icon"></i>
          <span> {{ item.title }} </span>
        </h3>
      </button>

      <!-- Content -->
      <div class="content__area" :class="{ active: isActive(index) }" :id="'accordion-content-' + index">
        <p>
          {{ item.content }}
        </p>
      </div>
    </li>
  </ul>
</template>
  
<script>
import { ref } from "vue";

export default {
  props: {
    data: {
      type: Array,
      required: true,
      default: [
        {
          title: "Title 1",
          content: "Content 1",
        },
        {
          title: "Title 2",
          content: "Content 2",
        },
      ],
    },
    multiple_items_open: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const activeItem = ref(null);
    const activeItems = ref([]);

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
          activeItems.value = activeItems.value.filter(
            (item) => item !== index
          );
        } else {
          activeItems.value.push(index);
        }
      } else {
        activeItem.value = isActive(index) ? null : index;
      }
    };

    return {
      activeItems,
      activeItem,
      isActive,
      handleItemClick,
    };
  },
};
<\/script>
  
<style scoped>
.accordion {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.accordion__item {
  border: 1px solid #70b966;
  border-radius: 16px;
  transition: 250ms ease;
}

.accordion__item.active {
  background: #cccccc1f;
  box-shadow: #70b96660 0px 0px 15px;
}

/*--title--*/
.title__area {
  width: 100%;
  cursor: pointer;
  padding: 16px;
  border-radius: 16px;
  transition: 250ms ease;
}

.title__text {
  color: #fff;
  display: flex;
  align-items: center;
  font-weight: bold;
}

.title__text__icon {
  display: block;
  width: 10px;
  height: 2px;
  background: #fff;
  border-radius: 2px;
  margin-right: 8px;
}

.title__text__icon::before {
  content: "";
  display: block;
  width: 10px;
  height: 2px;
  background: #fff;
  border-radius: 2px;
  margin-right: 8px;
  transform: rotate(-90deg);
  transition: 250ms ease;
}

.accordion__item.active .title__text__icon::before {
  transform: rotate(0deg);
}

/*--content--*/
.content__area {
  color: #fff;
  overflow: hidden;
  visibility: hidden;
  max-height: 0;
  transition: 250ms ease;
  padding: 0 16px;
}

.content__area.active {
  visibility: visible;
  max-height: 500px;
  padding: 0 16px 16px 16px;
}
</style>
`;
