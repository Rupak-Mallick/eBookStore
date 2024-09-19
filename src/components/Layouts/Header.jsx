import { Link } from "react-router-dom"
import Logo from "../../assets/logo.png"
import { useEffect, useState } from "react"
import { Search } from "../Sections/Search";
import { DropdownLoggedOut, DropdownLoggedIn } from "../index";
import { useCart } from "../../Context";

export const Header = () => {
    const { cartList } = useCart();
    const [dark, setDark] = useState( JSON.parse(localStorage.getItem("dark"))|| false);
    const [ searchSection, setSearchSection ] = useState(false);
    const [ dropdown, setDropdown] = useState(false);
    useEffect( () => {

    },[])

    useEffect(() => {
      localStorage.setItem("dark", JSON.stringify(dark));
        if(dark){
            document.documentElement.classList.add("dark");
        } else{
          document.documentElement.classList.remove("dark");
        }
    },[dark])


  return (
        <header>
                <nav className="bg-white border-gray-200 dark:bg-gray-900">
                  <div className="flex flex-wrap justify-between items-center mx-20  p-4">
                      <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                          <img src= {Logo} className="h-8" alt="eBookStore Logo" />
                          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">eBookStore</span>
                      </Link>
                      <div className="sm:flex sm:items-center sm:space-x-6 sm:rtl:space-x-reverse hidden">
                          <span onClick={() => setDark(!dark) } className="cursor-pointer text-xl text-gray-700 dark:text-white  bi bi-gear-wide-connected"></span>
                          <span onClick={()=> setSearchSection(!searchSection)} className="cursor-pointer text-xl text-gray-700 dark:text-white  bi bi-search"></span>
                          <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
                              <span className="text-2xl bi bi-cart-fill relative">
                                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full">{cartList.length}</span>
                              </span>
                          </Link>
                          <span onClick={() => setDropdown(!dropdown)} className="cursor-pointer text-xl text-gray-700 dark:text-white  bi bi-person-circle"></span>
                          { dropdown && <DropdownLoggedOut/>}
                      </div>
                  </div>
              </nav>
              { searchSection && <Search setSearchSection={setSearchSection}/> }
              
        </header>
  )
}

