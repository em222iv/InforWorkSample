module.exports = function(){
    return {
        cart: {
            items: [],
            subtotalAmount:0,
            totalQuantity:0,
            unavailableItems: [],
            open: false
        },
        products: {
            items: []
        }
    }
};