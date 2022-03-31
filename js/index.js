// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!', product);
  //Get Price
  let price = product.querySelector('.price span').innerHTML;
  // console.log(price);

  //Get Quantity
  let quantity = product.querySelector('.quantity input');
  // console.log(quantity.value);

  //Get Subtotal
  let subtotal = product.querySelector('.subtotal span');
  // console.log(subtotal);

  let sub = price * quantity.value;
  // console.log('SUBTOTAL', sub);

  subtotal.innerHTML = sub;

  return sub;

  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const allProducts = document.querySelectorAll('.product');
  //console.log(allProducts);

  let fullTotal = 0;
  for (let i = 0; i < allProducts.length; i++) {
    //console.log(allProducts[i]);
    updateSubtotal(allProducts[i]);
    fullTotal += updateSubtotal(allProducts[i]);
  }
  
  let totalValue = document.querySelector("#total-value span");
  totalValue.innerHTML = fullTotal;
  

}  


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  let removeButtonParent = event.currentTarget.parentNode.parentNode;
  removeButtonParent.remove(target);
}

// ITERATION 5

function createProduct() {
  let newProductName = document.querySelector(".create-product input[type=text]");
  
  let newProductPrice = document.querySelector(".create-product input[type=number]");

  let newTableRow = document.createElement("tr");
  newTableRow.className = "product";
  newTableRow.innerHTML = `
  <td class="name">
    <span>${newProductName.value}</span>
  </td>
  <td class="price">$<span>${newProductPrice.value}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>`;
 
  let rmvBtn = newTableRow.querySelector(".btn-remove");
  rmvBtn.addEventListener("click", removeProduct);

  let body = document.querySelector("tbody");
  body.appendChild(newTableRow);

  newProductName.value = "";
  newProductPrice.value = 0;

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  //Remove Button
  let removeButton = document.querySelectorAll(".btn-remove");
  //console.log(removeButton);
  for (let i = 0; i < removeButton.length; i++) {
    removeButton[i].addEventListener("click", removeProduct)
  }

  //Create Product Button
  let createNewProductButton = document.getElementById("create");
  //console.log("CREATE", createNewProductButton)
  createNewProductButton.addEventListener("click", createProduct);
  //console.log("HI", createNewProductButton)
});
