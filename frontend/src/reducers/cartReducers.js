import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'

export const cartReducer = (state = { cartItems_iTechShop: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload
      const existItem = state.cartItems_iTechShop.find(
        (x) => x.product === item.product
      )

      if (existItem) {
        return {
          ...state,
          cartItems_iTechShop: state.cartItems_iTechShop.map((x) =>
            x.product === existItem.product ? item : x
          ),
        }
      } else {
        return {
          ...state,
          cartItems_iTechShop: [...state.cartItems_iTechShop, item],
        }
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems_iTechShop: state.cartItems_iTechShop.filter(
          (x) => x.product !== action.payload
        ),
      }
    default:
      return state
  }
}
