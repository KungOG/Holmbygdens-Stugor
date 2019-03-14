export default {
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