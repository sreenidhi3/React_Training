import { render } from "@testing-library/react";

const NavBar = ()=>{
    return(
        <nav>
            <div className="brand-logo">
                <h3>Store</h3>
            </div>
            <div className="nav-links">
                <div className="nav-link">
                    NavLink
                </div>
            </div>
        </nav>
    )
}

export default NavBar;