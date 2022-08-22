import Banner from "../components/Banner";
import "../styles/home.styles.css"

const Home =()=>{
    return(
        <div>
            <Banner/>
            <div className="row center">
                <button style={{margin: "1rem"}} className="row banner-btn center">Shop Now</button>    
            </div>
        </div>
    )
}

export default Home; 