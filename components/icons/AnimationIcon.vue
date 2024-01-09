<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="none"
    @mouseenter="isMouseHover = true"
    @mouseleave="isMouseHover = false"
  >
    <g clip-path="url(#clip0_1011_31)">
      <path
        d="M31.1309 0.349873C31.7622 0.787373 32.0934 1.54362 31.9747 2.29987L27.9747 28.2999C27.8809 28.9061 27.5122 29.4374 26.9747 29.7374C26.4372 30.0374 25.7934 30.0749 25.2247 29.8374L17.7497 26.7311L13.4684 31.3624C12.9122 31.9686 12.0372 32.1686 11.2684 31.8686C10.4997 31.5686 9.99967 30.8249 9.99967 29.9999V24.7749C9.99967 24.5249 10.0934 24.2874 10.2622 24.1061L20.7372 12.6749C21.0997 12.2811 21.0872 11.6749 20.7122 11.2999C20.3372 10.9249 19.7309 10.8999 19.3372 11.2561L6.62467 22.5499L1.10592 19.7874C0.443424 19.4561 0.0184244 18.7936 -0.000325591 18.0561C-0.0190756 17.3186 0.368424 16.6311 1.00592 16.2624L29.0059 0.262373C29.6747 -0.118877 30.4997 -0.0813772 31.1309 0.349873Z"
        :fill="isMouseHover ? (hover_color ? hover_color : color) : color"
      />
    </g>
    <defs>
      <clipPath id="clip0_1011_31">
        <rect width="32" height="32" fill="white" />
      </clipPath>
    </defs>
  </svg>
</template>

<script>
import { ref } from "vue";
export default {
  name: "AnimationIcon",
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