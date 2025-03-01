let chaiTypes = ["Masala chai", "Dark chai", "Tea chai", "Milk chai"];

console.log(chaiTypes[2]);

// length
console.log(chaiTypes.length);

// push - add to the end
chaiTypes.push("Cappuccino chai");

// pop - remove from the end
chaiTypes.pop();

// index of - if not present returns -1
console.log(chaiTypes.indexOf("Milk chai")); // answer is 2

const index = chaiTypes.indexOf("Milk chai");
if (index > -1) {
    chaiTypes.splice(index, 1);
}
console.log(chaiTypes);

//
let newChaiTypes = [...chaiTypes,"coffee chai"];

console.log(newChaiTypes);

// object literal

let chaiRecipe = {
    name : "Masala chai",
    ingredients : {
        teaLeaves:"Assam Tea",
        milk: "Full Cream Milk",
        sugar: "Brown sugar",
        spices:["cardamom", "cinnamon", "ginger"]
    },
    instructions: "Boil water, add spices, add tea leaves, add milk, add sugar, stir, serve hot"
}

// access spices

// console.log(chaiRecipe.ingredients.spices);

let updatedChaiRecepie = {
    ...chaiRecipe,
    instructions: "Boil water, add spices, add tea leaves, add milk, add sugar, stir, serve hot",
    
}

// object & array destructure}
let {name, ingredients } = chaiRecipe;
let [firstChai,secondChai] = chaiTypes;
