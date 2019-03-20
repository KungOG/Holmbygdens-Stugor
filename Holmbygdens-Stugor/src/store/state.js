export default {
    cabins : [],
    cabin : {},
    apiUrl: 'http://localhost:3000',
    activeUser: '',
    rejected: false,
    authOptions: {
        headers: {
          authorization:`Bearer ${sessionStorage.getItem('loginToken')}`
        }
    },
    eBooked : [],
    verifyData : false,
    bookings : []
}