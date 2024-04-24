<script setup lang="ts">
import { Prisma } from '@prisma/client'
    const community = ref<Prisma.communitySelect>({
        name: true,
        description: true,
    })
    function submitForm() {
        
    }
</script>
<template>
    <div class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div class="bg-white p-5 rounded-lg max-w-md mx-auto">
        <h2 class="text-xl font-bold mb-4">New Community</h2>
        
        <!-- Form content -->
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label for="name" class="block text-gray-700">Name:</label>
            <input type="text" id="first_name" v-model="community.name"  class="mt-1 p-2 w-full border rounded">
          </div>

          <div class="mb-4">
            <label for="name" class="block text-gray-700">Description:</label>
            <input type="text" id="last_name" v-model="community.description" class="mt-1 p-2 w-full border rounded">
          </div>
          <div class="flex justify-end">
            <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Add Community</button>
            <button type="button" @click="$emit('closeModal', false)" class="ml-2 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700">Cancel</button>
          </div>
        </form>
      </div>
    </div>
</template>