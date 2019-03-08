import axios from 'axios'

export default {
    async getCabin (ctx) {
       let cabins = await axios.get('http://localhost:3000/cabins');
        ctx.commit('setEvents', events.data);
    },
    async createCabin (ctx, cabin) {
        try {
            await axios.post('http://localhost:3000/cabins', cabin);
            ctx.dispatch('getCabin');
        } catch (err) {
            console.err(err.stack);
        }
    }
}