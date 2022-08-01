import React from 'react';

interface Props {
    prodName: string;
    category: string;
    price: number;
}
const MyComponent:React.FC<Props> =(props)=>{
    const {prodName, category, price} = props
 return(
    <div style={{border:"1px solid"}}>
        <p>{`Product:  ${prodName}`}</p>
        <p>{`Category: ${category}`}</p>
        <p>{`Price: Rs ${price}`}</p>
    </div>
 ) 
}

export default MyComponent