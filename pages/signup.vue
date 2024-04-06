<script setup lang="ts">
</script>
<template>
    <NuxtLayout>
    <div class="h-screen flex flex-col items-center justify-center bg-[#F7F9FA]">
        <div class="container rounded-lg shadow-lg bg-white w-96 mx-auto px-6 my-5">
            <div class="text-center my-5 space-y-2">
                <h1 class="font-bold">Start your 14-day free trial</h1>
                <p class="text-[10px] text-gray-500">No credit card required</p>
            </div>

            <form @submit.prevent="submitData" class="p-2 my-5 space-y-5">
                <div>
                    <label for="text">Full Name</label>
                    <input type="text" class="w-full rounded p-2 border" placeholder="">
                </div>
                <div>
                    <label for="email">Email</label>
                    <input type="email" name="email" class="w-full rounded p-2 border" id="">
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="password" name="password" class="w-full rounded p-2 border" id="">
                </div>
                <div class="flex space-x-2 items-center">
                    <input type="checkbox" id="" value="" v-model="checkedNames">
                    <label class="text-[10px]" for="agreement">I agree to the Membershipcrafters terms of service and
                        have read the privacy policy</label>
                </div>
                <button type="submit" class="py-3 px-5 md:hidden w-full text-white font-bold rounded  
          bg-blue-700 hover:bg-blue-800
          ">
                    Sign up
                </button>
            </form>
            <div class="text-center my-5 space-y-5">
                <NuxtLink class="text-blue-700 hover:text-blue-800" to="/">← Back</NuxtLink>
                <div class="my-5 text-[14px]">
                    Already have an account? <NuxtLink class="text-blue-700 hover:text-blue-800" to="login">Log in
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div class="my-5 text-[13px]">
            Powered by <strong>Membershipcrafters</strong>
        </div>
    
    </div>
    </NuxtLayout>
</template>