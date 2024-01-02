<template>
  <header class="flex justify-center w-full px-3 h-[60px] fixed top-0 z-50">
    <nav class="relative flex items-center w-full max-w-7xl">

      <!-- LOGO -->
      <div class="absolute left-0">
        <a href="/" class="text-white">
          <h2 class="text-xl text-white font-title">LOGO</h2>
        </a>
      </div>

      <!-- MENU LINKS (DESKTOP) -->
      <div class="hidden lg:block absolute left-1/2 -translate-x-1/2">
        <ul class="flex items-center gap-11">
          <li v-for="menuItem in state.menuItems" :key="menuItem.value">
            <a :href="menuItem.link" class="menu__link text-white">{{
              menuItem.label
            }}</a>
          </li>
        </ul>
      </div>

      <!-- SOCIAL LINKS (DESKTOP) -->
      <div class="hidden lg:block absolute right-0">
        <ul class="flex items-center gap-4">
          <li v-for="socialItem in state.socialItems" :key="socialItem.value">
            <a :href="socialItem.link" class="menu__link text-white">{{
              socialItem.label
            }}</a>
          </li>
        </ul>
      </div>

      <!-- HAMBURGER BTN (MOBILE) -->
      <div class="block absolute right-0 lg:hidden">
        <div
          class="menu__hamburger space-y-2 cursor-pointer"
          :class="state.menuMobileIsOpen ? 'hamburgerIsActive' : ''"
          @click.stop="toogleMenu"
        >
          <div class="w-8 h-0.5 bg-white transition ease-in-out"></div>
          <div class="w-8 h-0.5 bg-white transition ease-in-out"></div>
          <div class="w-8 h-0.5 bg-white transition ease-in-out"></div>
        </div>
      </div>

      <!-- CONTENT AREA (MOBILE) -->
      <div
        id="header-links-mobile"
        class="absolute flex lg:hidden flex-col items-end gap-8 right-0 top-full z-50 bg-blue-500 w-60  p-5 text-right h-screen transition-all duration-200 ease-in-out "
        :class="
          state.menuMobileIsOpen ? 'linksMobileVisible' : 'linksMobileHidden'
        "
      >
        <!-- MENU LINKS (MOBILE) -->
        <ul class="flex-col items-center gap-11">
          <li
            class="relative"
            v-for="item in state.menuItems"
            :key="item.value"
          >
            <a :href="item.link" class="menu__link text-white">{{
              item.label
            }}</a>
          </li>
        </ul>

        <!-- SOCIAL LINKS (MOBILE) -->
        <ul class="flex items-center gap-4">
          <li v-for="socialItem in state.socialItems" :key="socialItem.value">
            <a :href="socialItem.link" class="text-white">{{
              socialItem.label
            }}</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { onBeforeUnmount, onMounted, reactive } from "vue";
export default {
  name: "Header",
  setup() {
    const state = reactive({
      menuItems: [
        {
          label: "Home",
          value: "home",
          link: "#",
        },
        {
          label: "Sobre",
          value: "sobre",
          link: "#",
        },
        {
          label: "Contato",
          value: "contato",
          link: "#",
        },
      ],
      socialItems: [
        {
          label: "Linkedin",
          value: "linkedin",
          link: "#",
        },
        {
          label: "Github",
          value: "github",
          link: "#",
        },
      ],
      menuMobileIsOpen: false,
    });

    onMounted(() => {
      window.addEventListener("click", clickOutside);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("click", clickOutside);
    });

    function clickOutside(event) {
      if (event.target.id !== "header-links-mobile") {
        closeMenuMobile();
      }
    }

    function toogleMenu() {
      state.menuMobileIsOpen = !state.menuMobileIsOpen;
    }

    function openMenuMobile() {
      state.menuMobileIsOpen = true;
    }

    function closeMenuMobile() {
      state.menuMobileIsOpen = false;
    }

    return {
      state,
      toogleMenu,
      openMenuMobile,
    };
  },
};
</script>

<style scoped>
/*HOVER LINKS*/
.menu__link {
  display: block;
  padding: 8px 0px;
  position: relative;
}

.menu__link:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  height: 0;
  width: 0;
}

.menu__link:hover:after {
  content: "";
  border-bottom: 1px solid white;
  border-left: none;
  border-top: none;
  height: 100%;
  width: 100%;
  transition: width 200ms ease-in-out;
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