<template>
  <div class="flex flex-col grow">
    <!-- cards area -->
    <div
      class="flex flex-wrap justify-evenly items-center gap-x-5 gap-y-16 grow py-16"
    >
      <!-- card item -->
      <div
        v-for="card in cardsData"
        :key="card.id"
        class="__card group flex flex-col w-full sm:w-fit sm:min-w-80 h-fit min-h-80 border border-[#D9D9D926] rounded-3xl hover:border-[#D9D9D940] hover:shadow-2xl hover:shadow-[#70b96638] transition duration-300 ease-in-out"
      >
        <a :href="card.link"
          class="flex flex-col justify-evenly grow cursor-pointer w-full min-w-72"
        >
          <!-- icon area -->
          <div class="flex justify-center p-4">
            <!-- circle -->
            <div
              class="flex justify-center items-center w-40 h-40 border border-primary border-opacity-20 rounded-full group-hover:border-opacity-40 group-hover:scale-105 transition duration-300 ease-in-out"
            >
              <!-- icon -->
              <div
                class="origin-center w-[50%] h-[50%] lg:opacity-65 group-hover:scale-110 group-hover:opacity-100 transition duration-300 ease-in-out"
              >
                <component :is="card.icon" />
              </div>
            </div>
          </div>

          <!-- text area -->
          <div class="flex flex-col justify-center items-center p-4">
            <h2
              class="text-2xl font-firaCode lg:opacity-65 group-hover:opacity-100 transition ease-in-out duration-300"
            >
              {{ card.text }}
            </h2>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import AnimationIcon from "~/components/icons/AnimationIcon.vue";
import PuzzleIcon from "~/components/icons/PuzzleIcon.vue";
import LayoutIcon from '~/components/icons/LayoutIcon.vue';
export default {
  components: {
    PuzzleIcon,
    AnimationIcon,
    LayoutIcon
  },
  setup() {
    const cardsData = ref([
      {
        icon: "PuzzleIcon",
        id: "ui-components",
        link: "/ui-components",
        text: "UI Components",
      },
      {
        icon: "AnimationIcon",
        id: "animations",
        link: "/animations",
        text: "Animations",
      },
      {
        icon: "LayoutIcon",
        id: "layouts",
        link: "/layouts",
        text: "Layouts",
      },
    ]);
    return {
      cardsData,
    };
  },
};
</script>

<style scoped>
.__card {
  background: linear-gradient(
    227deg,
    #70b96645 -162.93%,
    rgba(196, 196, 196, 0) 79.12%
  );
}
</style>