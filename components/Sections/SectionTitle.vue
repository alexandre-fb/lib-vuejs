<template>
    <h2 class="flex w-full justify-center py-10 px-3 font-fira text-2xl">
        <slot />
    </h2>
</template>
    
<script>
export default {
    name: "SectionTitle",
    props: {
        title: {
            type: String,
            default: 'Título'
        },
    },
};
</script>
    
<style scoped></style>