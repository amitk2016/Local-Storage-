//if a shopping cart does not exist in local storage 

if(localStorage.getItem('cart') == null ){

	//Create the cart 
	localStorage.setItem('cart',JSON.stringify ( [] ) );

}
// Extract the cart and convert it back into an Object
var cart = JSON.parse(localStorage.getItem('cart'));

//Show the content of the cart 
console.log(cart);


//Show the user how many itmes they have in the cart 

updateCartDisplay();


//find all the buttons

var addToCartButtons = document.querySelectorAll('.add-to-cart');

//Add click event listeners to them all 
for (var i =0; i < addToCartButtons.length; i++) {

	addToCartButtons[i].onclick = addToCart;

}

function addToCart() {

var productName = this.dataset.name;
var productPrice = parseFloat(this.dataset.price);

var product = {
	name:productName,
	price:productPrice
}

cart.push(product);

localStorage.setItem('cart', JSON.stringify(cart) );

console.log(cart);

updateCartDisplay();


}

//listen the clicks on the clear cart button 

document.querySelector('#clear-cart').onclick = function (){

	localStorage.setItem('cart',JSON.stringify ( [] ) );

	cart = [];

	updateCartDisplay();


};

function updateCartDisplay(){

// Get the cart contents 
var cart = JSON.parse(localStorage.getItem('cart'));

// if (cart.length == 0) {
// 	var text = '';
// } else{
// 	var text = cart.length;
// }

// Count the cart contents and display on the screen 
document.querySelector('#total-cart').innerHTML = cart.length ;

showCartTable();

};
	
function showCartTable(){

	// FInd the container that will hold the table
	var container = document.querySelector('#cart-table');

	// Create the table 

	var table = document.createElement('table');
	table.setAttribute('border','1');

	// create a row to hold the headings 

	var headingsRow = document.createElement('tr');

	// create the name heading 
	var nameHeading = document.createElement('th');
	nameHeading.innerHTML = 'Product Name';

	// create the price heading 

	var priceHeading = document.createElement('th');

	priceHeading.innerHTML = 'Price';

	//add the heading to the headings row
	headingsRow.appendChild(nameHeading);
	headingsRow.appendChild(priceHeading);

	// Add the heading row to the table 

	table.appendChild(headingsRow);

	// grand total 
	var grandTotal = 0;



	// Loop over all the cart items
	for(var i=0; i<cart.length; i++){

		//Get the price of the product and add to the grand total 

		cart[i].price;
		grandTotal += cart[i].price;

		var row = document.createElement('tr');

		//Create the product name data element 

		var nameTD = document.createElement('td');

		// Create the product heading

		var priceTD = document.createElement('td');

		// Add some data to the TD element 

		nameTD.innerHTML = cart[i].name;
		priceTD.innerHTML = cart[i].price;

		// Add the td elements to the row 

		row.appendChild(nameTD);
		row.appendChild(priceTD);

		//Add this row to the table 

		table.appendChild(row);


	}

	console.log(grandTotal);

	var grandTotalRow = document.createElement('tr');
	var grandTotalTD = document.createElement('td');

	var fillerTD =document.createElement('td');

	grandTotalTD.innerHTML = 'Grand Total: ' + grandTotal;

	grandTotalRow.appendChild(fillerTD);
	grandTotalRow.appendChild(grandTotalTD);

	table.appendChild(grandTotalRow);

	//clear whatever is inside the div 
	container.innerHTML = '';


	// add the table to the screen 

	container.appendChild(table); 







}


// var product ={
// 	id:1234,
// 	Price:1000,

// };

// // Add this product ot the cart array 

// cart.push(product);
// cart.push(product);
// cart.push(product);
// cart.push(product);

// console.log(cart);











// Get copy of the cart 
//var cart = localStorage.getItem('cart');

//cart = {

	//id:1234,
	//name:'Smartphone',
	//Price:1000,
	//thumbnail:'image.jpg'

//};

//Convert our object into text, because  localstorage doesnt work with object 

//cart = JSON.stringify(cart);

// save our changes 
//localStorage.setItem('cart',cart);