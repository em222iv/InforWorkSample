export default {
    //remove every instance of object from cart
    removeItemFromCart(cart,itemId) {
        let newCart = cart;

        newCart.items = newCart.items.filter((item) =>{

            if(item.productNumber != itemId)
                return true;

            if(!item.productAvailable)
                newCart.unavalableItems.splice(newCart.unavalableItems.indexOf(item.productName),1);

            newCart.totalQuantity -= 1;
            newCart.subtotalAmount -= item.price;
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
                    newCart.totalQuantity -= 1;
                    newCart.subtotalAmount -= newCart.items[item].price;
                    newCart.items.splice(item,1);
                    return {
                        type: 'UPDATE',
                        cart: newCart
                    };
                }
        }
    },
    //add one instance of the item to the cart
    addItem(cart,item) {
        let newCart = cart;
        if(!item.productAvailable)
            newCart.unavalableItems.pushUnique(item.productName);
        newCart.totalQuantity += 1;
        newCart.subtotalAmount += item.price;
        newCart.items.push(item);
        return {
            type: 'UPDATE',
            cart: newCart
        };
    },
    //dropdown toggle
    toggle(cart) {
        let newCart = cart;
        if(newCart.open){
            newCart.open = false;
        } else if(!newCart.open){
            newCart.open = true;
        }
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