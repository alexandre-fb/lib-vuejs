<template>
  <div class="flex flex-col grow border-b-2 pb-12">
    <SectionAccordion section_id="lista-acordeon" />
  </div>
  <div class="flex flex-col grow border-b-2 pb-12">
    <SectionInterativeMap section_id="mapa-interativo" />
  </div>
</template>

<script>
//sections
import SectionAccordion from "~/components/Sections/UiElements/SectionAccordion/SectionAccordion.vue";
import SectionInterativeMap from "~/components/Sections/UiElements/SectionInterativeMap/SectionInterativeMap.vue";

export default {
  components: {
    SectionAccordion,
    SectionInterativeMap
  },
  setup() {

    return {
    }
  }
};
</script>

<style></style>