module.exports.isAuthenticated = () => {
    
    if(sessionStorage.getItem(['loginToken'])){
        // Logged in 
        return true;
    } else {
        // Not logged in
        return false;
    }
}