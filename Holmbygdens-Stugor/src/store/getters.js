export default {

  async getProducts(ctx){
  let opt ={
    headers: {
      authorization:`Bearer ${sessionStorage.getItem('vueauthdemo')}`
    }
  }
  let products = await Axios.get(`${ctx.state.apiUrl}/products`, opt );
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
