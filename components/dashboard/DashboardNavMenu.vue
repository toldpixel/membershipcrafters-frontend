<script setup lang="ts">
const menuLinks = ['Community','Classroom', 'Calendar', 'Members', 'Leaderboards', 'About']
</script>
<template>
    <div class="flex p-1 space-x-8 py-5">
        <div v-for="link in menuLinks">
            <DashboardNavMenuLinks :menuLink="link">
            </DashboardNavMenuLinks>
        </div>
    </div>
</template>