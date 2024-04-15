<script setup lang="ts">
import TipTap from '@/components/ui/TipTap.vue';
const newPost = ref("")
const showModalPost = ref(false)
</script>
<template>
    <div class="flex relative">
        <div @click="showModalPost = true;" class="w-96 bg-white p-2 items-center flex rounded shadow-lg hover:cursor-pointer">
            <v-avatar color="surface-variant"></v-avatar>
            <div class="mx-5 text-slate-400">
                Write something
            </div>
        </div>
        <div v-if="showModalPost" class="absolute z-50 bg-white p-2 rounded w-[500px] ">
            <TipTap></TipTap>
        </div>
    </div>
     <!-- 
        Overlay
    -->
    <div @click="showModalPost = false;" v-if="showModalPost" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">    
    </div>
</template>