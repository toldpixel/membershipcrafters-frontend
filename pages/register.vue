<script setup lang="ts">
import type { User } from '@/types/user'
const supabase = useSupabaseClient()
const runtimeConfig = useRuntimeConfig()

    
    const credentials = ref<User>({
        fullname: '',
        email: '',
        password: '',
    });
    const errorMsg = ref<string | null>(null);
    const successMsg = ref<string | null>(null);
    const checkedNames = ref(false);
    async function submitData() {
        try {
            if (credentials.value.email === null || credentials.value.password === null) throw Error;
            const { data, error } = await supabase.auth.signUp({
                email: credentials.value.email,
                password: credentials.value.password
            })
            if (error) throw error;
            successMsg.value = "Check your email to confirm your account."
            console.log("data")

        } catch (error) {
            if (error instanceof Error) {
                errorMsg.value = error.message;
                return {
                    message: `(${error.message})`,
                };
            } else {
                return {
                    message: `(${error})`,
                };
            }
            
        }
    }
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
                    <input type="text" v-model="credentials.fullname" name="fullname" class="w-full rounded p-2 border">
                </div>
                <div>
                    <label for="email">Email</label>
                    <input type="email" v-model="credentials.email" name="email" class="w-full rounded p-2 border">
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="password" v-model="credentials.password" name="password" class="w-full rounded p-2 border">
                </div>
                <div class="flex space-x-2 items-center">
                    <input type="checkbox" id="" value="" v-model="checkedNames">
                    <label class="text-[10px]" for="agreement">I agree to the Membershipcrafters terms of service and
                        have read the privacy policy</label>
                </div>
                <small class="text-red" v-if="errorMsg">{{ errorMsg }}</small>
                <button type="submit" class="py-3 px-5  w-full text-white font-bold rounded  
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