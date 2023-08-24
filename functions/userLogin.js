const userInfo = {
    name: "Akash Kumar",
    userId: "abs1123",
    userEmail: "akash@gmail.com"
}

function userVarify(id, email) {
    const { userId, userEmail } = userInfo;
    return (id === userId && email === userEmail) ? true : false;
}

function userLogin(id, email = userInfo.userEmail) {
    const { name , userEmail} = userInfo;

    (!id || !email) ? console.log("Please Enter user ID and Email") : 
        (userVarify(id, email)) ? console.log(`User ${name} ${userEmail} is loggedin!`) : console.log('user not varify!')
}

userLogin('abs1123')
