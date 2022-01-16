function destroyUser(){
    localStorage.removeItem("user");
    localStorage.removeItem("name");
    localStorage.removeItem("password");
    window.location.assign("index.html");
}