import { call,put, all, takeEvery, takeLatest, fork } from "redux-saga/effects";
import { fetchCategoriesActionType, fetchProductsActionType, ProductsReducerActionsType, ProductType, singleCategoryType } from "../types/products.types";
import { signup } from "../services/signup.service";
import { setSignUpError, setUserAction } from "../actions/signup.actions";
import { fecthAllCategories, fecthAllProducts } from "../services/products.service";
import { setCategoriesAction, setProductsAction } from "../actions/products.actions";


export function* workerProductsFetchSaga(action:fetchProductsActionType){
    try{
        console.log("in the worker product fetch saga ");
        console.log(action);
        // yield put(setIsLoadingAction(true))
        const response:ProductType[] = yield call(fecthAllProducts)
        console.log("resp", response)
        yield put(setProductsAction(response))
        // yield put(setIsLoadingAction(false))
    }catch(err){
        console.log(err)
    }
}

export function* workerCategoriesFetchSaga(action:fetchCategoriesActionType){
    try{
        console.log("in the worker categories fetch saga ");
        console.log(action);
        // yield put(setIsLoadingAction(true))
        const response:singleCategoryType[] = yield call(fecthAllCategories)
        console.log("resp", response)
        yield put(setCategoriesAction(response))
        // yield put(setIsLoadingAction(false))
    }catch(err){
        console.log(err)
    }
}

export function* watcherProductsSaga(){
    console.log("watcher products saga" )
    yield takeEvery(ProductsReducerActionsType.FETCH_PRODUCTS, workerProductsFetchSaga)
    yield takeEvery(ProductsReducerActionsType.FETCH_CATEGORIES, workerCategoriesFetchSaga)
}