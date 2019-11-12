const shop = {
    items: [
        { name: "Infinity Edge", price: 3600, quantity: 2 },
        { name: "Runnan's Hurricane", price: 2600, quantity: 1 },
        { name: "Shipping", price: 300, shipping: true }
    ]
}

const orderTotal = order => {
    const totalItems = order.items
    .filter(x => !x.shipping)
    .reduce((total, item) => total + (item.price * item.quantity),0)

    const shippingItem = order.items.find(item => item.shipping)

    const shipping = totalItems >= 10000? 0 : shippingItem.price

    return totalItems + shipping
}

console.log(orderTotal(shop))