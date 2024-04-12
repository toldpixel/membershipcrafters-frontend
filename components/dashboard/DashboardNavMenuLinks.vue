<script setup lang="ts">
const route = useRoute()
const props = defineProps({
    menuLink: {
        type: String,
        default: "" 
    }
})

function navLinkClass(path: string) {
  return route.path === path ? 'border-b-2 pb-3 border-black hover:text-slate-400' : ''
}

</script>
<template>
    <NuxtLink :class="navLinkClass(`/dashboard/${menuLink}`.toLowerCase())" :to="`/dashboard/${menuLink}`.toLowerCase()">
        {{ menuLink }}
    </NuxtLink>
</template>