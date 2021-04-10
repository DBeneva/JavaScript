function solve() {
   let shoppingCart = document.querySelector('.shopping-cart');
   let output = document.querySelector('textarea');
   let checkout = document.querySelector('.checkout');
   let cart = [];

   shoppingCart.addEventListener('click', addOnClick);
   checkout.addEventListener('click', checkoutOnClick);

   function addOnClick(ev) {
      if (ev.target.tagName == 'BUTTON' && ev.target.className == 'add-product') {
         let product = ev.target.parentNode.parentNode.querySelector('.product-title').textContent;
         let price = Number(ev.target.parentNode.parentNode.querySelector('.product-line-price').textContent);
         let added = `Added ${product} for ${price.toFixed(2)} to the cart.\n`;
         output.textContent += added;

         cart.push({ product, price });
         console.log(cart);        
      }
   }

   function checkoutOnClick(ev) {
      let cartCopy = cart.slice(0);
      let list = new Set(cartCopy.map(x => x.product));
      let totalPrice = cart.map(x => x.price).reduce((a, c) => a + c, 0);

      output.textContent += `You bought ${Array.from(list).join(', ')} for ${totalPrice.toFixed(2)}.`;
      shoppingCart.removeEventListener('click', addOnClick);
      checkout.removeEventListener('click', checkoutOnClick);
   }
}