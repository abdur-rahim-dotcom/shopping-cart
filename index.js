//iPhone Plus Event Handler
const targetIphonePlus = document.getElementById("iphone-plus");
targetIphonePlus.addEventListener("click", function() {
  //iPhone count and price
  const totalProduct = productCount("iphone-count");
  document.getElementById("iphone-count").value = totalProduct;
  const multipliedPrice = 1278 * totalProduct;
  document.getElementById("iphone-price").innerText = multipliedPrice;
  // Casing price
  const casingPrice = selectOtherPrice("casing-price");
  const combinePrice = casingPrice + multipliedPrice;
  //sub total price
  const subtotal = subTotalPrice("subtotal", combinePrice);
  //tax
  const tax = (combinePrice / 100) * 16;
  document.getElementById("tax").innerText = tax;
  //total price
  document.getElementById("total").innerText = combinePrice + tax;
});

//iPhone minus event handler
const targetIphoneMinus = document.getElementById("iphone-minus");
targetIphoneMinus.addEventListener("click", function() {
  //iPhone count and price
  const productCount = productSubtract("iphone-count");
  document.getElementById("iphone-count").value = productCount;
  const iphonePrice = productPriceSubtract("iphone-price", 1278);
  document.getElementById("iphone-price").innerText = iphonePrice;
  // logic
  if (productCount <= 0) {
    document.getElementById("iphone-count").value = 0;
    document.getElementById("iphone-price").innerText = 0;
    const casingPrice = selectOtherPrice("casing-price");
    // subtotal price
    const subtotal = (document.getElementById(
      "subtotal"
    ).innerText = casingPrice);
    // tax
    const tax = (casingPrice / 100) * 16;
    document.getElementById("tax").innerText = tax;
    //total price
    document.getElementById("total").innerText = subtotal + tax;
  } else {
    // subtotal price
    const subtotal = productPriceSubtract("subtotal", 1278);
    document.getElementById("subtotal").innerText = subtotal;
    // tax
    const tax = (subtotal / 100) * 16;
    document.getElementById("tax").innerText = tax;
    //total price
    document.getElementById("total").innerText = subtotal + tax;
  }
});
//casing Plus Event Handler
const targetCasingPlus = document.getElementById("casing-plus");
targetCasingPlus.addEventListener("click", function() {
  //iPhone count and price
  const totalProduct = productCount("casing-count");
  document.getElementById("casing-count").value = totalProduct;
  const multipliedPrice = 59 * totalProduct;
  document.getElementById("casing-price").innerText = multipliedPrice;
  // iphone price
  const iphonePrice = selectOtherPrice("iphone-price");
  const combinePrice = iphonePrice + multipliedPrice;
  //sub total price
  const subtotal = subTotalPrice("subtotal", combinePrice);
  //tax
  const tax = (combinePrice / 100) * 16;
  document.getElementById("tax").innerText = tax;
  //total price
  document.getElementById("total").innerText = combinePrice + tax;
});
//casing minus event handler
const targetCasingMinus = document.getElementById("casing-minus");
targetCasingMinus.addEventListener("click", function() {
  //product count and price
  const productCount = productSubtract("casing-count");
  document.getElementById("casing-count").value = productCount;
  const casingPrice = productPriceSubtract("casing-price", 59);
  document.getElementById("casing-price").innerText = casingPrice;
  // logic
  if (productCount <= 0) {
    document.getElementById("casing-count").value = 0;
    document.getElementById("casing-price").innerText = 0;
    const iphonePrice = selectOtherPrice("iphone-price");
    // subtotal price
    const subtotal = (document.getElementById(
      "subtotal"
    ).innerText = iphonePrice);
    // tax
    const tax = (iphonePrice / 100) * 16;
    document.getElementById("tax").innerText = tax;
    //total price
    document.getElementById("total").innerText = subtotal + tax;
  } else {
    // subtotal price
    const subtotal = productPriceSubtract("subtotal", 59);
    document.getElementById("subtotal").innerText = subtotal;
    // tax
    const tax = (subtotal / 100) * 16;
    document.getElementById("tax").innerText = tax;
    //total price
    document.getElementById("total").innerText = subtotal + tax;
  }
});
// function
function productCount(id) {
  const productCount = document.getElementById(id).value;
  const productCountNumber = parseInt(productCount);
  const totalProduct = productCountNumber + 1;
  // document.getElementById(id).value = totalProduct;
  return totalProduct;
}
function selectOtherPrice(id) {
  const price = document.getElementById(id).innerText;
  const priceNumber = parseInt(price);
  return priceNumber;
}
function subTotalPrice(id, combinePrice) {
  const total = document.getElementById(id).innerText;
  const totalNumber = parseInt(total);
  const totalPrice = combinePrice;
  document.getElementById(id).innerText = totalPrice;
}
function productSubtract(id) {
  const productCount = document.getElementById(id).value;
  const productCountNumber = parseInt(productCount);
  const totalProduct = productCountNumber - 1;
  return totalProduct;
}

function productPriceSubtract(id, price) {
  const total = document.getElementById(id).innerText;
  const totalNumber = parseInt(total);
  const totalPrice = totalNumber - price;
  return totalPrice;
}
