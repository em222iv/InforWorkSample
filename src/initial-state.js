module.exports = function(){
    return {
        cart: {
            items: [],
            subtotalAmount:0,
            totalQuantity:0,
            unavalableItems: [],
            open: false
        },
        products: {
            items: []
        }
    }
};