<script setup lang="ts">

const searchQuery = ref('')

function search() {

}
</script>

<template>
    <div class="flex p-1 items-center space-x-7 bg-white">
            <div>Logo</div>
            <div class="p-2 rounded-full hover:bg-slate-200 cursor-pointer">
                <Icon size="24" name="material-symbols:keyboard-double-arrow-down-rounded"></Icon>
                <v-tooltip text="Tooltip" location="bottom" activator="parent">
                    Switch communities
                </v-tooltip>
            </div>

            <div class="flex justify-center">
                <div class="flex border-2 border-gray-200 rounded">
                    <input type="text" class="px-4 py-2 w-80" placeholder="Suche..." v-model="searchQuery" />
                    <button class="flex items-center justify-center px-4 border-l" @click="search">
                        Suchen
                    </button>
                </div>
            </div>

            <div class="p-2 rounded-full hover:bg-slate-200 cursor-pointer">
                <Icon size="24" name="material-symbols:chat-bubble-outline-rounded"></Icon>
                <v-tooltip text="Tooltip" location="bottom" activator="parent">
                    Chats
                </v-tooltip>

            </div>


            <div class="p-2 rounded-full hover:bg-slate-200 cursor-pointer">
                <Icon size="24" name="material-symbols:doorbell-outline-sharp"></Icon>
                <v-tooltip text="Tooltip" location="bottom" activator="parent">
                    Notifications
                </v-tooltip>
            </div>


            <div>
                <!--
                  <Avatar size="sm">
                    <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            -->



            </div>
        </div>
</template>