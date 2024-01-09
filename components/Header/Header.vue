<template>
  <header class="w-full h-20">
    <div
      ref="headerElement"
      class="fixed flex justify-center w-full px-3 h-20 top-0 z-50 transition ease-in-out duration-300 bg-tertiary shadow-sm shadow-primary"
      :class="isScrollingDown ? '-translate-y-20' : 'translateY-0 '"
    >
      <nav class="relative flex items-center w-full max-w-7xl">
        <!-- LOGO -->
        <div class="absolute left-0 h-full">
          <div class="flex items-center h-full">
            <a href="/" class="text-white">
              <h2 class="text-xl text-white font-firaCode">
                <span
                  >LIB <br />
                  VueJs</span
                >
              </h2>
            </a>
          </div>
        </div>

        <!-- MENU LINKS (DESKTOP) -->
        <div class="hidden absolute left-1/2 -translate-x-1/2"
          :class="route.href === '/' ? 'lg:hidden' : 'lg:block'"
        >
          <ul class="flex items-center gap-11">
            <li v-for="menuItem in menuItems" :key="menuItem.id">
              <a
                :href="menuItem.link"
                class="hover:text-primary transition"
                :class="
                  route.href === menuItem.link ? 'text-primary' : 'text-white'
                "
              >
                {{ menuItem.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- SOCIAL LINKS (DESKTOP) -->
        <div class="hidden lg:block absolute right-0">
          <ul class="flex items-center gap-4">
            <li v-for="socialItem in socialItems" :key="socialItem.id">
              <a
                :href="socialItem.link"
                class="block w-5 text-white transition"
                :aria-label="socialItem.label"
                target="_blank"
              >
                <component
                  :is="socialItem.icon"
                  hover_color="rgb(112, 185, 102)"
                />
              </a>
            </li>
          </ul>
        </div>

        <!-- HAMBURGER BTN (MOBILE) -->
        <div class="block absolute right-0 lg:hidden">
          <button
            class="menu__hamburger space-y-2 cursor-pointer"
            :class="menuMobileIsOpen ? 'hamburgerIsActive' : ''"
            @click.stop="toogleMenuMobile"
            :aria-label="menuMobileIsOpen ? 'fechar menu' : 'abrir menu'"
          >
            <div class="w-8 h-0.5 bg-white transition ease-in-out"></div>
            <div class="w-8 h-0.5 bg-white transition ease-in-out"></div>
            <div class="w-8 h-0.5 bg-white transition ease-in-out"></div>
          </button>
        </div>

        <!-- CONTENT AREA (MOBILE) -->
        <div
          ref="mobileMenuElement"
          class="absolute top-20 flex lg:hidden flex-col items-end gap-8 right-0 z-50 bg-[#70b966e6] w-60 p-5 text-right h-screen transition-all duration-200 ease-in-out"
          :class="menuMobileIsOpen ? 'linksMobileVisible' : 'linksMobileHidden'"
          :aria-hidden="menuMobileIsOpen ? true : false"
        >
          <!-- MENU LINKS (MOBILE) -->
          <ul class="flex flex-col items-center gap-4">
            <li
              class="relative"
              v-for="menuItem in menuItems"
              :key="menuItem.id"
            >
              <a
                :href="menuItem.link"
                class="hover:text-tertiary duration-200 ease-in-out"
                :class="
                  route.href === menuItem.link
                    ? 'text-tertiary'
                    : 'text-white'
                "
              >
                {{ menuItem.label }}
              </a>
            </li>
          </ul>

          <!-- SOCIAL LINKS (MOBILE) -->
          <ul class="flex items-center gap-4">
            <li v-for="socialItem in socialItems" :key="socialItem.id">
              <a
                :href="socialItem.link"
                class="block w-5 text-white hover:scale-105 transition"
                :title="socialItem.label"
                :aria-label="socialItem.label"
                target="_blank"
              >
                <!-- <component :is="socialItem.icon" /> -->
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import LinkedinIcon from "../icons/LinkedinIcon.vue";
import GitHubIcon from "../icons/GitHubIcon.vue";

export default {
  name: "Header",
  components: {
    LinkedinIcon,
    GitHubIcon,
  },
  setup() {
    const route = useRoute();
    const menuMobileIsOpen = ref(false);

    const headerElement = ref();
    const mobileMenuElement = ref();

    const lastScroll = ref(0);
    const isScrollingDown = ref(false);

    const menuItems = ref([
      {
        label: "Início",
        id: "home",
        link: "/",
      },
      {
        label: "Sobre",
        id: "sobre",
        link: "/sobre",
      },
      {
        label: "Contato",
        id: "contato",
        link: "/contato",
      },
    ]);

    const socialItems = ref([
      {
        label: "Linkedin",
        id: "linkedin",
        link: "https://www.linkedin.com/in/alexandre-fb/",
        icon: markRaw(LinkedinIcon),
      },
      {
        label: "Github",
        id: "github", 
        link: "https://github.com/alexandre-fb",
        icon: markRaw(GitHubIcon),
      },
    ]);

    onMounted(() => {
      window.addEventListener("scroll", handleWindowScroll);
      window.addEventListener("click", handleWindowClick);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleWindowScroll);
      window.removeEventListener("click", handleWindowClick);
    });

    function handleWindowScroll() {
      setScrollDirection();
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
      headerElement,
      mobileMenuElement,
      isScrollingDown,
      menuItems,
      socialItems,
      toogleMenuMobile,
      route,
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