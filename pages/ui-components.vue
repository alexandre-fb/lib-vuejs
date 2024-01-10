<template>
  <div class="container flex flex-col grow mt-16">

    <!-- title -->
    <section class="flex justify-center">
      <h2 class="text-2xl font-firaCode">UI Components</h2>
    </section>

    <!-- content -->
    <section>
      <AccordionList 
        multiple_items_open
        :border="false"
        border_color="#fff"
        :rounded="15"
        bg_title="#70b966"
        bg_content="#6687b9"
        title_color="#fff"
        icon_color="#6687b9"
        content_color="red"
      />
    </section>
  </div>
</template>

<script>
import AccordionList from '~/components/AccordionList.vue';
export default {
  components: { AccordionList },};
</script>

<style>
</style>