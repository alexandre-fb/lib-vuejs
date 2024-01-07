<template>
  <header class="w-full h-20">
    <div 
      ref="headerElement"
      class="fixed flex justify-center w-full px-3 h-20 top-0 z-50 transition ease-in-out duration-300 bg-gray-500"
      :class="isScrollingDown ? '-translate-y-16' : 'translateY-0 '"
    >
      <nav
        class="relative flex items-center w-full max-w-7xl border border-green-300"
      >
        <!-- LEFT -->
        <div class="absolute left-0 flex items-center h-full bg-green-700">
          <div class="px-4 text-white">LEFT</div>
        </div>

        <!-- CENTER (DESKTOP) -->
        <div
          class="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center h-full bg-green-700"
        >
          <div class="px-4 text-white">CENTER (DESKTOP)</div>
        </div>

        <!-- RIGHT (DESKTOP) -->
        <div
          class="absolute right-0 hidden lg:flex items-center h-full bg-green-700"
        >
          <div class="px-4 text-white">RIGHT (DESKTOP)</div>
        </div>

        <!-- BTN OPEN MENU (MOBILE) -->
        <div
          class="absolute right-0 z-[99] flex lg:hidden items-center h-full bg-blue-900"
        >
          <button class="px-4 text-white" @click.stop="toogleMenuMobile">
            BTN MENU
          </button>
        </div>

        <!-- MENU CONTENT (MOBILE) -->
        <div
          ref="mobileMenuElement"
          class="absolute right-0 top-full flex lg:hidden z-[99] bg-blue-900 w-60 p-5 h-screen transition-all duration-200 ease-in-out"
          :class="menuMobileIsOpen ? 'translate-x-0' : 'translate-x-64'"
        >
          <div>MENU CONTENT (MOBILE)</div>

        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
export default {
  name: "Header",
  setup() {
    const menuMobileIsOpen = ref(false);

    const headerElement = ref();
    const mobileMenuElement = ref();

    const lastScroll = ref(0);
    const isScrollingDown = ref(false);


    onMounted(() => {
      window.addEventListener("scroll", handleWindowScroll);
      window.addEventListener("click", handleWindowClick);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleWindowScroll);
      window.removeEventListener("click", handleWindowClick);
    });

    function handleWindowScroll() {
      setScrollDirection()
    }

    function handleWindowClick(event) {
      clickOutsideMenuMobile(event.target);
    }

    function setScrollDirection() {
      const currentScroll = window.scrollY;
      const headerHeight = headerElement.value.offsetHeight;
      if (currentScroll > lastScroll.value && currentScroll > headerHeight) {
        isScrollingDown.value = true;
      } else {
        isScrollingDown.value = false;
      }

      lastScroll.value = currentScroll;
    }

    function clickOutsideMenuMobile(elementClicked) {
      if (
        menuMobileIsOpen.value === true &&
        elementClicked !== mobileMenuElement.value &&
        !mobileMenuElement.value.contains(elementClicked)
      ) {
        menuMobileIsOpen.value = false;
      }
    }

    function toogleMenuMobile() {
      menuMobileIsOpen.value = !menuMobileIsOpen.value;
    }

    return {
      menuMobileIsOpen,
      isScrollingDown,
      toogleMenuMobile,
      headerElement,
      mobileMenuElement,
    };
  },
};
</script>
