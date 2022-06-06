function calcOrderTotal (products) {
  let total = 0
  for (let type in products) {
    if (Object.prototype.hasOwnProperty.call(products, type)) {
      for (let item of products[type]) {
        if (item.bag) { 
          total += item.price * item.quantity;
        }
      }
    }
  }
  return total
}

export default calcOrderTotal
