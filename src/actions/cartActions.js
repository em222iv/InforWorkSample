export default {
    //remove every instance of object from cart
    removeItemFromCart(cart,itemId) {
        let newCart = cart;
        newCart.items = newCart.items.filter((item) =>{
            if(item.productNumber != itemId){
                newCart.unavalableItems.splice(newCart.unavalableItems.indexOf(item.productName),1);
                return true;
            }
            return false;
        });
        return {
            type: 'UPDATE',
            cart: newCart
        };
    },
    //from one instance with productNumber
    removeItem(cart,itemId) {
        let newCart = cart;
            for (let item in newCart.items) {
                if (newCart.items[item].productNumber == itemId) {
                    newCart.items.splice(item,1);
                    return {
                        type: 'UPDATE',
                        cart: newCart
                    };
                }
        };
    },
    //add one instance of the item to the cart
    addItem(cart,item) {
        let newCart = cart;
        if(!item.productAvailable)
            newCart.unavalableItems.pushUnique(item.productName);
        newCart.items.push(item);
        return {
            type: 'UPDATE',
            cart: newCart
        };
    }
}

//skip es2015 standard since this scope differs
Array.prototype.remove = function(from, to) {
    let rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};

Array.prototype.pushUnique = function (val){
    if ($.inArray(val, this) == -1) {
        this.push(val);
    }
}