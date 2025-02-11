// create array containing different types of teas.
const teas = ["Green tea", "Black tea", "Masala tea", "Oolong tea", "Chai tea", "Herbal Tea"];

// add "chamomile tea" to existing list of teas
teas.push("Chamomile tea");
console.log(teas);

// remove "Oolong tea" from existing list of teas
const index = teas.indexOf("Oolong tea");
console.log(index);

if (index !== -1) {
    teas.splice(index, 1);
}

// Problem : Filter the list to only include teas that are caffeinated.
const caffeinatedTeas = teas.filter((tea) => tea !== "Herbal Tea");
console.log(caffeinatedTeas);

// Sort teas alphbetical order
console.log(teas.sort());

for(let i = 0; i < teas.length; i++){
    console.log(teas[i]);
}

// count caffeinated teas
