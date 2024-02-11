<template>
  <div class="bg-blue-500 xl:w-72">
    <div
      class="fixed bottom-0 overflow-y-auto bg-pink-300 transition-all ease-in-out duration-300"
      :class="sidebarIsOpen ? 'w-72' : 'w-0'"
      :style="`height: ${isScrollingDown ? '100vh' : sidebarMaxHeight + 'px'}`"
    >
      <!-- hamburger -->
      <div class="h-12">
        <div
          class="fixed w-full h-12 max-w-container p-3 z-40 xl:hidden bg-tertiary bg-opacity-50"
        >
          <button @click="toogleSidebar" class="flex flex-col gap-[6px]">
            <span
              class="block h-[2px] w-5 bg-white transition-all relative"
              :class="sidebarIsOpen ? 'left-2' : 'left-0'"
            ></span>
            <span class="block h-[2px] w-7 bg-white"></span>
            <span class="block h-[2px] w-7 bg-white"></span>
          </button>
        </div>
      </div>

      <!-- menu area -->
      <div 
        class="w-full p-3 transition-opacity" 
        :class="sidebarIsOpen ? 'opacity-100' : 'opacity-0'"
      >
        <nav class="flex flex-col gap-4 bg-green-500">
          <div class="h-[200vh] bg-green-900">Bloco 1</div>
          <div class="h-10 bg-green-900">Bloco 1</div>
          <div class="h-10 bg-green-900">Bloco 1</div>
          <div class="h-10 bg-green-900">Bloco 1</div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";

export default {
  name: "Sidebar",
  components: {},
  setup() {
    const sidebarIsOpen = ref(true);
    const sidebarMaxHeight = ref(null);
    const headerHeight = ref(null);
    const footerHeight = ref(null);

    const calcSidebarMaxHeight = () => {
      const windowHeight = window.innerHeight;
      console.log("windowHeight", windowHeight);
      sidebarMaxHeight.value = windowHeight - headerHeight.value;
      console.log("maxHeight.value", sidebarMaxHeight.value);
    };

    const toogleSidebar = () => {
      sidebarIsOpen.value = !sidebarIsOpen.value;
    };

    const lastScroll = ref(0);
    const isScrollingDown = ref(false);

    onMounted(() => {
      headerHeight.value = document.getElementById("header").offsetHeight;
      footerHeight.value = document.getElementById("footer").offsetHeight;
      calcSidebarMaxHeight();

      if (window.innerWidth > 1280) {
        sidebarIsOpen.value = true;
      }

      window.addEventListener("scroll", handleWindowScroll);
      window.addEventListener("resize", handleWindowResize);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleWindowScroll);
      window.removeEventListener("resize", handleWindowResize);
    });

    function handleWindowScroll() {
      setScrollDirection();
      calcSidebarMaxHeight();
    }
    function handleWindowResize() {
      calcSidebarMaxHeight();

      if (window.innerWidth > 1280) {
        sidebarIsOpen.value = true;
      }
    }

    function setScrollDirection() {
      const currentScroll = window.scrollY;
      if (
        currentScroll > lastScroll.value &&
        currentScroll > headerHeight.value
      ) {
        isScrollingDown.value = true;
      } else {
        isScrollingDown.value = false;
      }

      lastScroll.value = currentScroll;
    }

    return {
      sidebarIsOpen,
      toogleSidebar,
      isScrollingDown,
      sidebarMaxHeight,
    };
  },
};
</script>

<style scoped>
/*MENU HAMBURGER*/

.menu__hamburger.hamburgerIsActive :first-child {
  transform: rotate(-225deg);
  position: relative;
  top: 10px;
}

.menu__hamburger.hamburgerIsActive :nth-child(2) {
  opacity: 0;
}

.menu__hamburger.hamburgerIsActive :last-child {
  transform: rotate(45deg);
  position: relative;
  top: -10px;
}

.linksMobileHidden {
  transform: translateX(200px);
  opacity: 0;
}

.linksMobileVisible {
  transform: translateX(16px);
  opacity: 1;
}
</style>
