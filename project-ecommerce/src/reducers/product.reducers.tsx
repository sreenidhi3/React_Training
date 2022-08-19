import { useReducer } from "react";
import { CategoryType, ProductReducerActionType, ProductStateType, ProductType, singleCategoryType } from "../types/products.types";
import { SignUpReducerActionType, SignUpUser, SignUpUserState } from "../types/signup.types";

let initialState:ProductStateType = {
    activeCategory:"",
    allCategories: [],
    allProducts: [],
    activeProducts: []
}

export const productReducer = (state=initialState, action: ProductReducerActionType):ProductStateType=>{
    switch(action.type){
        case "SET_PRODUCTS":{
            console.log(action.payload);
            return {...state, allProducts:[...action.payload as ProductType[]]}
        }
        case "SET_CATEGORIES":{
            console.log(action.payload);
            return {...state, allCategories:[...action.payload as singleCategoryType[]]}
        }
        case "SET_ACTIVE_CATEGORY":{
            console.log(action.payload)
            return {...state, activeCategory: action.payload as singleCategoryType}
        }
        case "SET_ACTIVE_CATEGORY_PRODUCTS":{
            return {...state, activeProducts:[...action.payload as ProductType[]]}
        }
        default:
            return state
    }
}