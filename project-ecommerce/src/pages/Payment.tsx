import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { checkoutAction } from "../actions/products.actions";
import "../styles/products.styles.css"

const Payment = ()=>{
    const dispatch = useDispatch()

    const handleClick=()=>{
        dispatch(checkoutAction())
    }
    return(
        <div className="p-2">
            <h1 className="text-center">Proceed with Payment</h1>
            <p>Choose one of the following payment options: </p>
            <div className="row">
                <Link to="/success">
                    <div className="option" onClick={handleClick}>
                    COD - Cash on Deliver
                    </div>
                </Link>
                <Link to="/success">
                <div className="option">
                    Online UPI
                </div >
                </Link>
                <Link to="/success">
                <div className="option">
                    Credit Cards
                </div >
                </Link>
                <Link to="/success">
                <div className="option">
                    Debit Cards
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Payment;