<template>
    <main class="content">
    <section class="cabin">
        <h2 @click="$router.push('/cabins')">Stug lista</h2>
        <h2 @click="$router.push('/addcabin')">Lägg till Stuga</h2>
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