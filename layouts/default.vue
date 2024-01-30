<template>
  <div class="flex flex-col min-h-screen">
    <!-- <HeaderStructure /> -->
    <header>
      <Header />
    </header>

    <div class="flex max-w-container grow mx-auto">
      <aside>
        <SidebarStructure />
      </aside>
  
      <main>
        <slot />
      </main>
    </div>

    <footer>
      <Footer />
    </footer>
  </div>
</template>

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

<style scoped>

</style>