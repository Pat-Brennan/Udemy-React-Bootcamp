import fruits from "./foods";
import { choice, remove } from "./helpers";

let chosenFruit = choice(fruits);
console.log(`I would like one ${chosenFruit} fruit please!`);
console.log(`Here you go! ${chosenFruit}`);
console.log("Delicious! May I have some more?");

let remaining = remove(fruits, chosenFruit)

console.log(`I'm sorry this is all we have left: ${remaining}`)

document.getElementById('root')