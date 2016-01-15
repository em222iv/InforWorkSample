export default {
    //remove every instance of object from cart
    removeItemFromCart(cart,itemId) {
        let newCart = cart;

        newCart.items = newCart.items.filter((item) =>{

            if(item.productNumber != itemId)
                return true;

            if(!item.productAvailable)
                newCart.unavailableItems.splice(newCart.unavailableItems.indexOf(item.productName),1);

            newCart.totalQuantity -= item.amount;
            newCart.subtotalAmount -= item.total;
            item.total = 0;
            item.amount = 0;

            return false;
        });
        return {
            type: 'UPDATE',
            cart: newCart
        };
    },

    removeItem(cart,itemId) {
        let newCart = cart;
            for (let item in newCart.items) {
                if (newCart.items[item].productNumber == itemId) {
                    newCart.totalQuantity -= 1;
                    newCart.subtotalAmount -= newCart.items[item].price;
                    newCart.items[item].amount -= 1;
                    newCart.items[item].total = newCart.items[item].price * newCart.items[item].amount;
                    return {
                        type: 'UPDATE',
                        cart: newCart
                    };
                }
        }
    },

    addItem(cart,item) {
        let newCart = cart;
        if(!item.productAvailable)
            newCart.unavailableItems.pushUnique(item.productName);
        newCart.totalQuantity += 1;
        newCart.subtotalAmount += item.price;

        newCart.items.length == 0 ? newCart.items.push(addToObject(item)) : newCart.items.reducePush(item);
        console.log(newCart.items);
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

Array.prototype.reducePush = function (item){
    for (var i = 0; i < this.length; i++) {
        console.log(this[i].productNumber,item.productNumber);
        if (this[i].productNumber === item.productNumber) {
            item.amount++;
            item.total =  item.price * item.amount;
            return;
        }
    }
    this.push(addToObject(item));
};
function addToObject(item) {
    let newItem = item;
    newItem.amount = 1;
    newItem.total = item.price;
    return newItem;

}

Array.prototype.pushUnique = function (val){
    if ($.inArray(val, this) == -1) {
        this.push(val);
    }
};

