export default {

  setActiveUser(state, user){
  state.activeUser = user;
},
toggleRejected(state){
  state.rejected = !state.rejected;
},
    /* Våra stugor som finns på våran DB samlas här */
    setCabins (state, cabins) {
        state.cabins = cabins;
    },
    /* När vi tillverkar en ny stuga så sparas det även här */
    setCabin (state, cabin) {
        state.cabin = cabin;
    },

    setVerifyData(state, data){
        state.verifyData = data;
      }

}
