import http from './httpStore.js'

// create store and set initial value
const cart = http(window.cart)

// any component can subscribe to changes
cart.subscribe($cart => console.log('Cart was updated: ', $cart))

// issue HTTP POST to add item to cart
cart.post('/cart', {productId: 123, quantity: 4})
// prints: Cart was updated: ...

// issue HTTP DELETE item '123' from cart
cart.delete('/cart/123')
// prints: Cart was updated: ...

// issue HTTP GET to refresh cart
cart.get('/cart')
// prints: Cart was updated: ...
