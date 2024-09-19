import{ Routes, Route} from "react-router-dom";
import { Homepage, Login, PageNotFound, ProductDetail, ProductsList, Register } from "../pages";
import { CartPage } from "../pages/Cart/CartPage";

export const Allroutes = () => {
  return (
    <>
    <Routes>
        <Route path="/"  element= { <Homepage/> } />
        <Route path="products" element= { < ProductsList/>}/>
        <Route path="products/:id" element= { < ProductDetail/>}/>

        <Route path="login" element= { < Login/>}/>
        <Route path="register" element= { <Register/>}/>

        <Route path="cart" element= { <CartPage/>}/>

        <Route path="*" element={ <PageNotFound/> } />

    </Routes>
    </>
  )
}
