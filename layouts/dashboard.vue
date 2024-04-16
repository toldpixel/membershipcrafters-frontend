<script setup lang="ts">
</script>
<template>
    <div class="h-dvh flex flex-col  bg-slate-200">
        <div class="flex flex-col items-center w-full bg-white">
            <div class="max-w-[1000px] bg-white">
                <div>
                    <DashboardNav></DashboardNav>
                    <DashboardNavMenu></DashboardNavMenu>
                </div>
            </div>
        </div>
        <div class="flex flex-col items-center w-full my-12">
            <div class="min-w-[750px] ">
                <slot></slot>  
            </div>
        </div>

    </div>

</template>


<!--
    <div class="flex flex-col justify-content">
            <div class="bg-white w-full flex flex-col items-center">
                <div>
                    <DashboardNav></DashboardNav>
                    <DashboardNavMenu></DashboardNavMenu>
                    <div class="bg-black">
                        <slot></slot>
                    </div>
                    
                </div>
            </div>
            
        </div>

-->