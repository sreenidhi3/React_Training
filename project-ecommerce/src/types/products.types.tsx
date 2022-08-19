export interface ProductType{
    id:number;
    title:string;
    price:number
    category:CategoryType["electronics"] | CategoryType["jewelery"] | CategoryType["mens_clothing"] | CategoryType["womens_clothing"],
    description:string,
    image:string,
    rating:{
        rate: number;
        count: number;
    }
}

export interface AllProductsResponseType{
    products: ProductType[]
}

export interface CategoryType{
    electronics : "electronics";
    jewelery: "jewelery";
    mens_clothing: "men's clothing";
    womens_clothing: "women's clothing";
}

export interface ProductReducerActionType{
    type:string;
    payload?: ProductType[] | singleCategoryType[] | singleCategoryType ;
}

// export const categories={
//     electronics : "electronics",
//     jewelery: "jewelery",
//     mens_clothing: "men's clothing",
//     womens_clothing: "women's clothing"
// }

export interface ProductActionsType{
    SET_CATEGORIES: "SET_CATEGORIES",
    FETCH_CATEGORIES: "FETCH_CATEGORIES"
    SET_PRODUCTS: "SET_PRODUCTS",
    FETCH_PRODUCTS: "FETCH_PRODUCTS",
    SET_ACTIVE_CATEGORY: "SET_ACTIVE_CATEGORY",
    SET_ACTIVE_CATEGORY_PRODUCTS: "SET_ACTIVE_CATEGORY_PRODUCTS"
}
  
export const ProductsReducerActionsType:ProductActionsType = {
    SET_CATEGORIES: "SET_CATEGORIES",
    FETCH_CATEGORIES: "FETCH_CATEGORIES",
    FETCH_PRODUCTS: "FETCH_PRODUCTS",
    SET_PRODUCTS: "SET_PRODUCTS",
    SET_ACTIVE_CATEGORY: "SET_ACTIVE_CATEGORY",
    SET_ACTIVE_CATEGORY_PRODUCTS: "SET_ACTIVE_CATEGORY_PRODUCTS"
}

export interface setProductsActionType{
    type: ProductActionsType["SET_PRODUCTS"]
    payload: ProductType[];
}

export interface setCategoriesActionType{
    type: ProductActionsType["SET_CATEGORIES"],
    payload: singleCategoryType[]
}

export interface setActiveCategoryActionType{
    type: ProductActionsType["SET_ACTIVE_CATEGORY"],
    payload: singleCategoryType
}


export interface fetchProductsActionType{
    type: "FETCH_PRODUCTS"
}

export interface fetchCategoriesActionType{
    type: "FETCH_CATEGORIES"
}

export const fetchCategoriesAction=()=>{
    return({type: "FETCH_CATEGORIES"})
}

export type singleCategoryType = CategoryType["electronics"] | CategoryType["jewelery"] | CategoryType["mens_clothing"] | CategoryType["womens_clothing"]

export interface setActiveCategoryProductsActionType{
    type: ProductActionsType["SET_ACTIVE_CATEGORY_PRODUCTS"],
    payload: ProductType[]
}

export interface ProductStateType{
    activeCategory:string,
    allCategories: singleCategoryType[],
    allProducts: ProductType[],
    activeProducts: ProductType[]
}
