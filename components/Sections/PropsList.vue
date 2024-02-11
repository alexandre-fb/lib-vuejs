<template>
    <div class="w-full">
        <ul>
            <li v-for="(prop, index) in propsList" :key="prop.name + index" class="flex flex-col gap-1 pl-2">
                <h4><span class="text-sm">Nome:</span> <span class="font-bold">{{ prop.name }}</span></h4>
                <h5><span class="text-sm">Tipo:</span> <span class="font-bold">{{ prop.type }}</span></h5>
                <h5><span class="text-sm">Obrigatória:</span> <span class="font-bold">{{ prop.required }}</span></h5>
                <div class="flex gap-1">
                    <h5 class="text-sm">Descrição:</h5> 
                    <p class="text-sm">{{ prop.description }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
    
<script>
export default {
    name: "SectionSubtitle",
    props: {
        propsList: {
            type: Array,
            default: [
                {
                    name: 'multiple_items_open',
                    type: 'Boolean',
                    required: 'Não',
                    description: 'Permite mais de uma aba aberta ao mesmo tempo.'
                }
            ]
        }
    },
};
</script>
    
<style scoped></style>