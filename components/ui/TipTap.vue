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
      <editor-content :editor="editor" class="p-5 min-h-40 "/>
</template>

<style>

</style>