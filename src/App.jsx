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
              data.filter(data=>data.category==="coffee").map(item=>{
                return <ItemCard name={item.name} img={item.img} key={item.id} sizes={item.sizes} id={item.id}/>
              })
            }
        </div>
        <hr/>
        <h3>Teas</h3>
        <div id="tea-group">
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

export default App
