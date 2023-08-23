let date = new Date();

// console.log(date.toString());

console.log(date.toJSON());
console.log(date.toISOString());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.toDateString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleString());
console.log(date.toTimeString());
 
console.log(typeof date);

date.toLocaleString('default', {
    weekday: "long",
    // timeZone:  
})