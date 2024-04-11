<script setup lang="ts">
const searchQuery = ref('')

function search() {

}
</script>
<template>
    <section>
        <section>
            <div class="flex w-full justify-center">
                <div class="max-w-[50rem] flex p-1 items-center space-x-7">
                    <div>Logo</div>
                    <div>
                        <Icon size="24" name="material-symbols:keyboard-double-arrow-down-rounded"></Icon>
                    </div>
                    <div class="flex justify-center">
                        <div class="flex border-2 border-gray-200 rounded">
                            <input type="text" class="px-4 py-2 w-80" placeholder="Suche..." v-model="searchQuery" />
                            <button class="flex items-center justify-center px-4 border-l" @click="search">
                                Suchen
                            </button>
                        </div>
                    </div>
                    <div>
                        <Icon size="24" name="material-symbols:chat-bubble-outline-rounded"></Icon>
                    </div>
                    <div>
                        <Icon size="24" name="material-symbols:doorbell-outline-sharp"></Icon>
                    </div>
                    <div>
                        <Avatar>
                            <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </div>
        </section>

    </section>
</template>