import { useState } from 'react'
import './App.css'
import PageHeader from './Components/header'
import PageFooter from './Components/footer'

import data from './data'
import ItemCard from './Components/itemCard'




function App() {
  return (
    <>
    <PageHeader/>
    <div name="body" id="body">
        <h3>Coffees</h3>
        <div id="coffee-group">
          {
            data.filter((data) => data.category === "coffee").map(teas=>teas.items.map(item=>{
              return <ItemCard name={item.name} img={item.img} key={item.key} sizes={item.sizes}/>
            }))
            
            }
        </div>
        <hr/>
        <h3>Teas</h3>
        <div id="tea-group">
          {
              data.filter((data) => data.category === "tea").map(teas=>teas.items.map(item=>{
                return <ItemCard name={item.name} img={item.img} key={item.key} sizes={item.sizes}/>
              }))
            
            }

            {/* <div className="item-card">
                <img src="images/Matcha Frappe.jpg" alt=""/>
                <p className="item-name">Matcha Frappe</p>
                <p className="item-price">P 150.00</p>
                <button className="add-to-cart-btn">Add to Cart</button>
            </div>
            <div className="item-card">
                <img src="images/Butterfly Pea.jpg" alt=""/>
                <p className="item-name">Butterfly Pea Frappe</p>
                <p className="item-price">P 80.00</p>
                <button className="add-to-cart-btn">Add to Cart</button>
            </div>
            <div className="item-card">
                <img src="images/HIbiscus.jpg" alt=""/>
                <p className="item-name">Hibiscus Frappe</p>
                <p className="item-price">P 80.00</p>
                <button className="add-to-cart-btn">Add to Cart</button>
            </div> */}
        </div>
    </div>
    <PageFooter/>
    </>
  )
}

export default App
