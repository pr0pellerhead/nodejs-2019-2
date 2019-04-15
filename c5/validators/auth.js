var addUser = {
    full_name: "required|string",
    email: "required|email",
    password: "required|minLength:6"
};

var loginUser = {
    email: "required|email",
    password: "required|minLength:6"
}

module.exports = {
    addUser,
    loginUser
}
