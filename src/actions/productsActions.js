export default {
    getAllItems() {
        return dispatch => {
            DB().done(function (items) {
                dispatch({
                    type: 'GET-PRODUCTS',
                    items: items
                });
            });
        };
    }
}
const DB = () => {
   return $.getJSON( 'src/utils/dataModel.json');
};