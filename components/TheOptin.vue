<script lang="ts" setup>
import { ref } from 'vue';

const email = ref('');

const submitEmail = () => {
    // Implement your email submission logic here
    console.log(email.value);
    // Reset email field after submission for this example
    email.value = '';
};
</script>
<template>
    <div class="relative text-gray-600 flex flex-col md:flex-row justify-center">
        <form @submit.prevent="submitEmail" class="border p-2 rounded my-5">
            <input v-model="email" type="email" name="email"
                class="bg-white w-96 rounded-l-lg w-[200px] px-5 text-sm focus:outline-none"
                placeholder="Enter your email address" required />
            <div class="inline-block rounded-r-lg  ">
                <button type="submit" class="py-3 px-5 hidden md:block text-white font-bold rounded  
          bg-blue-700 hover:bg-blue-800
          ">
                    Start your 14-day free trial
                </button>
            </div>
            
        </form>
        <button type="submit" class="py-3 px-5 md:hidden  text-white font-bold rounded  
          bg-blue-700 hover:bg-blue-800
          ">
                    Start your 14-day free trial
        </button>
    </div>
</template>