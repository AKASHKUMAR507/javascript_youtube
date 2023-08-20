const userName = "Akash";
const email = "akash@gmail.com";

const auth = (userName, email) => {
    const user = (userName === 'Akash' && email === 'akash@gmail.com') ? true : false;
    return user;
}

if(auth(userName, email)){
    console.log("User logged in!!");
}else{
    console.log("User not found!!");
}