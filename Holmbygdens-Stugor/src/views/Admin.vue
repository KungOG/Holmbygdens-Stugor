<template>
    <main class="content">
    <section class="cabin">
        <thead>
            <tr>
                <td @click="$router.push('/cabins')"> Stug lista |</td>
                <td @click="$router.push('/addcabin')"> Lägg till Stuga |</td> 
                <td @click="$router.push('/bookings')"> Bokningar |</td>
                <td @click="$router.push('/verify')"> Verifiering</td>
            </tr>
        </thead>
    </section>
    <router-view />
    </main>
</template>

<script>
export default {
    name : 'admin'
}
</script>
<style lang="scss">
</style>