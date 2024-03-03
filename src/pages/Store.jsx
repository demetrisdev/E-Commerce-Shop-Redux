import Cart from '../components/Cart.jsx';
import Checkout from '../components/Checkout.jsx';
import Header from '../components/Header.jsx';
import Meals from '../components/Meals.jsx';
import Footer from "../components/Footer.jsx"
import { CartContextProvider } from '../store/CartContext.jsx';
import { UserProgressContextProvider } from '../store/UserProgressContext.jsx';

function Store() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
        <Footer />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default Store;
