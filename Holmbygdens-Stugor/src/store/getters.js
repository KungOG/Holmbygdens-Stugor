import axios from 'axios'
export default {

  async getCabins(){
  let opt ={
    headers: {
      authorization:`Bearer ${sessionStorage.getItem('vueauthdemo')}`
    }
  }
  let products = await axios.get(`http://localhost:3000/cabins`, opt );
  console.log(products);
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
