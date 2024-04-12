<script setup lang="ts">
const title = ref('Membershipcrafters')
const description = ref('Automate Your Work With Membershipcrafters')
const colorMode = useColorMode()
colorMode.preference = 'dark'
const main = 'main'
useHead({
    title,
    meta: [{
        name: 'description',
        content: description
    }],
    link: [
        //{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // Other links...
       /* { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" }*/
    ],
})
</script>

<template>
    <NuxtLayout :name="main">
        <div class="container mx-auto p-4">
            <section>
                <TheHero></TheHero>
            </section>
            <section>
                <TheOptin></TheOptin>
            </section>
            <section>
                <div class="my-5 flex flex-col items-center md:flex-row md:space-x-4 md:items-center  justify-center ">
                    <TheBlock>
                        <template v-slot:icon>
                            <Icon size="50" name="material-symbols:supervised-user-circle" color="black" />
                        </template>
                        <template v-slot:headline>
                            <h1>Build and Launch</h1>
                        </template>
                        <template v-slot:paragraph>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint aperiam illum, sunt modi possimus nobis!</p>
                        </template>
                    </TheBlock>
                    <TheBlock>
                        <template v-slot:icon>
                            <Icon size="50" name="material-symbols:attach-money" color="black" />
                        </template>
                        <template v-slot:headline>
                            <h1>Membership and Payments</h1>
                        </template>
                        <template v-slot:paragraph>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint aperiam illum, sunt modi possimus nobis!</p>
                        </template>
                    </TheBlock>
                    <TheBlock>
                        
                        <template v-slot:icon>
                            <Icon size="50" name="material-symbols:globe-uk-sharp" color="black" />
                        </template>
                        <template v-slot:headline>
                            <h1>Community, Courses and Events</h1>
                        </template>
                        <template v-slot:paragraph>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint aperiam illum, sunt modi possimus nobis!</p>
                        </template>
                    </TheBlock>
                </div>
            </section>
            <section>

            </section>
        </div>

    </NuxtLayout>
</template>