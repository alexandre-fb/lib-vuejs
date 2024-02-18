<template>
  <header class="w-full h-12" ref="headerElement" id="header">
    <div
      class="fixed flex justify-center w-full px-3 h-12 top-0 z-[999] transition ease-in-out duration-300 bg-tertiary shadow-sm shadow-primary"
      :class="isScrollingDown ? '-translate-y-12' : 'translateY-0 '">
      <nav class="relative flex items-center w-full max-w-container">
        <!-- LOGO -->
        <div class="absolute left-0 h-full">
          <div class="flex items-center h-full">
            <button @click="toPageTop" class="text-white">
              <h2 class="text-xl text-white font-firaCode flex items-center">
                <VueLogo :width="'30px'" />
                <span class="font-bold">
                  ALE
                  <span class="hidden">vue js</span>
                </span>
              </h2>
            </button>
          </div>
        </div>

        <!-- LINKS -->
        <div class="block absolute right-0">
          <ul class="flex items-center gap-4">
            <li v-for="socialItem in socialItems" :key="socialItem.id">
              <a :href="socialItem.link" class="block w-5 text-white transition" :aria-label="socialItem.label"
                target="_blank">
                <component :is="socialItem.icon" hover_color="rgb(112, 185, 102)" />
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
import VueLogo from "../icons/VueLogo.vue";

export default {
  name: "Header",
  components: {
    LinkedinIcon,
    GitHubIcon,
    VueLogo
  },
  setup() {
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

    const handleWindowScroll = () => {
      setScrollDirection();
    }

    const handleWindowClick = (event) => {
      clickOutsideMenuMobile(event.target);
    }

    const setScrollDirection = () => {
      const currentScroll = window.scrollY;
      const headerHeight = headerElement.value.offsetHeight;
      if (currentScroll > lastScroll.value && currentScroll > headerHeight) {
        isScrollingDown.value = true;
      } else {
        isScrollingDown.value = false;
      }

      lastScroll.value = currentScroll;
    }

    const clickOutsideMenuMobile = (elementClicked) => {
      if (
        menuMobileIsOpen.value === true &&
        elementClicked !== mobileMenuElement.value &&
        !mobileMenuElement.value.contains(elementClicked)
      ) {
        menuMobileIsOpen.value = false;
      }
    }

    const toogleMenuMobile = () => {
      menuMobileIsOpen.value = !menuMobileIsOpen.value;
    }

    const toPageTop = () => {
      document.documentElement.scrollTop = 0;
    }

    return {
      menuMobileIsOpen,
      headerElement,
      mobileMenuElement,
      isScrollingDown,
      menuItems,
      socialItems,
      toogleMenuMobile,
      toPageTop
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