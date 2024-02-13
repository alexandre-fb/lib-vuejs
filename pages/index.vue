<template>
  <SectionTitle>
    Biblioteca de Componentes Vue.js
  </SectionTitle>

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
        Meu nome é <a href="https://alexandrefb.com" target="_blank" class="opacity-80 hover:opacity-100 transition">Alexandre Bisognin</a>, e desenvolvi esta biblioteca com a missão de acelerar o desenvolvimento, mantendo a qualidade e promovendo uma experiência eficiente e consistente no meu dia a dia. 
      </p>
    </div>
  </div>

  <!-- Como Usar -->
  <div>
    <SectionSubtitle>
      Como Usar
    </SectionSubtitle>
    <p>
      Os componentes foram projetados para serem reutilizáveis, responsivos e acessíveis, e estão disponíveis na íntegra. Basta copiar o código, adicionar ao seu projeto e personalizar dados e estilos conforme necessário.
    </p>
  </div>
</template>
<script>
import SectionTitle from '~/components/Sections/SectionTitle.vue';
import SectionSubtitle from '~/components/Sections/SectionSubtitle.vue';

export default {
  components: {
    SectionTitle,
    SectionSubtitle
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
</style>
