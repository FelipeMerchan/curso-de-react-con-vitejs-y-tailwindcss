import { XMarkIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

import './styles.css';
import { useUi } from '../../hooks/useUi';
import { useShoppingCart } from '../../hooks/useShoppingCart';
import { OrderCard } from '../OrderCard';
import { totalPrice } from '../../utils';

export const CheckoutSideMenu = () => {
  /* Aquí no desestructuramos el contexto, como en el resto
  de la aplicación, para escribir el mismo código del curso: */
  const uIContext = useUi();
  const shoppingCartContext = useShoppingCart();

  const handleDelete = (id) => {
    const filteredProducts = shoppingCartContext.cartProducts.filter((cartProduct) => cartProduct.id !== id);
    shoppingCartContext.setCartProducts(filteredProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: '01.02.23',
      id: crypto.randomUUID(),
      products: shoppingCartContext.cartProducts,
      totalPrice: totalPrice(shoppingCartContext.cartProducts),
      totalProducts: shoppingCartContext.cartProducts.length,
    };

    shoppingCartContext.setOrder([...shoppingCartContext.order, orderToAdd]);
    shoppingCartContext.setCartProducts([]);
  };

  return (
    <aside
      className={`${uIContext.isCheckoutSideMenuOpen ? 'flex': 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className='font-medium text-xl'>My Order</h2>
        <button className='cursor-pointer' onClick={uIContext.closeCheckoutSideMenu}>
          <XMarkIcon className='h-6 w-6 text-black' />
        </button>
      </div>
      <div className='px-6 overflow-y-scroll flex-1'>
        {
          shoppingCartContext.cartProducts.map((product) => (
            <OrderCard
              key={product.id}
              id={product.id}
              imageUrl={product.image}
              price={product.price}
              title={product.title}
              handleDelete={handleDelete}
            />
          ))
        }
      </div>
      <div className='px-6 mb-4'>
        <p className='flex justify-between items-center'>
          <span className='font-light'>Total:</span>
          <span className='font-medium text-2xl'>${totalPrice(shoppingCartContext.cartProducts)}</span>
        </p>
        <Link to='/my-orders/last'>
          <button className='w-full bg-black py-3 text-white my-2 rounded-lg' onClick={() => handleCheckout()}>Checkout</button>
        </Link>
      </div>
    </aside>
  )
}
