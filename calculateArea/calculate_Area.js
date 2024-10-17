let length;
let width;

function calculateArea() {
 length = parseFloat(document.getElementById('length').value);
 width = parseFloat(document.getElementById('width').value);

 let area = length * width;
 document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

let price1, price2, price3;
function calculateAmount(amount1, amount2, amount3) {
 price1 = parseFloat(amount1);
 price2 = parseFloat(amount2);
 price3 = parseFloat(amount3);

 document.getElementById('total').innerText = `The price of these groceries is: $${price1 + price2 + price3}`;
}