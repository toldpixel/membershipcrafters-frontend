<script setup lang="ts">
</script>
<template>
    <div class="flex w-96 text-center">
        <div class="px-8 py-8 rounded shadow-lg overflow-hidden">
            <div class="py-3">
                <slot name="icon"></slot>
            </div>
            
            <slot name="headline"></slot>
            <slot name="paragraph"></slot>
        </div>
    </div>

</template>