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
      max-height="250"
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
        <v-card-title>Cafe Badilico</v-card-title>
  
        <v-card-subtitle>
          <span class="me-1">Local Favorite</span>
  
          <v-icon
            color="error"
            icon="mdi-fire-circle"
            size="small"
          ></v-icon>
        </v-card-subtitle>
      </v-card-item>
  
      <v-card-text>
  
        <div class="my-4 text-subtitle-1">
          $ • Italian, Cafe
        </div>
  
        <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
      </v-card-text>
  
      <v-divider class="mx-4 mb-1"></v-divider>
  
      <v-card-title>Tonight's availability</v-card-title>
  
      <div class="px-4 mb-2">
        <v-chip-group v-model="selection" selected-class="bg-deep-purple-lighten-2">
          <v-chip>5:30PM</v-chip>
  
          <v-chip>7:30PM</v-chip>
  
          <v-chip>8:00PM</v-chip>
  
          <v-chip>9:00PM</v-chip>
        </v-chip-group>
      </div>
  
      <v-card-actions>
        <v-btn
          color="deep-purple-lighten-2"
          text="Reserve"
          block
          border
          @click="reserve"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </template>