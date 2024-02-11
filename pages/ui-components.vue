<template>
  <div class="flex flex-col grow">
    <SectionAccordion section_id="accordion-list-section" />
  </div>
</template>

<script>
//sections
import SectionAccordion from "~/components/Sections/UiElements/SectionAccordion.vue";
import AccordionList from "~/components/AccordionList.vue";
export default {
  components: { 
    SectionAccordion, 
    AccordionList 
  },
  setup() {

    return {
    }
  }
};
</script>

<style>
</style>