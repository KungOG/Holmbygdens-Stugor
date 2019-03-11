export default {
    cabins (state) {
        return state.cabins;
    },
    getCabinsByCabinId (state) {
        return (id) => {
            return state.cabins.filter(
                cabin => cabin._id == id
            )[0]
        }
    }
}