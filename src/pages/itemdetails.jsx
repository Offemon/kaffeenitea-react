import PageFooter from "../Components/footer"
import PageHeader from "../Components/header"

import ItemCard from "../Components/itemCard"
import data from "../data"
const ItemDetailsPage = () => {
    return (
        <>
            <PageHeader/>
                <div name="body" id="body">
                    <div id="item-order-detail">
                        <div id="item-photo">
                            <img src="images/Mocha Frappe.jpg" alt="Mocha Frappe" id="item-preview"/>
                        </div>
                        <div id="item-purch-detail-container">
                            <h2>Mocha Frappe</h2>
                            <p id="curr-price">50.00</p>
                            <div id="item-purch-details">
                                <div id="item-actions-container">
                                    <label htmlFor="size" id="size-label">Size</label>
                                        <select name="size" id="size">
                                            <option value="Demi">Demi</option>
                                            <option value="Short">Short</option>
                                            <option value="Tall">Tall</option>
                                            <option value="Grande">Grande</option>
                                            <option value="Venti">Venti</option>
                                            <option value="Trenta">Trenta</option>
                                        </select>
                                    <label htmlFor="qty" id="qty">Quantity</label>
                                    <div id="dec-inc-qty-container">
                                        <button id="dec-qty">-</button>
                                        <span id="item-amount">1</span>
                                        <button id="inc-qty">+</button>
                                    </div>
                                    <div id="add-buy-button-container">
                                        <button id="add-to-cart-btn">Add to Cart</button>
                                        <button id="buy-btn">Buy</button>
                                    </div>
                                </div>
                                <div id="item-desc-container">
                                    <h3 id="item-desc-header">Mocha Frappe</h3>
                                    <p id="item-desc">A balanced mix of Arabica Coffee, Belgian Chocolate, and Vanilla.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <h3>Teas</h3>
                    <div id="reco-container">
                    {
                        data.filter((data) => data.category === "tea").map(teas=>teas.items.map(item=>{
                            return <ItemCard name={item.name} img={item.img} key={item.key} sizes={item.sizes}/>
                        }))
                    }
                    </div>
                </div>
            <PageFooter/>
        </>
    )
}

export default ItemDetailsPage;