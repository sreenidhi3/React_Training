import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { RootState } from "../store";
import { ProductType } from "../types/products.types";
import "../styles/products.styles.css"
import { useEffect, useMemo, useState } from "react";



const Catalogue=()=>{

    const {allProducts, allCategories, activeCategory, activeProducts} = useSelector((state: RootState) => state.productReducer);
    const [search, setSearch] = useState<string>("")

    const filteredProducts = useMemo(() =>
    allProducts.filter(
      (prod) =>
        prod.title.toLowerCase().includes(search.toLowerCase())
    ), [allProducts, search])

    return(
        <div>
            <div className="search-box row center no-wrap">
                <input value={search} className="search-input" type="text" onChange={(e)=>setSearch(e.target.value)} placeholder="Search..."/>
                <div className="btn-primary search-btn" style={{backgroundColor: "var(--primary-400)", cursor:"default"}}>Search</div>
            </div>
            <div className="row center">
            { filteredProducts.map((prod)=><ProductCard key={prod.id} {...prod}/>)}
                {/* <ProductCard prod = {allProducts[0]}/> */}
            </div>
        </div>
    )
}

export default Catalogue;