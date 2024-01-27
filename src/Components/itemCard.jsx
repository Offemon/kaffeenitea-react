const ItemCard = (props) => {
    return (
        <div className="item-card">
            {/* <a href="item_page.html"><img src="images/Mocha Frappe.jpg" alt=""/></a> */}
            <img src={props.img}/>
            <p className="item-name">{props.name}</p>
            <p className="item-price">P {props.sizes[0].value}</p>
            <button className="add-to-cart-btn">Add to Cart</button>
        </div>
    )
}

export default ItemCard;