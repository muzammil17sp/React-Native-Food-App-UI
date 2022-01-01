import { categories, foods } from "../data/data";
export const CATEGORY_FILTER = "CATEGORY_FILTER";
export const FOOD_SEARCH = "FOOD_SEARCH";
export const ADD_TO_BASKET = "ADD_TO_BASKET";
export const ADJUST_QTY = "ADJUST_QTY";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const initialState = {
  foods: foods,
  basket: [],
  categories: categories,
};
const reducer = (state, action) => {

  console.log(action.payload);
  console.log(foods)
  switch (action.type) {
    case CATEGORY_FILTER:
      return {
        ...state,
        foods: foods.filter(
          (food) => food.category === action.payload 
        ),
      };
    case FOOD_SEARCH:
      return {
        ...state,
        foods: foods.filter((food) =>
          food.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };

    case ADD_TO_BASKET:
      const item = action.payload;
      const itemExist = state.basket.find((cart) => cart.name === item.name);
      if (itemExist) {
        return {
          ...state,
          basket: state.basket.map((value) =>
            value.name === item.name ? { ...value, qty: value.qty + 1 } : value
          ),
        };
      } else {
        return {
          ...state,
          basket: [...state.basket, { ...item, qty: 1 }],
        };
      }
    case ADJUST_QTY:
      return {
        ...state,
        basket: state.basket.map((cart) =>
          cart.name === action.payload.name
            ? { ...cart, qty: action.payload.Quantity }
            : cart
        ),
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        basket: state.basket.filter(
          (cart) => cart.name !== action.payload.name
        ),
      };
    default:
      return state;
  }
};
export default reducer;
