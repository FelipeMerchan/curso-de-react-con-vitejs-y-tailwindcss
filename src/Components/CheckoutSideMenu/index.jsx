import { XMarkIcon } from '@heroicons/react/24/solid';

import './styles.css';
import { useUi } from '../../hooks/useUi';
import { useShoppingCart } from '../../hooks/useShoppingCart';
import { OrderCard } from '../OrderCard';

export const CheckoutSideMenu = () => {
  /* Aquí no desestructuramos el contexto, como en el resto
  de la aplicación, para escribir el mismo código del curso: */
  const uIContext = useUi();
  const shoppingCartContext = useShoppingCart();

  const handleDelete = (id) => {
    const filteredProducts = shoppingCartContext.cartProducts.filter((cartProduct) => cartProduct.id !== id);
    shoppingCartContext.setCartProducts(filteredProducts);
  }

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
      <div className='px-6 overflow-y-scroll'>
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
    </aside>
  )
}
