import PageFooter from "../Components/footer"
import PageHeader from "../Components/header"
import { useEffect, useState } from "react"
import ItemCard from "../Components/itemCard"
import data from "../data"
import { useParams } from "react-router-dom"
import './itemdetails.css'
const ItemDetailsPage = () => {
    const params = useParams()
    // const item = data.find(item=>data.id === params)
    const item = data.find(item=>item.id == params.id)
    const [qty, setQty] = useState(1)
    const [size,setSize] = useState("demi")
    const [basePrice, setBasePrice] = useState(item.sizes.demi)
    const [finalPrice,setFinalPrice] = useState(qty*basePrice)

    useEffect(()=>{
        switch(size){
            case "demi":
                setBasePrice(item.sizes.demi);
                break;
            case "short":
                setBasePrice(item.sizes.short);
                break;
            case "tall":
                setBasePrice(item.sizes.tall);
                break;
            case "grande":
                setBasePrice(item.sizes.grande);
                break;
            case "venti":
                setBasePrice(item.sizes.venti);
                break;
            case "trenta":
                setBasePrice(item.sizes.trenta);
                break;
        }
        setFinalPrice(basePrice*qty)
    },[size,qty,basePrice])

    const handleIncrement = ()=>{
        setQty(prevQty => prevQty+1)
    }

    const handleDecrement = ()=>{
        if(qty>0){
            setQty(prevQty => prevQty-1)
        }
    }

    const handleDropDown = (e) =>{
        const sizeDD = (e.target.value).toLowerCase()
        setSize(sizeDD)
    }
    return (
        <>
            <PageHeader/>
                <div name="body" id="body">
                    <div id="item-order-detail">
                        <div id="item-photo">
                            <img src={item.img} alt="Mocha Frappe" id="item-preview"/>
                        </div>
                        <div id="item-purch-detail-container">
                            <h2>{item.name}</h2>
                            <p id="curr-price">{finalPrice}</p>
                            <div id="item-purch-details">
                                <div id="item-actions-container">
                                    <label htmlFor="size" id="size-label">Size</label>
                                        <select name="size" id="size" onChange={(e)=>handleDropDown(e)}>
                                            <option value="Demi">Demi</option>
                                            <option value="Short">Short</option>
                                            <option value="Tall">Tall</option>
                                            <option value="Grande">Grande</option>
                                            <option value="Venti">Venti</option>
                                            <option value="Trenta">Trenta</option>
                                        </select>
                                    <label htmlFor="qty" id="qty">Quantity</label>
                                    <div id="dec-inc-qty-container">
                                        <button id="dec-qty" onClick={()=>handleDecrement()}>-</button>
                                        <span id="item-amount">{qty}</span>
                                        <button id="inc-qty" onClick={()=>handleIncrement()}>+</button>
                                    </div>
                                    <div id="add-buy-button-container">
                                        <button id="add-to-cart-btn">Add to Cart</button>
                                        <button id="buy-btn">Buy</button>
                                    </div>
                                </div>
                                <div id="item-desc-container">
                                    <h3 id="item-desc-header">{item.name}</h3>
                                    <p id="item-desc">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <h3>Teas</h3>
                    <div id="reco-container">
                    {
                        data.filter(data=>data.category==="tea").map(item=>{
                            return <ItemCard name={item.name} img={item.img} key={item.id} sizes={item.sizes} id={item.id}/>
                        })
                    }
                    </div>
                </div>
            <PageFooter/>
        </>
    )
}

export default ItemDetailsPage;