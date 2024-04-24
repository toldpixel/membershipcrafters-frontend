<script setup lang="ts">

const createCommunityModal = ref(false)


</script>
<template>
    <div class="h-dvh flex flex-col  bg-slate-200">
        <div class="flex flex-col items-center w-full bg-white">
            <div class="max-w-[1000px] bg-white">
                <div>
                    <DashboardNav @create-community="(isOpenModal) => {createCommunityModal = isOpenModal.value; console.log(isOpenModal.value)}"></DashboardNav>
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
    <div v-if="createCommunityModal"
        class="relative inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
        <div v-if="createCommunityModal" class="absolute hvd z-50 bg-white p-2 rounded w-full ">
         <DashboardCommunityCreate @close-modal="(closeOpenModal) => createCommunityModal = closeOpenModal"></DashboardCommunityCreate>
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