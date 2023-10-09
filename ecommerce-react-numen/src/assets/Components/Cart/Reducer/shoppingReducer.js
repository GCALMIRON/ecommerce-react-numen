import { TYPES } from "../Actions/ShoppingActions";

export const shoppingInitialState = {
    products:[
        {id:0, name:"Producto A", price:10},
        {id:1, name:"Producto B", price:50},
        {id:2, name:"Producto C", price:80},
        {id:3, name:"Producto D", price:120},
        {id:4, name:"Producto E", price:200},
        {id:5, name:"Producto F", price:70},
    ],
    cart: []
}


export function shoppingReducer(state,action) {
    switch(action.type) {
        case TYPES.ADD_TO_CART: {
            let newItem= state.products.find((product) => product.id === action.payload);
            console.log(newItem);
            
            let ItemInCart= state.cart.find((item) => item.id == newItem.id);
            console.log (ItemInCart)
            
            return ItemInCart
            ? {
                ...state,
                cart: state.cart.map((item) => 
                item.id === newItem.id
                ? {...item, quantity: item.quantity + 1 }
                :item
                )
            }
            : 
            {
                ...state,
                cart:[...state.cart, {...newItem, quantity: 1}]
            }

        }
        case TYPES.REMOVE_ONE_PRODUCT:{
            let itemToDelete= state.cart.find(item => item.id == action.payload)
            return itemToDelete.quantity > 1
            ? {
                ...state,
                cart: state.cart.map(item => 
                    item.id===action.payload
                    ? {...item,quantity:item.quantity -1}
                    : item
                )
            }
            : {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }

        }
        case TYPES.REMOVE_ALL_PRODCUT:{
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        }
        case TYPES.CLEAR_CART:{
            return shoppingInitialState;
        }
        default: return state;
    }
}