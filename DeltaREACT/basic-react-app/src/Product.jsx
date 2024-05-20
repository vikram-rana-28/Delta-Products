import "./Product.css";
import Price from "./Price";

function Product({title, idx}){
    let oldPrices = ["12,495", "11,999", "10,355", "599"]
    let newPrices = ["8,999", "9,199", "899", "280"]
    let description =[["8,000 DPI","5 Programable"],
        ["Intuitive Surface","Designed for ipad Pro"],  
        ["wireless", "Opticaloriantation"],
        [ "Designed for ipad Pro" , "5 Programable"]
    ]
        return(
        <div className="Product" >
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice = {oldPrices[idx]} newPrice = {newPrices[idx]}/>
        </div>
    );
}
export default Product;