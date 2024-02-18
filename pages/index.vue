<template>
  <div class="py-10 px-3">
    <!-- intro -->
    <section class="mt-8">
      <SectionTitle>
        Biblioteca de Componentes Vue.js
      </SectionTitle>
      <div class="w-full flex justify-center my-4 mb-12">
        <!-- Logo -->
        <div class="flex items-center h-full">
          <a href="/" class="text-white">
            <h2 class="text-xl text-white font-firaCode flex items-center">
              <VueLogo :width="'100px'" />
              <span class="font-bold text-5xl">
                ALE
                <span class="hidden">vue js</span>
              </span>
            </h2>
          </a>
        </div>
      </div>
    
    </section>
  
    <!-- Sobre -->
    <div class="mb-12">
      <SectionSubtitle>
        Sobre
      </SectionSubtitle>
      <div class="flex flex-col gap-2">
        <p>
          Bem-vindo à minha Biblioteca de Componentes Vue.js!
        </p>
        <p>
          Meu nome é <a href="https://alexandrefb.com" target="_blank"
            class="opacity-80 hover:opacity-100 transition">Alexandre Bisognin</a>, e desenvolvi esta biblioteca com a
          missão de acelerar o desenvolvimento, mantendo a qualidade e promovendo uma experiência eficiente e consistente no
          meu dia a dia.
        </p>
      </div>
    </div>
  
    <!-- Como Usar -->
    <div class="mb-12">
      <SectionSubtitle>
        Como Usar
      </SectionSubtitle>
      <p>
        Os componentes foram projetados para serem reutilizáveis, responsivos e acessíveis, e estão disponíveis na íntegra.
        Basta copiar o código, adicionar ao seu projeto e personalizar dados e estilos conforme necessário.
      </p>
    </div>
  
    <!-- cards area -->
    <div>
      <SectionSubtitle>
        Categorias
      </SectionSubtitle>
      <div class="flex flex-wrap justify-center items-center gap-x-5 gap-y-16 grow py-16">
        <!-- card item -->
        <div v-for="card in cardsData" :key="card.id">
          <div 
            v-if="card.active"
            class="__card group flex flex-col w-full sm:w-fit sm:min-w-80 h-fit min-h-80 border border-[#D9D9D926] rounded-3xl hover:border-[#D9D9D940] hover:shadow-2xl hover:shadow-[#70b96638] transition duration-300 ease-in-out">
            <a :href="card.link" class="flex flex-col justify-evenly grow cursor-pointer w-full min-w-72">
              <!-- icon area -->
              <div class="flex justify-center p-4">
                <!-- circle -->
                <div
                  class="flex justify-center items-center w-40 h-40 border border-primary border-opacity-20 rounded-full group-hover:border-opacity-40 group-hover:scale-105 transition duration-300 ease-in-out">
                  <!-- icon -->
                  <div
                    class="origin-center w-[50%] h-[50%] lg:opacity-65 group-hover:scale-110 group-hover:opacity-100 transition duration-300 ease-in-out">
                    <component :is="card.icon" />
                  </div>
                </div>
              </div>
      
              <!-- text area -->
              <div class="flex flex-col justify-center items-center p-4">
                <h2 class="text-2xl font-fira lg:opacity-65 group-hover:opacity-100 transition ease-in-out duration-300">
                  {{ card.text }}
                </h2>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import SectionTitle from '~/components/Sections/SectionTitle.vue';
import SectionSubtitle from '~/components/Sections/SectionSubtitle.vue';

import VueLogo from '~/components/icons/VueLogo.vue';
import AnimationIcon from "~/components/icons/AnimationIcon.vue";
import PuzzleIcon from "~/components/icons/PuzzleIcon.vue";
import LayoutIcon from '~/components/icons/LayoutIcon.vue';


export default {
  components: {
    VueLogo,
    SectionTitle,
    SectionSubtitle,
    AnimationIcon,
    PuzzleIcon,
    LayoutIcon,
  },
  setup() {

    const cardsData = ref([
      {
        icon: "PuzzleIcon",
        id: "ui-components",
        link: "/ui-components",
        text: "UI Components",
        active: true
      },
      {
        icon: "AnimationIcon",
        id: "animations",
        link: "/animations",
        text: "Animations",
        active: false
      },
      {
        icon: "LayoutIcon",
        id: "layouts",
        link: "/layouts",
        text: "Layouts",
        active: false
      },
    ]);


    return {
      cardsData
    };
  },
};
</script>

<style scoped></style>
