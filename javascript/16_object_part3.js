const course ={
    courseName: 'js in hindi',
    price: '999',
    courseInstructor: "Hitesh"
}

// course.courseInstructor
// course.price


// destructure of the object

const {price, courseInstructor: instructor, courseName} = course;

console.log(price, instructor, courseName);

// json 
// {
//     "name": "Akash",
//     "courseName": "Js in hindi",
//     "price": "free",
// }

// [
//     {},
//     {},
//     {}
// ]


// $.ajax({
//     url: 'https://randomuser.me/api/',
//     dataType: 'json',
//     success: function(data) {
//       console.log(data);
//     }
//   });
        