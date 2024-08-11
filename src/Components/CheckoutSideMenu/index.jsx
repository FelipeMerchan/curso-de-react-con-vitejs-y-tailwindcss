import { XMarkIcon } from '@heroicons/react/24/solid';

import './styles.css';
import { useUi } from '../../hooks/useUi';

export const CheckoutSideMenu = () => {
  /* Aquí no desestructuramos el contexto, como en el resto
  de la aplicación, para escribir el mismo código del curso: */
  const context = useUi();

  return (
    <aside
      className={`${context.isCheckoutSideMenuOpen ? 'flex': 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className='font-medium text-xl'>My Order</h2>
        <button className='cursor-pointer' onClick={context.closeCheckoutSideMenu}>
          <XMarkIcon className='h-6 w-6 text-black' />
        </button>
      </div>
    </aside>
  )
}
