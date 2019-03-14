<!-- Detta är bokningsprocessen där du kommer att bekräfta din bokning -->
<template>
    <main id="book">
    <section class="content" v-if="cabin">
      <h1>{{ cabin.name }}</h1>
      <article class="price">{{ cabin.price * amount }} sek</article><br>
      <a href="#" class="btn" >Booka din Stuga</a>
    </section>
    <section class="content" v-if="!cabin">
      <p>Ingen bokning vald.</p>
      <a href="#" class="btn" @click="$router.push('/booking')">Gå tillbaka</a>
    </section>
  </main>
</template>

<script>
export default {
    name : 'book',
    cabins () {
        return this.$store.getters.getCabinsByCabinId(
            this.$route.params.id
        );
    }
}
</script>

<style lang="scss">

</style>
