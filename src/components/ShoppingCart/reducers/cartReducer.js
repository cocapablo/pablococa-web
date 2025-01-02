

export const cartInitialState = JSON.parse(localStorage.getItem('cart')) || [];

export function updateLocalStorageCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export const CART_ACTIONS_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART'
}

export const cartReducer = (state, action) => {
    switch (action.type) {
        case CART_ACTIONS_TYPES.ADD_TO_CART: {
            const product = action.payload;
            const productInCartIndex = state.findIndex(item => item.id === product.id);
            let newCart = [];

            if (productInCartIndex >= 0) {
                newCart = structuredClone(state);
                newCart[productInCartIndex].quantity++;
                
            }
            else {
                newCart = [...state, {...product, quantity: 1}];
                
            }

            updateLocalStorageCart(newCart);
            return newCart;
        }
        case CART_ACTIONS_TYPES.REMOVE_FROM_CART: {
            const product = action.payload;
            const newCart = structuredClone(state);
            const productInCartIndex = newCart.findIndex(item => item.id === product.id);

            if (productInCartIndex >= 0) {
                newCart[productInCartIndex].quantity--;

                if (newCart[productInCartIndex].quantity === 0) {
                    newCart.splice(productInCartIndex, 1);
                }

                updateLocalStorageCart(newCart);
                return newCart;
            }
            return state;
        } 
        case CART_ACTIONS_TYPES.CLEAR_CART: {
            updateLocalStorageCart([]);
            return [];
        }  
    }
    return state;
}