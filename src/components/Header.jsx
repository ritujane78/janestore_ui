import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingBasket, faTags } from "@fortawesome/free-solid-svg-icons"

function Header() {
  return (
    <div>
      <header className='border-b border-gray-300 sticky top-0 z-20 bg-gray-100'>
        <div className="flex justify-between items-center mx-auto max-w-[1152px] px-6 py-4">
        <a href="/" className='text-center text-lg font-primary font-semibold text-primary py-2'>
            <FontAwesomeIcon icon={faTags} className="h-8 w-8"/>
            <span className="font-bold">Jane Stickers</span>
        </a>
        <nav className='flex items-center py-2 z-10'>
        <ul className="flex space-x-6 ">
            <li>
                <a href="/" className='text-center text-lg font-primary font-semibold text-primary py-2'>
                    Home
                </a>
            </li>
            <li>
                <a href="/about" className='text-center text-lg font-primary font-semibold text-primary py-2'>
                    About
                </a>
            </li>
            <li>
                <a href="/contact" className='text-center text-lg font-primary font-semibold text-primary py-2'>
                    Contact
                </a>
            </li>
            <li>
                <a href="/login" className='text-center text-lg font-primary font-semibold text-primary py-2'>
                    Login
                </a>
            </li>
            <li>
                <a href="/cart" className='text-primary py-2'>
                    <FontAwesomeIcon icon={faShoppingBasket}/>
                </a>
            </li>
        </ul>
        </nav>
    </div>
      </header>
    </div>
  )
}

export default Header
