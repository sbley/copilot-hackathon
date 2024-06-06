import { useState } from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import CoffeeTimer from "./components/CoffeeTimer.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Header />
            <CoffeeTimer />
            <Footer />
        </>
    )
}

export default App
