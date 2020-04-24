const CartAction = {
    FETCHING_ITEM: "FETCHING_ITEM",
    ADDED_CART: "ADDED_CART",
    CART_REMOVE: "CART_REMOVE",
    ADD_TOTOAL_PRICE: "ADD_TOTOAL_PRICE",
}

const addedItems = [], total = 0, itemFetch = [];

export const initialState = {
    itemFetch: itemFetch,
    addedItems: addedItems,
    total: total,
};

export const Cartreducer = (state = initialState, action) => {
    if (action.type === CartAction.FETCHING_ITEM) {
        return {
            ...state,
            itemFetch: action.payload
        }
    }
    else if (action.type === CartAction.ADDED_CART) {
        let addedItem = state.itemFetch.find(item => item.id === action.payload.items.id)
        let existed_item = state.addedItems.find(item => action.payload.items.id === item.id)
        if (existed_item) {
            addedItem.quantity += action.payload.qty;
        }
        else {
            addedItem.quantity = action.payload.qty;
            //calculating the total
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
            }
        }

    } else if (action.type === CartAction.CART_REMOVE) {
        console.log(action.payload.items.id);
        console.log(action.payload.updateItem);
        // filter new items obj delete item = action.id 
        let new_items = state.addedItems.filter(item => action.payload.items.id !== item.id)
        return {
            ...state,
            addedItems: new_items,
            total: state.total -= action.payload.updatePrice
        }
    }
    else if (action.type === CartAction.ADD_TOTOAL_PRICE) {
        return {
            ...state,
            total: state.total += action.payload
        }
    }

    return state;
};

export const mapDispatchToProps = {

    fetchingApi: (dataFetch) => {
        return {
            type: CartAction.FETCHING_ITEM, payload: dataFetch
        }
    },
    addItemsInCart: (data) => {
        return {
            type: CartAction.ADDED_CART, payload: data
        }
    },
    handleRemove: (dataRemove) => {
        return {
            type: CartAction.CART_REMOVE, payload: dataRemove
        }
    },
    addTotalPrice: (price) => {
        return {
            type: CartAction.ADD_TOTOAL_PRICE, payload: price
        }
    },

}