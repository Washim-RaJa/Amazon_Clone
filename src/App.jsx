import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Checkout, HomePage, NavBar, ProductPage, SearchResults } from "./components"
import Footer from "./components/Footer"

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>  
        <Route path="/search" element={<SearchResults/>}/>  
        <Route path="/product/:id" element={<ProductPage/>}/>  
        <Route path="/checkout" element={<Checkout/>}/>  
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
