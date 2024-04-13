<script setup lang="ts">
</script>
<template>
    <div class="h-dvh flex flex-col bg-slate-400">
        <div class="flex flex-col items-center">
            <div class="bg-white w-full flex flex-col items-center">
                <div>
                    <DashboardNav></DashboardNav>
                    <DashboardNavMenu></DashboardNavMenu>
                </div>
            </div>
            <div class="my-5">

                <slot></slot>
            </div>
        </div>

    </div>

</template>