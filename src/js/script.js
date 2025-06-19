const product1 = { price: 10, name: 'Kurs PHP', amount: 2 };
const product2 = { price: '20', name: 'Kurs JavaScript', amount: 3 };
const discount = 10;

// String(), Number(), Boolean() !!
if (isNaN(+product2.price)) {
  console.log('Podano niepoprawny typ danych');
}

const total = Number(product1.price) + Number(product2.price);
const totalWithDiscount = total - 10;

console.log(`
  Cena przed zniżką: ${total}
  Cena po zniżce: ${totalWithDiscount}
`);

document.querySelector('#total').innerHTML = total-discount;
let items=document.querySelector('#table-items');

document.querySelector('#discount-amount').innerHTML = -discount;

if(discount>0){
  document.querySelector('#discount').classList.remove('hidden');
}


function addItem(item) {
  items.innerHTML += `
      <tr>
        <td>${item.name}</td>
        <td>${item.amount}</td>
        <td>${item.price}</td>
      </tr>
  `
}

addItem(product1);
addItem(product2);