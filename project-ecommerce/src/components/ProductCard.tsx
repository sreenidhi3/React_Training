import { FC, useState } from "react"
import "../styles/products.styles.css"
import { ProductType } from "../types/products.types"

const ProductCard:FC<ProductType>=(prod:ProductType)=>{

    const [added, setAdded] = useState<boolean>(false)
    const handleCart=()=>{
        setAdded(!added)
    }
    
    return(
        <div className="product-container">
                <div className="row center"><img className="img" src={prod.image} alt={prod.title}/></div>
                <div>
                    <h3> {prod.title} </h3> 
                    {/* <p> {prod.description.slice(0,100)}... </p> */}
                    <h4> US ${prod.price}</h4>
                    <button onClick={handleCart} className={added ?"btn-added-to-cart":"btn-primary-full"}>{added ? "Remove From Cart" : "Add To Cart"}</button>
                </div>
                {/* title */}
        </div>
    )
}

export default ProductCard