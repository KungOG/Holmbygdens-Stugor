<template>
    <main>
        <section  class="content">
        <thead>
            <tr>
                <td @click="$router.push('/cabins')"> Stuglista </td>
                <td @click="$router.push('/addcabin')"> Lägg till Stuga </td> 
                <td @click="$router.push('/bookings')"> Bokningar</td>
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