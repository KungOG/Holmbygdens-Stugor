export default {
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