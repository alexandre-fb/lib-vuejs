<template>
  <div class="flex flex-col grow mt-16 px-5">
    <!-- title -->
    <section class="flex justify-center">
      <h2 class="text-2xl font-firaCode">UI Components</h2>
    </section>

    <!-- content -->
    <section>
      <AccordionList
        :multiple_items_open="false"
        :data="AccordionListData"
      />
    </section>
  </div>
</template>

<script>
import { ref } from "vue";
import AccordionList from "~/components/AccordionList.vue";
export default {
  components: { AccordionList },
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
  }
};
</script>

<style>
</style>