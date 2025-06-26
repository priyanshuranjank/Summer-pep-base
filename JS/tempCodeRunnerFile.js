
function login(cb) {
  console.log("User Logged in");
  // cb();
}

function addItemToCart(cb) {
  console.log("Added items to cart");
  cb();
}

function createOrder(cb) {
  console.log("order creation");
  cb();
}

function payOrder(cb) {
  console.log("Payment Done..");
  cb();
}

function createOrderSummary(cb) {
  console.log("Created Order Summary");
  cb();
}

function updateWallet() {
  console.log("Update wallet");
}

login(()=>addItemToCart(()=>createOrder(()=>payOrder(()=>createOrderSummary(()=>updateWallet())))));