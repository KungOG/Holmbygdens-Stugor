import axios from "axios";

export default {

  async login(ctx, loginData){

    try {

      // post username + password to /auth, receive auth token
      let token = await axios.post(`${ctx.state.apiUrl}/auth`, loginData)
      console.log(token);
      // Set token in session storage
      sessionStorage.setItem('loginToken', token.data.auth);
      // update activeUser for UI ( ex. "Greger is logged in." )
      ctx.commit('setActiveUser', token.data.username);
    } catch(err) {

        ctx.commit('toggleRejected');
      setTimeout(()=>{
        ctx.commit('toggleRejected');
      }, 1000)

      console.error(err);
    }
  },
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
        await axios.patch(`http://localhost:3000/cabins/`, cabinData);
        ctx.dispatch('getCabin');
    },
    /* Skicka bokningen till datorbasen */
    async booked (ctx, booked) {
      let eBooked = await axios.post('http://localhost:3000/bookings', booked);
      ctx.commit('setBooked', eBooked.data);
      localStorage.setItem('eBooked', JSON.stringify(eBooked.data));
    },
    /* Hämta lokala bokningar */
    getBooked (ctx) {
      let eBooked = localStorage.getItem('eBooked');
      ctx.commit('setBooked', JSON.parse(eBooked));
    },

    async verifyBooking(ctx, code){
      console.log('iygad')
        let verifyData = await axios.get(`http://localhost:3000/verify/${code}`);
        ctx.commit('setVerifyData', verifyData.data);
      }
}
