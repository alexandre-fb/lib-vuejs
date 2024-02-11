<template>
  <div class="flex flex-col min-h-screen">
    <!-- <HeaderStructure /> -->
    <header>
      <Header />
    </header>

    <div class="flex w-full max-w-container grow mx-auto">
      <aside>
        <Sidebar />
      </aside>
  
      <main class="flex flex-col w-full ">
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
import Sidebar from '~/components/Sidebar/Sidebar.vue';
import SidebarStructure from '~/components/Sidebar/SidebarStructure.vue';
export default {
  components: {
    Header,
    HeaderStructure,
    Sidebar,
    SidebarStructure
  }
}
</script>

<style scoped>

</style>