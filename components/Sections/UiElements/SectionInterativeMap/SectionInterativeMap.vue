<template>
  <section class="py-10 px-3" :id="section_id">
    <!-- Title -->
    <SectionTitle>
      Mapa Interativo
    </SectionTitle>

    <!-- Exemplo -->
    <div class="mb-16">
      <SectionSubtitle>
        Exemplo de utilização:
      </SectionSubtitle>

      <InteraiveMap />
    </div>

    <!-- <div class="mb-16">
      <SectionSubtitle>
        Props:
      </SectionSubtitle>

      <PropsList :propsList="propsList" />
    </div>

    <div>
      <SectionSubtitle>
        Componente completo (vue 3):
      </SectionSubtitle>

      <VCodeBlock :code="componentCode" highlightjs lang="html" theme="nord" maxHeight="350px" />
    </div> -->
  </section>
</template>
    
<script>
import { ref } from 'vue';

import VCodeBlock from '@wdns/vue-code-block';
import InteraiveMap from '~/components/UiElements/InterativeMap/InterativeMap.vue';
import SectionTitle from '../../SectionTitle.vue';
import SectionSubtitle from '../../SectionSubtitle.vue';
import PropsList from '../../PropsList.vue';

import { accordionListData, propsListData, componentCodeString } from './sectionData';

export default {
  components: {
    SectionTitle,
    SectionSubtitle,
    PropsList,
    InteraiveMap,
    VCodeBlock,
  },
  props: {
    section_id: {
      type: String,
    }
  },
  setup() {
   

    return {

    }
  },
};
</script>
    
<style scoped></style>