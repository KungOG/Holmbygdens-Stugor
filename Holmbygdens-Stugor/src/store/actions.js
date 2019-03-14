import axios from 'axios'

export default {

    /* Hämta stugorna ifrån Databasen */
    async getCabin (ctx) {
        let cabins = await axios.get('http://localhost:3000/cabins');
        ctx.commit('setCabins', cabins.data);
    },
    
    /* Samlar information som sedan skickas till våran DB som bygger en ny stuga */
    async makeCabin (ctx, cabin) {
        await axios.post('http://localhost:3000/cabins', cabin);
        ctx.dispatch('getCabin');
    },
    /* Tar bort den specifikerade stugan med hjälp av ID:et */
    async deleteCabin (ctx, id) {
        await axios.delete(`http://localhost:3000/cabins/${id}`);
        ctx.dispatch('getCabin');
    },
    /* Skickar med information om */
    async redoCabin (ctx, cabinData) {
        console.log(cabinData, 'skicka')
        await axios.post(`http://localhost:3000/cabins/`, cabinData);
        ctx.dispatch('getCabin');
    }
}