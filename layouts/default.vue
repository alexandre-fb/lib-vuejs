<template>
    <div class="flex flex-col justify-start items-center min-h-screen pt-[64px]">
      <HeaderEsqueleto />
      <!-- <Header /> -->
      <main class="w-full">
        <slot />
      </main>
      <Footer />
    </div>
  </template>