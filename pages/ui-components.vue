<template>
  <div class="container flex flex-col grow mt-16">

    <!-- title -->
    <section class="flex justify-center">
      <h2 class="text-2xl font-firaCode">UI Components</h2>
    </section>

    <!-- content -->
    <section>
      <AccordionList multipleItemsOpen />
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