export default {
    getAllItems() {
        return dispatch => {
            DB().done(function (items) {
                console.log(items);
                dispatch({
                    type: 'GET-ALL',
                    items: items
                });
            });
        };
    },
    removeItem(cart,itemId) {
        return (dispatch) => {
            for (var item in cart) {
                console.log('sdfds');
                if (cart[item].productNumber == itemId) {
                    cart.splice(item, 1);
                    dispatch({
                        type: 'REM',
                        cart: cart
                    });
                }
            }
        };
    },
    increaseItem(cart,item) {
            console.log(cart,item);
            cart.push(item);

            return {
                type: 'INC',
                cart: cart
            };
    }
}
const DB = () => {
   return $.getJSON( 'src/utils/dataModel.json');
};