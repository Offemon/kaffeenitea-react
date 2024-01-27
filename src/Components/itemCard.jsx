import { Link } from "react-router-dom";

const ItemCard = (props) => {
    return (
        <div className="item-card">
            {/* <a href="item_page.html"><img src="images/Mocha Frappe.jpg" alt=""/></a> */}
            <img src={props.img}/>
            <p className="item-name">{props.name}</p>
            <p className="item-price">P {props.sizes.demi}</p>
            {/* <Link to="/itemdetails/:id"><button className="add-to-cart-btn">View</button></Link>
             */}
             <Link to={`/itemdetails/${props.id}`}><button className="add-to-cart-btn">View</button></Link>
        </div>
    )
}

export default ItemCard;

// , state:{name: props.name, img: props.img}