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

      <div class="py-20">
        <InterativeMap />
      </div>
    </div>

    <div class="mb-16">
      <SectionSubtitle>
        Observação:
      </SectionSubtitle>

      <p>
        A interação é feita manipulando as tags 'path' do svg.
      </p>
      
    </div>
   

    <div>
      <SectionSubtitle>
        Componente completo (vue 3):
      </SectionSubtitle>

      <div class="xl:max-w-[1000px] mb-12">
        <VCodeBlock :code="componentCode" highlightjs lang="html" theme="nord" maxHeight="350px" label="InterativeMap.vue" />
      </div>
      <div class="xl:max-w-[1000px]">
        <VCodeBlock :code="mapDataCode" highlightjs lang="javascript" theme="nord" maxHeight="350px" label="statesData.js (importado no componente acima)" />
      </div>
    </div> 
  </section>
</template>
    
<script>
import { ref } from 'vue';

import VCodeBlock from '@wdns/vue-code-block';
import InterativeMap from '~/components/UiElements/InterativeMap/InterativeMap.vue';
import SectionTitle from '../../SectionTitle.vue';
import SectionSubtitle from '../../SectionSubtitle.vue';

import { componentCodeString, mapDataCodeString } from './sectionData';


export default {
  components: {
    SectionTitle,
    SectionSubtitle,
    InterativeMap,
    VCodeBlock,
  },
  props: {
    section_id: {
      type: String,
    }
  },
  setup() {
    const componentCode = ref(componentCodeString);
    const mapDataCode = ref(mapDataCodeString);

    return {
      componentCode,
      mapDataCode
    }
  },
};
</script>
    
<style scoped></style>