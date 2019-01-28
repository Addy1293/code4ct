// window.document.onload = () => {
//     debugger;
//     const button1 = document.getElementById("button1");
//     button1.addEventListener("click", addCart('sean', 100));
//     const button2 = document.getElementById("button2");
//     button1.addEventListener("click", addCart('sean1', 200));
//     const button3 = document.getElementById("button3");
//     button1.addEventListener("click", addCart('sean2', 300));
// };
// const cart = [];

// // let cart = [
// //     var cart_prices = new Array();
    
// //     // { name: name, price: price,},
// //     // { name: name, price: price,},
// //     // { name: name, price: price,},
// //     // { name: name, price: price,},
// // ];
// function addCart(name, price) {
//     console.log("here")

//     //create item
//     const item = {
//         name: name,
//         price: price,
//     };

//     //check if array empty
//     if (cart.filter(row => row.name === item.name).length === 0){
//         cart.push(item);
//     }

//     //get cart div
//     let ul = document.getElementById('cart1');
//     //clear cart
//     ul.innerHTML = "";

    // cart.forEach(value => {
    //     // Create a <li> node
    //     let node = document.createElement("li");
    //     const display = `${value.name}-${value.price}`;
    //     // Create a text node               
    //     let textnode = document.createTextNode(display);
    //     ul.appendChild(node);
    // });

//     //show cart with updated array
//     for (let value in cart) {
// ​
    
//         // Append the text to <li>
//         node.appendChild(textnode);
// ​
//         // Append <li> to <ul> with id="myList"                             
//         div.appendChild(node);
//     }
// }
​
//STILL TO DO
//remove an item from cart
//write a function that calculates the total of the cart
//add a quantity to cart items
//be able to increase and decrease the quantity 
//REMEMBER the cart total must update as the quantity changes


