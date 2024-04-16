<script setup lang="ts">
 const loading = ref()
 const reserve = ref()
 const selection = ref()
</script>

<template>
    <v-card
      :disabled="loading"
      :loading="loading"
      class="mx-auto "
      max-width="200"
      max-height="400"
    >
      <template v-slot:loader="{ isActive }">
        <v-progress-linear
          :active="isActive"
          color="deep-purple"
          height="4"
          indeterminate
        ></v-progress-linear>
      </template>
  
      <v-img
        height="150"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        cover
      ></v-img>
  
      <v-card-item>
        <v-card-title>Community Title</v-card-title>
        <v-card-subtitle>
          <small class="m-1">Private group</small>
        </v-card-subtitle>
      </v-card-item>
  
      <v-card-text>
  
        <div class="text-subtitle-1">
          $ • Italian, Cafe
        </div>
  
        <div>Small plates, salads & sandwiches - an intimate </div>
      </v-card-text>
  
      <v-divider class="mx-4 mb-1"></v-divider>
  

  
      <div class="flex text-[12px] space-x-5 px-4 mb-2">
        <div>Members</div>
        <div>Online</div>
        <div>Admins</div>
      </div>
  
      <v-card-actions>
        <v-btn
          color="deep-purple-lighten-2"
          text="SETTINGS"
          block
          border
          @click="reserve"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </template>