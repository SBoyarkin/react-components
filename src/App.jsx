import { useState } from 'react'
import './App.css'
import {ShopItemFunc} from "./componets/ShopItemFunc/ShopItemFunc.jsx";
import {ShopItemClass} from "./componets/ShopItemClass/ShopItemClass.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
        <div className="container">
            <div className="background-element">
            </div>
            <div className="highlight-window">
                <div className='highlight-overlay'></div>

            </div>
            <div className="window">
                <ShopItemFunc item={item}  />

            </div>
            <div className="window">
                <ShopItemClass item={item}  />

            </div>
        </div>
        </>
    )
}

export default App

const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£'
}