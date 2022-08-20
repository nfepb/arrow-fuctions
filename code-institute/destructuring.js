/**
 * To run this file in Gitpod, use the
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
// let john = age[0];
// let mary = age[1];
// let joe = age[2];
// console.log(john, mary, joe);

// Destructuring objects
let [john, mary, joe] = ages;
console.log(john, mary, joe);

let jobs = {
  mike: "designer",
  jill: "developer",
  alicia: "accountant",
};
let { mike, jill, alicia } = jobs;
console.log(mike, jill, alicia);

// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecundary] = languages;
console.log(johnNative, johnSecundary);
let [, , maryNative, marySecundary] = languages;
console.log(maryNative, marySecundary);

let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "japanese",
}

let {firstLanguage, thirdLanguage} = languages2;
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax

let fruits = ["apple", "banana", "orange", "peach", "cherry"];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(others);

let favoriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak"
};

let {brian, anna, ...rest} = favoriteFoods;
console.log(brian)
console.log(anna)
console.log(rest)
