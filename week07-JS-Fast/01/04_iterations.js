let salesData = [
  { product: "Laptop", price: 1200 },
  { product: "Mobile", price: 800 },
  { product: "Headphones", price: 150 },
  { product: "Keyboard", price: 80 },
];
let initialValue = 0;
let totalSales = salesData.reduce((acc, sale) => acc + sale.price, 1);
// console.log(totalSales);

// get price below 50

let inventory = [
  { name: "Widget A", stock: 30 },
  { name: "Widget B", stock: 120 },
  { name: "Widget C", stock: 45 },
  { name: "Widget D", stock: 70 },
];

let lowStockItems = inventory.filter( (item) => item.stock < 50 )
// console.log(lowStockItems);


// find most active user
let userActivity = [
    { user: "Alice", activityCount: 45 },
    { user: "Bob", activityCount: 72 },
    { user: "Charlie", activityCount: 33 },
];
let initialValue2 = userActivity[0].activityCount;
let mostActiveUser = userActivity.reduce( (acc, user) => ( user.activityCount > acc ? user.activityCount : acc),initialValue2)
console.log(mostActiveUser);

// OR -- here no initial value is given. it takes array[0]. that is {user:"Alice", acitvityCoutn:45}
let mostActiveUser2 = userActivity.reduce( (acc, user) => ( user.activityCount > acc.activityCount ? user : acc))
console.log(mostActiveUser2);


