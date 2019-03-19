import axios from 'axios'
export default {

  async getCabins(){
  let opt ={
    headers: {
      authorization:`Bearer ${sessionStorage.getItem('loginToken')}`
    }
  }
  let cabin = await axios.get(`http://localhost:3000/cabins`, opt );
},
    cabins (state) {
        return state.cabins;
    },
    cabin (state) {
        return state.cabin;
    },
    getCabinsByCabinId (state) {
        return (id) => {
            return state.cabins.filter(
                cabin => cabin._id == id
            )[0]
        }
    }
}
