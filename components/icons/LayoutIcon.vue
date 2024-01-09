<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    fill="none"
    @mouseenter="isMouseHover = true"
    @mouseleave="isMouseHover = false"
  >
    <g>
      <rect width="13.5488" height="16.573" rx="2" :fill="isMouseHover ? (hover_color ? hover_color : color) : color" />
      <rect
        x="15.4844"
        y="12.702"
        width="13.5488"
        height="16.573"
        rx="2"
        :fill="isMouseHover ? (hover_color ? hover_color : color) : color"
      />
      <rect
        y="18.3876"
        width="13.5488"
        height="10.8874"
        rx="2"
        :fill="isMouseHover ? (hover_color ? hover_color : color) : color"
      />
      <rect
        x="15.4844"
        width="13.5488"
        height="10.8874"
        rx="2"
        :fill="isMouseHover ? (hover_color ? hover_color : color) : color"
      />
    </g>
  </svg>
</template>

<script>
import { ref } from "vue";
export default {
  name: "LayoutIcon",
  props: {
    color: {
      type: String,
      default: "#70B966",
    },
    hover_color: {
      type: String,
    },
  },
  setup() {
    const isMouseHover = ref(false);
    return {
      isMouseHover,
    };
  },
};
</script>

<style>
</style>