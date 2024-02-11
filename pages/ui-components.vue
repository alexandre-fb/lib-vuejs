<template>
  <div class="flex flex-col grow border-b-2 pb-12">
    <SectionAccordion section_id="accordion-list-section" />
  </div>
</template>

<script>
//sections
import SectionAccordion from "~/components/Sections/UiElements/SectionAccordion/SectionAccordion.vue";
export default {
  components: { 
    SectionAccordion, 
  },
  setup() {

    return {
    }
  }
};
</script>

<style>
</style>