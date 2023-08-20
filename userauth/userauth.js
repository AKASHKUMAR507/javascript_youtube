const userInfo = [
    {
        "userName": "user1",
        "userEmail": "user1@example.com"
    },
    {
        "userName": "user2",
        "userEmail": "user2@example.com"
    },
    {
        "userName": "user3",
        "userEmail": "user3@example.com"
    }
]

const user = userInfo.map((item) => {
    return item
})

const userAuth = (userName, userEmail) => {
    return (userName === user.userName && userEmail === user.userEmail) ? true : false;
}


const name1 = "user2";
const email = 'user2@example.com';


if (userAuth(name1, email)) {
    console.log("user logged in !!")
} else {
    console.log('User not Found!!');
}