<script setup lang="ts">

</script>
<template>
    <header class="flex py-4 px-4 justify-between border-b-[1px] border-neutral-900 items-center">
        <aside class="flex items-center gap-[2px]">
            <p class="text-3xl font-bold">Membershipcrafters</p>
        </aside>
        <nav class="hidden md:block">
            <ul class="flex items-center gap-4 list-none">
                <li>
                    <NuxtLink href="#">Product</NuxtLink>
                </li>
                <li>
                    <NuxtLink href="#">Pricing</NuxtLink>
                </li>
            </ul>
        </nav>
        <aside class="flex items-center gap-4">
            <div class="hidden md:block space-x-4">
                <NuxtLink to="signin"
                    class="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <button class="btn-primary">Log in</button>
                </NuxtLink>
                <!-- //WIP:wire up user -->
                <NuxtLink to="signup">
                    <button class="py-2 px-5 text-white font-bold rounded  
                bg-blue-700 hover:bg-blue-800">Get started</button>
                </NuxtLink>
            </div>

            <div class="md:hidden">
                <Icon size="24" name="i-material-symbols:menu-rounded"></Icon>
            </div>
        </aside>
    </header>
</template>

<style></style>