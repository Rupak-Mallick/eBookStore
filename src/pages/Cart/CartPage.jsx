import { useTitle } from "../../hooks/useTitle";
import { CartEmpty } from "./components/CartEmpty";
import { CartList } from "./components/CartList";
import { useCart } from "../../Context/CartContext";

export const CartPage = () => {
    const { cartList } = useCart();
    useTitle(`Cart (${cartList.length })`);


  return (
    <main>
        { cartList.length ? <CartList/> : <CartEmpty/>   }
    </main>
  )
}
