import { useContext } from 'react';

import Button from './UI/Button.jsx';
import logoImg from '../assets/logo.jpg';

import CartContext from '../store/CartContext.jsx';
import UserProgressContext from '../store/UserProgressContext.jsx';
import "./Header.css"

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const isHomePage = window.location.pathname === '/';
  const isProductPage = window.location.pathname === '/store';

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <a href='/'><h1>BioLaden</h1></a>
      </div>
      <nav>
        <div className='links-container'>
          <a href='/' className='nav-links'>home</a>
          <a href='/store' className='nav-links'>products</a>
        </div>
        {!isProductPage &&
          <Button textOnly className="display">
            <a href='/store'>Products</a>
          </Button>
        }

        {!isHomePage &&
          <Button textOnly onClick={handleShowCart}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M17 17h-11v-14h-2"></path>
              <path d="M6 5l14 1l-1 7h-13"></path>
            </svg>
            ({totalCartItems})
          </Button>
        }

      </nav>
    </header>
  );
}
