<script setup lang="ts">
import TipTap from '@/components/ui/TipTap.vue';
const newPost = ref("")
const showModalPost = ref(false)
</script>
<template>
    <div class="flex relative">
        <div @click="showModalPost = true;"
            class="w-full bg-white p-2 items-center flex rounded shadow-lg hover:cursor-pointer">
            <v-avatar color="surface-variant"></v-avatar>
            <div class="mx-5 text-slate-400">
                Write something
            </div>
        </div>
        <div v-if="showModalPost" class="absolute z-50 bg-white p-2 rounded w-[500px] ">
            <TipTap></TipTap>
        </div>
    </div>
    <div class="w-full">
        <div class="text-center my-5">
            <Icon name="mdi:calendar-outline" size="24"></Icon> Next Event Lorem ipsum dolor sit
        </div>
    </div>
    <div class="flex space-x-2">
        <v-chip>
            All
        </v-chip>

        <v-chip color="primary">
            Primary
        </v-chip>

        <v-chip color="secondary">
            Secondary
        </v-chip>

        <v-chip color="red">
            Red
        </v-chip>

        <v-chip color="green">
            Green
        </v-chip>
        <div class="ml-auto">
            <Icon name="material-symbols:filter-list" size="24"></Icon>
        </div>
    </div>
    <!-- 
        Overlay
    -->
    <div @click="showModalPost = false;" v-if="showModalPost"
        class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
    </div>
</template>