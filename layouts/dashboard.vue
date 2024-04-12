<script setup lang="ts">
</script>
<template>
    <div class="flex flex-col items-center w-full">
        <div>
            <DashboardNav></DashboardNav>
            <DashboardNavMenu></DashboardNavMenu>
        </div>
        <div>
            <slot></slot>
        </div>       
    </div>
    
</template>