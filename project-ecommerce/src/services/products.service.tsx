import { ProductActionsType, ProductType, singleCategoryType } from "../types/products.types"

export const fecthAllProducts=():Promise<ProductType[]>=>{
    return fetch('https://fakestoreapi.com/products')
    .then(res=>{return res.json()})
    .catch((err)=>{
        console.log(err)
        // throw(err)
    })
}

export const fecthAllCategories=():Promise<singleCategoryType[]>=>{
    return fetch('https://fakestoreapi.com/products/categories')
    .then(res=>{return res.json()})
    .catch((err)=>{
        console.log(err)
        // throw(err)
    })
}