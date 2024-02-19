<template>
  <header class="w-full h-12" ref="headerElement" id="header">
    <div
      class="__header-wrapper fixed flex justify-center w-full px-3 h-12 top-0 z-[999] transition ease-in-out duration-300 shadow-sm shadow-primary">
      <nav class="relative flex items-center w-full max-w-container">
        <!-- LOGO -->
        <div class="absolute left-0 h-full">
          <div class="flex items-center h-full">
            <NuxtLink :to="'/'">
              <h2 class="text-xl text-white font-firaCode flex items-center">
                <VueLogo :width="'30px'" />
                <span class="font-bold">
                  ALE
                  <span class="hidden">vue js</span>
                </span>
              </h2>
            </NuxtLink>
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

    return {
      menuMobileIsOpen,
      headerElement,
      mobileMenuElement,
      menuItems,
      socialItems,
      toogleMenuMobile,
    };
  },
};
</script>

<style scoped>

.__header-wrapper::after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: rgba(25, 21, 34, 0.047);
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  backdrop-filter: blur(2px);
}

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