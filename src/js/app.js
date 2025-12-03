const product1 = { price: 10, title: 'JS od podstaw' };
const product2 = { price: '20', title: 'PHP od podstaw' };
const discount = 10;
let discountEnabled = false;

// definicja elementow
const discountElement = document.querySelector('#discount')
const discountCheckbox = document.querySelector('#add-discount')

// dodaj produkty do tabeli
const itemsContainer = document.querySelector('#items');
let counter = 1;
function addItem(item) {
  itemsContainer.innerHTML += `<tr>
          <td class="center"><button class="button">x</button></td>
          <td>${item.title}</td>
          <td>1</td>
          <td class='price'>${item.price}</td>
        </tr>`;
}
addItem(product1);
addItem(product2);

// dodaj zniżke
function addDiscount(e) {
  discountEnabled = e.target.checked;
  if (discount > 0) {
    document.querySelector('#discount-amount').innerHTML = -discount;
    discountElement.classList.toggle('hidden');
  }
  calculatePrice();
}

// cena całkowita
function calculatePrice() {
  let total = Number(product1.price) + Number(product2.price);
  if (discountEnabled) {
    total -= discount;
  }

  document.querySelector('#total-price').innerHTML = total;
}
calculatePrice();

// listenery
discountCheckbox.addEventListener('click', addDiscount);


//Zaznacz zniżkę jeśli trzeba
const discountShouldBeEnabled=(Boolean(Number(document.querySelector('#discount').dataset.discountShouldBeEnabled)));
if(discountShouldBeEnabled){
  document.querySelector('#add-discount').click();
}

function RemoveRow(e){
  let sum=0;
  e.target.closest('tr').remove();
  price=document.querySelectorAll('.price')
  price.forEach(element=>{
    sum+=Number(element.innerHTML)
  })
  document.querySelector('#total-price').innerHTML = sum;
}

//usuwanie wiersza
const lista=document.querySelectorAll(".button");
s
lista.forEach(element=>{
  element.addEventListener('click',RemoveRow)
})