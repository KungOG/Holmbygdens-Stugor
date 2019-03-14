import axios from 'axios'

export default {

  async getCabins(ctx){
  let cabins = await axios.get('http://localhost:3000/cabins');
  ctx.commit('setCabins', cabins.data);
},

    /* Hämta stugorna ifrån Databasen */
    async getCabin (ctx) {
       let cabins = await axios.get('http://localhost:3000/cabins');
        ctx.commit('setCabins', cabins.data);
    },

    /* Samlar information som sedan skickas till våran DB som bygger en ny stuga */
    async makeCabin (ctx, cabin) {
        try {
            await axios.post('http://localhost:3000/cabins', cabin);
            ctx.dispatch('getCabin');
        } catch (err) {
            console.err(err.stack);
        }
    }
}
