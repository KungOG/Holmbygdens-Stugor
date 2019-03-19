module.exports.isAuthenticated = () => {
    
    if(sessionStorage.getItem(['authdemo'])){
        // Logged in 
        return true;
    } else {
        // Not logged in
        return false;
    }
}