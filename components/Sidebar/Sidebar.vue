<template>
  <transition name="fade" appear>
    <div class="xl:w-72" ref="sidebarElement">
      <div
        class="__sidebar__wrapper fixed z-50 shadow-sm bottom-0 overflow-y-auto bg-tertiary transition-all ease-in-out duration-300 overflow-x-hidden"
        :class="sidebarIsOpen ? 'w-72' : 'w-0 xl:w-72'"
        :style="`height: ${isScrollingDown ? '100vh' : sidebarMaxHeight + 'px'}`"
      >
        <!-- hamburger -->
        <div class="h-12 xl:hidden">
          <div
            class="fixed w-full h-12 max-w-container p-3 z-40 xl:hidden bg-tertiary bg-opacity-50"
          >
            <button @click="toogleSidebar" class="flex flex-col gap-[6px]">
              <span
                class="block h-[2px] w-5 bg-white transition-all relative"
                :class="sidebarIsOpen ? 'left-2' : 'left-0 xl:left-2'"
              ></span>
              <span class="block h-[2px] w-7 bg-white"></span>
              <span class="block h-[2px] w-7 bg-white"></span>
            </button>
          </div>
        </div>
  
        <!-- menu area -->
        <div 
          class="w-full py-8 px-3 transition-opacity" 
          :class="sidebarIsOpen ? 'opacity-100' : 'opacity-0 xl:opacity-100'"
        >
          <nav class="bg-tertiary">
            <ul class="flex flex-col gap-4">
              <li v-for="(menuItem, index) in menuItems" :key="index">

                <!-- primary items -->
                <NuxtLink 
                  :to="menuItem.primaryItem.link" 
                  class="transition hover:opacity-90"
                  :class="{ activeItem : isActiveMenuItem(menuItem.primaryItem.link) }"
                      @click="handleMenuItemClick(menuItem.primaryItem.link)"
                >
                  <span class="font-fira text-xl">
                    {{ menuItem.primaryItem.title }}
                  </span>
                </NuxtLink>

                <!-- secondary items -->
                <ul class="mt-3 ml-4 flex flex-col gap-4">
                  <li v-for="(secondaryItem, index) in menuItem.secondaryItems" :key="index">
                    <NuxtLink 
                      :to="secondaryItem.link"
                      class="transition hover:opacity-90"
                      :class="{ activeItem : isActiveMenuItem(secondaryItem.link) }"
                      @click="handleMenuItemClick(secondaryItem.link)"
                    >
                      <span>{{ secondaryItem.title }}</span>
                    </NuxtLink>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";

export default {
  name: "Sidebar",
  components: {},
  setup() {
    const route = useRoute()
    const sidebarElement = ref()
    const sidebarIsOpen = ref(false);
    const sidebarMaxHeight = ref(null);
    const headerHeight = ref(null);
    const footerHeight = ref(null);
    const lastScroll = ref(0);
    const isScrollingDown = ref(false);
    const activeMenuItem = ref('');
    const menuItems = ref([
     {
      primaryItem: {
        title: 'Início',
        link: '/'
      },
     }, 
     {
      primaryItem: {
        title: 'Componentes UI',
        link: '/ui-components'
      },
      secondaryItems: [
        {
          title: 'Lista acordeon',
          link: '/ui-components#lista-acordeon'
        },
        {
          title: 'Mapa interativo',
          link: '/ui-components#mapa-interativo'
        },
      ]
     }, 
    ])

    const handleMenuItemClick = (menuLink) => {
      sidebarIsOpen.value = false;
      activeMenuItem.value = menuLink
    }
    
    const isActiveMenuItem = (menuLink) => {
      console.log('activeMenuItem.value', activeMenuItem.value)
      return activeMenuItem.value === menuLink;
    }

    const calcSidebarMaxHeight = () => {
      const windowHeight = window.innerHeight;
      sidebarMaxHeight.value = windowHeight - headerHeight.value;
    };

    const toogleSidebar = () => {
      sidebarIsOpen.value = !sidebarIsOpen.value;
    };

    onMounted(() => {
      headerHeight.value = document.getElementById("header").offsetHeight;
      footerHeight.value = document.getElementById("footer").offsetHeight;
      calcSidebarMaxHeight();

      window.addEventListener("click", handleWindowClick);
      window.addEventListener("scroll", handleWindowScroll);
      window.addEventListener("resize", handleWindowResize);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("click", handleWindowClick);
      window.removeEventListener("scroll", handleWindowScroll);
      window.removeEventListener("resize", handleWindowResize);
    });

    function handleWindowClick(event) {
      clickOutsideSidebar(event.target)
    }

    function handleWindowScroll() {
      setScrollDirection();
      calcSidebarMaxHeight();
    }
    function handleWindowResize() {
      calcSidebarMaxHeight();
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

    function clickOutsideSidebar(elementClicked) {
      if (
        window.innerWidth < 1280 &&
        sidebarIsOpen.value === true &&
        elementClicked !== sidebarElement.value &&
        !sidebarElement.value.contains(elementClicked)
      ) {
        sidebarIsOpen.value = false;
      }
    }

    return {
      sidebarElement,
      sidebarIsOpen,
      toogleSidebar,
      isScrollingDown,
      sidebarMaxHeight,
      menuItems,
      handleMenuItemClick,
      isActiveMenuItem
    };
  },
};
</script>

<style scoped>
.__sidebar__wrapper {
  box-shadow: 3px 0 3px rgba(112, 185, 102, .25);
}

::-webkit-scrollbar {
  width: 10px; 
}

::-webkit-scrollbar-thumb {
  background-color: rgba(112, 185, 102, .85); 
  box-shadow: 0 0 10px #ffffff;
}

::-webkit-scrollbar-track {
  background-color: #b6b6b6;
}

.activeItem {
  color: rgb(112, 185, 102)}
</style>
