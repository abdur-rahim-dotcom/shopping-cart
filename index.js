//iPhone Plus Event Handler
const targetIphonePlus = document.getElementById("iphone-plus");
targetIphonePlus.addEventListener("click", function () {
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
targetIphoneMinus.addEventListener("click", function () {
  //iPhone count and price
  const productCount = productSubtract("iphone-count");
  document.getElementById("iphone-count").value = productCount;
  const iphonePrice = productPriceSubtract("iphone-price", 1278);
  document.getElementById("iphone-price").innerText = iphonePrice;
  // logic
  if (productCount <= 0) {
    conditionIf("iphone-count", "iphone-price", "casing-price", "subtotal", "tax", "total")
  } else {
    conditionElse("subtotal", "tax", "total", 1278);
  }
});
//casing Plus Event Handler
const targetCasingPlus = document.getElementById("casing-plus");
targetCasingPlus.addEventListener("click", function () {
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
targetCasingMinus.addEventListener("click", function () {
  //product count and price
  const productCount = productSubtract("casing-count");
  document.getElementById("casing-count").value = productCount;
  const casingPrice = productPriceSubtract("casing-price", 59);
  document.getElementById("casing-price").innerText = casingPrice;
  // logic
  if (productCount <= 0) {
    conditionIf("casing-count", "casing-price", "iphone-price", "subtotal", "tax", "total")
  } else {
    conditionElse("subtotal", "tax", "total", 59);
  }
});
// function
function productCount(id) {
  const productCount = document.getElementById(id).value;
  const productCountNumber = parseInt(productCount);
  const totalProduct = productCountNumber + 1;
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
function conditionIf(countId, priceZeroId, otherPriceId, subtotalId, taxId, totalId) {
  document.getElementById(countId).value = 0;
  document.getElementById(priceZeroId).innerText = 0;
  const iphonePrice = selectOtherPrice(otherPriceId);
  const subtotal = (document.getElementById(
    subtotalId
  ).innerText = iphonePrice);
  const tax = (iphonePrice / 100) * 16;
  document.getElementById(taxId).innerText = tax;
  document.getElementById(totalId).innerText = subtotal + tax;
}
function conditionElse(subtotalId, taxId, totalId, price) {
  const subtotal = productPriceSubtract(subtotalId, price);
  document.getElementById(subtotalId).innerText = subtotal;
  const tax = (subtotal / 100) * 16;
  document.getElementById(taxId).innerText = tax;
  document.getElementById(totalId).innerText = subtotal + tax;
}
const favoriteIcon = document.getElementById("favorite1");
favoriteIcon.addEventListener("click", function () {
  document.getElementById("favorite1").src = "images/star-full.png";
})
const favoriteIcon2 = document.getElementById("favorite2");
favoriteIcon2.addEventListener("click", function () {
  document.getElementById("favorite2").src = "images/star-full.png";
})


// work with remove image
// const removeImage = document.getElementById("remove");
// removeImage.addEventListener("click", function () {
//   removeEverything("iphone-count", "iphone-price");
//   const iphonePrice = document.getElementById("iphone-price")
//   document.getElementById("subtotal").innerText - iphonePrice;
// });

// function removeEverything(id, id2) {
//   const quantity = (document.getElementById(id).value = 0);
//   const price = (document.getElementById(id2).innerText = 0);

// }


