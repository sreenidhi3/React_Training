import { CategoryType, fetchCategoriesActionType, fetchProductsActionType, ProductType, setActiveCategoryActionType, setActiveCategoryProductsActionType, setCategoriesActionType, setProductsActionType, singleCategoryType } from "../types/products.types"

export const setProductsAction=(payload:ProductType[]):setProductsActionType=>{
    return({type: "SET_PRODUCTS", payload})
}

export const setCategoriesAction=(payload:singleCategoryType[]):setCategoriesActionType=>{
    return({type: "SET_CATEGORIES", payload})
}

export const setActiveCategoryAction=(payload:singleCategoryType):setActiveCategoryActionType=>{
    return({type: "SET_ACTIVE_CATEGORY", payload})
}

export const setActiveCategoryProductsAction=(payload:ProductType[]):setActiveCategoryProductsActionType=>{
    return({type: "SET_ACTIVE_CATEGORY_PRODUCTS", payload})
}

export const fetchProductsAction=():fetchProductsActionType=>{
    return({type: "FETCH_PRODUCTS"})
}

export const fetchCategoriesAction=():fetchCategoriesActionType=>{
    return({type: "FETCH_CATEGORIES"})
}