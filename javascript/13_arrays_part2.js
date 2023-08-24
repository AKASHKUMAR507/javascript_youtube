const marvel_hero = ['thor', 'Iron man', 'spiderman']
const dc_hero = ['superman', 'flash', 'batman']

// marvel_hero.push(dc_hero);

// console.log(marvel_hero);
// console.log(marvel_hero[3][0]);


// const allHero = marvel_hero.concat(dc_hero);

// console.log(allHero);

// const all_new_hero = [...marvel_hero, ...dc_hero];
// console.log(all_new_hero);


// const anotherArray = [1,2,3,[4,5,6, [6,7,8], 4, [4,5]]];
// const newAnotherArray = anotherArray.flat(Infinity);
// console.log(newAnotherArray);


console.log(Array.isArray("Jelly"));
console.log(Array.from("Jelly"));

console.log(Array.from({name: "Akash"})); // array me convert nahi kar ayega toh empty array return karega


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

