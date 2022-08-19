import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { RootState } from "../store";
import { ProductType } from "../types/products.types";
import "../styles/products.styles.css"



const Catalogue=()=>{

    const {allProducts, allCategories, activeCategory, activeProducts} = useSelector((state: RootState) => state.productReducer);
    // const productProp = {
    //     products: allProducts[]
    // }
    console.log(allProducts)
    return(
        <div>
            <div className="search-box row center">
                <input className="search-input" type="text" placeholder="Search..."/>
                <button className="btn-primary search-btn">Search</button>
            </div>
            <div className="row center">
            { allProducts.map((prod)=><ProductCard {...prod}/>)}
                {/* <ProductCard prod = {allProducts[0]}/> */}
            </div>
        </div>
    )
}

export default Catalogue;