<template>
  <section class="py-10 px-3" :id="section_id">
    <!-- Title -->
    <SectionTitle>
      Accordion List
    </SectionTitle>

    <!-- Exemplo -->
    <div class="mb-16">
      <SectionSubtitle>
        Exemplo de utilização:
      </SectionSubtitle>

      <AccordionList 
        :multiple_items_open="true" 
        :data="AccordionListData" 
      />
    </div>

    <div class="mb-16">
      <SectionSubtitle>
        Props:
      </SectionSubtitle>

      <PropsList :propsList="propsList" />
    </div>

    <div>
      <SectionSubtitle>
        Componente completo (vue 3):
      </SectionSubtitle>

      <div class="xl:max-w-[1000px]">
        <VCodeBlock :code="componentCode" highlightjs lang="html" theme="nord" maxHeight="350px" />
      </div>
    </div>
  </section>
</template>
    
<script>
import { ref } from 'vue';

import VCodeBlock from '@wdns/vue-code-block';
import AccordionList from '~/components/UiElements/AccordionList/AccordionList.vue';
import SectionTitle from '../../SectionTitle.vue';
import SectionSubtitle from '../../SectionSubtitle.vue';
import PropsList from '../../PropsList.vue';

import { accordionListData, propsListData, componentCodeString } from './sectionData';

export default {
  components: {
    SectionTitle,
    SectionSubtitle,
    PropsList,
    AccordionList,
    VCodeBlock,
  },
  props: {
    section_id: {
      type: String,
    }
  },
  setup() {
    const AccordionListData = ref(accordionListData)
    const propsList = ref(propsListData)
    const componentCode = ref(componentCodeString);

    return {
      AccordionListData,
      propsList,
      componentCode,
    }
  },
};
</script>
    
<style scoped></style>