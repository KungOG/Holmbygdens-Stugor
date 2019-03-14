<template>
  <article class="cabin-item" @click="chooseCabin(item)">
    <section>
      {{item.where}}
    </section>
    <section>
      <h3>{{item.name}}</h3>
      <p>{{item.where.place}}</p>
      <p>{{item.where}}</p>
    </section>
    <section>
      {{ item.price }} sek
    </section>
  </article>
</template>

<script type="text/javascript">
  export default {
      name: 'cabin-item',
      props: ['item'],
      computed: {
        show(){
        if(this.item==0){
        return true
      } else {return false}
    }
      },
      methods: {
        chooseCabin(item){
          this.$store.commit('chooseCabin', item);
          this.$router.push('/Verify')
        }
      }
    }
</script>
