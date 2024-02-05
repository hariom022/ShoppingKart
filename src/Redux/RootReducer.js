import { combineReducers } from "redux";
import ReducerProduct from "./ReducerProduct";
import ReducerSingleProduct from "./ReducerSingleProduct";
import ReducerCart from "./ReducerCart";

const RootReducer= combineReducers({
    ReducerProduct:ReducerProduct,
    ReducerSingleProduct: ReducerSingleProduct,
    ReducerCart:ReducerCart
})

export default RootReducer