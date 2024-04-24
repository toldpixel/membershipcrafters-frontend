<script setup lang="ts">
import { useAuth } from '~/composables/useAuth'
import type { User } from '@/types/user'

definePageMeta({
    middleware: ['auth']
})
const credentials = ref<User>({
    email: '',
    password: '',
});
const { signIn } = useAuth()

const handleLogin = async () => {
    try {
        await signIn(credentials.value.email, credentials.value.password)
    } catch (error: unknown) {
        if (error instanceof Error) {
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
                    <h1 class="font-bold">Log in to your Membershipcrafters account</h1>
                </div>
                <form @submit.prevent="handleLogin" class="p-2 my-5 space-y-5">
                    <div>
                        <label for="text">Email</label>
                        <input type="email" v-model="credentials.email" name="email" id=""
                            class="w-full rounded p-2 border">
                    </div>
                    <div>
                        <label for="password">Password</label>
                        <input type="password" v-model="credentials.password" name="password"
                            class="w-full rounded p-2 border" id="">
                    </div>
                    <button type="submit" class="py-3 px-5 w-full md:block text-white font-bold rounded  
          bg-blue-700 hover:bg-blue-800
          ">
                        Sign In
                    </button>
                </form>
                <div class="text-center my-5">
                    <NuxtLink class="text-blue-700 hover:text-blue-800" to="/">← Back</NuxtLink>
                    <div class="my-5 text-[14px]">
                        Don't have an account? <NuxtLink class="text-blue-700 hover:text-blue-800" to="register">Sign up
                        </NuxtLink>
                    </div>
                    <div class="my-5 text-[14px]">
                        <NuxtLink class="text-blue-700 hover:text-blue-800" to="login">Forgot your password?
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