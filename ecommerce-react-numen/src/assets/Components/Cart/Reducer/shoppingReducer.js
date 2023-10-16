import { TYPES } from "../Actions/ShoppingActions";

export const shoppingInitialState = {
    products:[
      {
        id: 0,
        name: "DELL G15 5525 - RYZEN 5 6600H - SSD 512 GB - 16 GB RAM - 15.6 PULGADAS FHD:120hz",
        price: 600.000,
        img: './src/img/Dell.webp'
      },
      {
        id: 1,
        name: "ASUS FX517Z - i7-12650H - SSD 512 GB - 16 GB DDR5 4800MHZ - RTX 3070",
        price: 985.000,
        img: './src/img/Asus.webp'
      },
      {
        id: 2,
        name: "HP 17-CN0781CL - i7-1165G7 - SSD 512 GB - 16 GB RAM - 17.3 PULGADAS HD+ Touch",
        price: 560.000,
        img: './src/img/HP.webp'
      },
      {
        id: 3,
        name: "LENOVO IDEAPAD GAMING 3 - Ryzen 5 5600H - SSD 512 GB - 16 GB RAM - 15.6 PULGADAS FHD",
        price: 580.000,
        img: './src/img/Lenovo.webp'
      },
      {
        id: 4,
        name: "ACER NITRO 5 - i7-11800H - SSD 1TB - 32 GB RAM - 17.3 PULGADAS FHD IPS 144hz - RTX 3050",
        price: 888.000,
        img: './src/img/Acer.webp'
      },
      {
        id: 5,
        name: "MSI PULSE GL66 11UCK - i5-11400H - SSD 512 GB - 16 GB RAM - 15.6 PULGADAS FHD IPS",
        price: 590.000,
        img: './src/img/MSI.webp'
      },
    ],
    cart: [

    ]
}


export function shoppingReducer(state,action) {
    switch (action.type) {
      case TYPES.ADD_TO_CART: {
        let newItem = state.products.find(
          (product) => product.id === action.payload
        );
        
        let itemInCart = state.cart.find((item) => item.id === newItem.id);
        
        return itemInCart
          ? {
              ...state,
              cart: state.cart.map((item) =>
                item.id === newItem.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            }
          : {
              ...state,
              cart: [...state.cart, { ...newItem, quantity: 1 }],
            };
      }
      case TYPES.REMOVE_ONE_PRODUCT: {
       let itemToDelete= state.cart.find(item=> item.id===action.payload);

       return itemToDelete.quantity > 1 ?{
        ...state,
        cart:state.cart.map(item=> item.id===action.payload 
          ?{...item,quantity:item.quantity -1}
          :item
          ),
       }:{
        ...state,
        cart:state.cart.filter(item=> item.id!==action.payload),
       };
      }
      case TYPES.REMOVE_ALL_PRODUCT: {
        return {
          ...state,
          cart:state.cart.filter(item=> item.id!==action.payload),
         };
      }
      case TYPES.CLEAR_CART: {
        return shoppingInitialState;
      }
      default:
        return state;
    }
}