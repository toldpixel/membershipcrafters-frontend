<script setup lang="ts">
const items = [
    'mail',
    'Profile',
    'Settings',
    'Help Center',
    'Create a Community',
    'Discover Communities',
    'Log out'
]
const searchQuery = ref('')
const showModalCreateCommunity = ref(false)

function search() {

}

const emit = defineEmits(["createCommunity"])

function profileOption(index: number) {
    if("Create a Community" === items[index]) {
        showModalCreateCommunity.value = true;
        emit("createCommunity", showModalCreateCommunity)
    }
}
</script>

<template>
    <div class="relative flex p-1 items-center space-x-7 bg-white">
        <div>Logo</div>
        <div class="p-2 rounded-full hover:bg-slate-200 cursor-pointer">
            <Icon size="24" name="material-symbols:keyboard-double-arrow-down-rounded"></Icon>
            <client-only>
                <v-tooltip text="Tooltip" location="bottom" activator="parent">
                    Switch communities
                </v-tooltip>
            </client-only>
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
            <client-only>
                <v-tooltip text="Tooltip" location="bottom" activator="parent">
                    Chats
                </v-tooltip>
            </client-only>
          

        </div>


        <div class="p-2 rounded-full hover:bg-slate-200 cursor-pointer">
            <Icon size="24" name="material-symbols:doorbell-outline-sharp"></Icon>
            <client-only>
                <v-tooltip text="Tooltip" location="bottom" activator="parent">
                    Notifications
                </v-tooltip>
            </client-only>
            
        </div>
        <div>
            <v-menu transition="scale-transition">
                <template v-slot:activator="{ props }">
                    <v-avatar v-bind="props" color="surface-variant"></v-avatar>
                </template>
                <v-list density="compact" class="my-2">
                    <v-list-item @click="profileOption(index)" v-for="(item, index) in items" :key="index"
                        :value="index">
                        <v-list-item-title>
                            {{ item }}
                        </v-list-item-title>
                    </v-list-item>
                    <hr>
                </v-list>
            </v-menu>
        </div>
    </div>    
</template>