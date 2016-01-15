export default {
    //remove item from cart
    removeItemFromCart(cart,itemId) {
        let newCart = cart;
        //filter through cart
        newCart.items = newCart.items.filter((item) =>{
            //if it the wrong item, keep it
            if(item.productNumber != itemId)
                return true;
            //if the item is not available, remove it
            if(!item.productAvailable)//TODO: something prettier than splice
                newCart.unavailableItems.splice(newCart.unavailableItems.indexOf(item.productName),1);
            //change cart values
            newCart.totalQuantity -= item.amount;
            newCart.subtotalAmount -= item.total;
            item.total = 0;
            item.amount = 0;
            //do not keep it
            return false;
        });
        return {
            type: 'UPDATE',
            cart: newCart
        };
    },
    //decrease the number of items
    removeItem(cart,itemId) {
        let newCart = cart;
        for (let item in newCart.items) {
            //if the product exists in cart
            if (newCart.items[item].productNumber == itemId) {
                //decrease/calculate the cart values
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
    //add item or increase amount
    addItem(cart,item) {
        let newCart = cart;
        if(!item.productAvailable)//pushes if productName does not already exist
            newCart.unavailableItems.pushUnique(item.productName);

        //if array is empty, add item
        //else increase amount                 //initiates cart object vatiables //increments if exsts, else adds item
        newCart.items.length == 0 ? newCart.items.push(addToObject(item)) : newCart.items.incrementPush(item);
        newCart.totalQuantity += 1;
        newCart.subtotalAmount += item.price;

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
//increments if exsts, else adds item
Array.prototype.incrementPush = function (item){
    for (var i = 0; i < this.length; i++) {
        //if product exists in cart
        if (this[i].productNumber === item.productNumber) {
            //increment data
            item.amount++;
            item.total =  item.price * item.amount;
            return;
        }
    }
    //else push item
    this.push(addToObject(item));
};
//creates amount and total attributes on the cart item
function addToObject(item) {
    let newItem = item;
    newItem.amount = 1;
    newItem.total = item.price;
    return newItem;

}
//pushes if item does not already exist in cart
Array.prototype.pushUnique = function (item){
    if ($.inArray(item, this) == -1) {
        this.push(item);
    }
};

