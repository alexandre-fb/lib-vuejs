<template>
  <div class="flex flex-col justify-start items-center min-h-screen">
    <!-- <HeaderStructure /> -->
    <Header />
    <main class="w-full grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>>

<script>
import Header from '~/components/Header/Header.vue';
import HeaderStructure from '~/components/Header/HeaderStructure.vue';
export default {
  components: {
    Header,
    HeaderStructure
  }

}
</script>

<style>

</style>