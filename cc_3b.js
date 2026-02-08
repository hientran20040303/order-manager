let inventory = [
{
    sku: "Ghibli-001",
    name: "The Art of Spirited Away",
    price: 29.46, 
    stock: 10 
},
{ 
    sku: "Ghibli-002",
    name: "The Art of Princess Mononoke", 
    price: 18.59, 
    stock: 3 
},
{ 
    sku: "Ghibli-003", 
    name: "The Art of My Neighbor Totoro", 
    price: 16.36, 
    stock: 15 
},
{ 
    sku: "Ghibli-004", 
    name: "Art of Ponyo", 
    price: 26.21, 
    stock: 5 
}
];
console.log("- Initial Inventory Summary -");
inventory.forEach(item => {
  console.log(`${item.sku} | ${item.name} | $${item.price} | Stock: ${item.stock}`);
});

inventory.push({ sku: "Ghibli-005", name: "Art of Arrietty", price: 28.67, stock: 8 });
console.log("Updated inventory: ", inventory);
console.table(inventory);

let removedProduct = inventory.pop();
console.log(`Removed item: ${removedProduct.name}`);
console.table(inventory);

inventory[0].price = 25.00; 
inventory[1].stock = 10;   
console.log(`Updated ${inventory[0].name} price to $${inventory[0].price}`);
console.log(`Updated ${inventory[1].name} stock to ${inventory[1].stock}`);
console.log("Updated inventory: ", inventory);
console.table(inventory);

let orders = [
  {
    orderId: "ORD-101",
    items: [
    {
        sku: "Ghibli-001", 
        qty: 2 
    },
    { 
        sku: "Ghibli-003", 
        qty: 1 
    }
    ]
  },
  {
    orderId: "ORD-102",
    items: [
      { sku: "Ghibli-004", qty: 10 }
    ]
  }
];
console.log("- Processing Orders -");
orders.forEach(order => {
  let orderTotal = 0;
  let canProcess = true;
  let errorMessage = "";

  order.items.forEach(orderItem => {
    let product = inventory.find(p => p.sku === orderItem.sku);
    
    if (!product || product.stock < orderItem.qty) {
      canProcess = false;
      let itemName = product ? product.name : "Unknown Item";
      errorMessage = `Insufficient stock for SKU: ${orderItem.sku} - ${itemName}`;
    }
  });

  if (canProcess) {
    order.items.forEach(orderItem => {
      let product = inventory.find(p => p.sku === orderItem.sku);
      product.stock -= orderItem.qty;
      orderTotal += product.price * orderItem.qty;
    });
    console.log(`Order ${order.orderId} processed. Total: $${orderTotal.toFixed(2)}`);
  } else {
    console.log(`Order ${order.orderId} failed: ${errorMessage}`);
  }
});

console.log("- Reports -");

let totalValue = inventory.reduce((sum, item) => sum + (item.price * item.stock), 0);
console.log(`Total Inventory Value: $${totalValue.toFixed(2)}`);

let lowStockItems = inventory.filter(item => item.stock <= 5);
console.log("Low Stock Items:", lowStockItems);

let priceList = inventory.map(item => `${item.sku} - $${item.price}`);
console.log("Price List:", priceList);