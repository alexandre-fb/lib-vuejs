<template>
    <section class="py-10 px-3" :id="section_id">
        <SectionTitle>
          Accordion List
        </SectionTitle>

        <SectionSubtitle>
          Exemplo de utilização:
        </SectionSubtitle>

        <div class="mb-16">
          <AccordionList
            :multiple_items_open="true"
            :data="AccordionListData"
          />
        </div>

        <SectionSubtitle>
          Props:
        </SectionSubtitle>

        <PropsList />

    </section>
</template>
    
<script>
import { ref } from 'vue';

import SectionTitle from '../SectionTitle.vue';
import SectionSubtitle from '../SectionSubtitle.vue';
import PropsList from '../PropsList.vue';

export default {
  components: {
    SectionTitle,
    SectionSubtitle,
    PropsList
  },
  props: {
    section_id: {
      type: String,
    }
  },
  setup() {
    const AccordionListData = ref([
          {
            title: 'Pergunta 1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo ex a bibendum pulvinar. In vestibulum mattis condimentum Curabitur scelerisque auctor mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          },
          {
            title: 'Pergunta 2',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo ex a bibendum pulvinar. In vestibulum mattis condimentum Curabitur scelerisque auctor mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo ex a bibendum pulvinar. In vestibulum mattis condimentum Curabitur scelerisque auctor mollis.',
          },
          {
            title: 'Pergunta 3',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo ex a bibendum pulvinar. In vestibulum mattis condimentum Curabitur scelerisque auctor mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo ex a bibendum pulvinar. In vestibulum mattis condimentum Curabitur scelerisque auctor mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo ex a bibendum pulvinar. In vestibulum mattis condimentum Curabitur scelerisque auctor mollis.',
          },
        ])

    return {
      AccordionListData
    }
  },
};
</script>
    
<style scoped>
</style>