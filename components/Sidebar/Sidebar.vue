<template>
  <transition name="fade" appear>
    <div class="xl:w-72" ref="sidebarElement">
      <div
        class="__sidebar__wrapper fixed top-12 z-50 shadow-sm bottom-0 overflow-y-auto bg-tertiary transition-all ease-in-out duration-300 overflow-x-hidden"
        :class="sidebarIsOpen ? 'w-72' : 'w-0 xl:w-72'">
        <!-- hamburger -->
        <div class="h-12 xl:hidden">
          <div class="fixed w-full h-12 max-w-container p-3 z-40 xl:hidden bg-tertiary bg-opacity-75">
            <button @click="toogleSidebar" class="flex flex-col gap-[6px]">
              <span class="block h-[2px] w-5 bg-white transition-all relative"
                :class="sidebarIsOpen ? 'left-2' : 'left-0 xl:left-2'"></span>
              <span class="block h-[2px] w-7 bg-white"></span>
              <span class="block h-[2px] w-7 bg-white"></span>
            </button>
          </div>
        </div>

        <!-- menu area -->
        <div class="w-full py-8 px-3 transition-opacity"
          :class="sidebarIsOpen ? 'opacity-100' : 'opacity-0 xl:opacity-100'">
          <nav class="bg-tertiary">
            <ul class="flex flex-col gap-4">
              <li v-for="(menuItem, index) in menuItems" :key="index">

                <!-- primary items -->
                <NuxtLink :to="menuItem.primaryItem.link" class="transition hover:opacity-90"
                  @click="handleMenuItemClick(menuItem.primaryItem.link)">
                  <span class="font-fira text-xl">
                    {{ menuItem.primaryItem.title }}
                  </span>
                </NuxtLink>

                <!-- secondary items -->
                <ul class="mt-3 ml-4 flex flex-col gap-4">
                  <li v-for="(secondaryItem, index) in menuItem.secondaryItems" :key="index">
                    <NuxtLink :to="secondaryItem.link" class="transition hover:opacity-90"
                      :id="`link-${secondaryItem.id}`" @click="handleMenuItemClick(secondaryItem.link)">
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
    const sidebarElement = ref()
    const sidebarIsOpen = ref(false);
    const headerHeight = ref(null);
    const footerHeight = ref(null);
    const activeMenuItem = ref('');
    const menuItems = ref([
      {
        primaryItem: {
          title: 'Sobre',
          link: '/',
          id: 'sobre'
        },
      },
      {
        primaryItem: {
          title: 'Componentes UI',
          link: '/ui-components',
          id: 'ui-components'
        },
        secondaryItems: [
          {
            title: 'Lista acordeon',
            link: '/ui-components#lista-acordeon',
            id: 'lista-acordeon'
          },
          {
            title: 'Mapa interativo',
            link: '/ui-components#mapa-interativo',
            id: 'mapa-interativo'
          },
        ]
      },
    ])

    const handleMenuItemClick = (menuLink) => {
      sidebarIsOpen.value = false;
      activeMenuItem.value = menuLink
    }

    const toogleSidebar = () => {
      sidebarIsOpen.value = !sidebarIsOpen.value;
    };

    onMounted(() => {
      headerHeight.value = document.getElementById("header").offsetHeight;
      footerHeight.value = document.getElementById("footer").offsetHeight;

      window.addEventListener("click", handleWindowClick);
      window.addEventListener("scroll", handleWindowScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("click", handleWindowClick);
      window.removeEventListener("scroll", handleWindowScroll);
    });

    const handleWindowClick = (event) => {
      clickOutsideSidebar(event.target)
    }

    const handleWindowScroll = () => {
      activeMenuSecondaryItem()
    }

    const clickOutsideSidebar = (elementClicked) => {
      if (
        window.innerWidth < 1280 &&
        sidebarIsOpen.value === true &&
        elementClicked !== sidebarElement.value &&
        !sidebarElement.value.contains(elementClicked)
      ) {
        sidebarIsOpen.value = false;
      }
    }

    const isActiveMenuPrimaryItem = (menuLink) => {
      return activeMenuItem.value === menuLink;
    }

    const activeMenuSecondaryItem = () => {
      const screenHeightPercentage = innerHeight * 0.5
      const sections = document.querySelectorAll('section[id]')

      sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top
        const sectionBottom = section.getBoundingClientRect().bottom
        const positionToActive = sectionTop - screenHeightPercentage
        const positionToInactive = sectionBottom - screenHeightPercentage
        const sectionId = section.getAttribute('id')

        const currentLink = document.querySelector('a[id="link-' + sectionId + '"]')
        if (positionToActive < 0 && positionToInactive > 0) {
          currentLink.classList.add('activeSecondaryItem')
        } else {
          currentLink.classList.remove('activeSecondaryItem')
        }
      })
    }

    return {
      sidebarElement,
      sidebarIsOpen,
      toogleSidebar,
      menuItems,
      handleMenuItemClick,
      isActiveMenuPrimaryItem
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

a[aria-current="page"]:not([id]) {
  border-bottom: 1px solid #ffffff28;
  padding-block: 8px;
}

.activeSecondaryItem {
  color: rgb(112, 185, 102)
}
</style>
