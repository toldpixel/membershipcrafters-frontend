<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

const editor = useEditor({
  content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
  extensions: [
    StarterKit,
  ],
})

</script>

<template>
  <div class="flex items-center space-x-2 py-1">
    <v-avatar color="surface-variant"></v-avatar>
    <div>Jean-Pierre Tshimanga posting in <strong>Community</strong></div>
  </div>
  <v-text-field hide-details="auto" variant="plain" value="Title"></v-text-field>
  <editor-content :editor="editor" class="p-5 min-h-40 " />
  <div class="flex items-center justify-between">
    <Icon size="24" name="mdi:paperclip"></Icon>
    <Icon size="24" name="material-symbols:link"></Icon>
    <Icon size="24" name="mdi:youtube"></Icon>
    <Icon size="24" name="mdi:emoji"></Icon>
    <Icon size="24" name="material-symbols:gif"></Icon>
    <div class="w-40">
      <v-select  
        
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
          variant="solo"
         
      ></v-select>
    </div>
    <v-btn>
      Cancel
    </v-btn>
    <v-btn>
      Post
    </v-btn>
  </div>
</template>

<style></style>