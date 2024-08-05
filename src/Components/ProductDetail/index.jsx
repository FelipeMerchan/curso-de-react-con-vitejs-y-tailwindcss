import { XMarkIcon } from '@heroicons/react/24/solid';

import './styles.css';
import { useUi } from '../../hooks/useUi';
import { useShoppingCart } from '../../hooks/useShoppingCart';

export const ProductDetail = () => {
  const { productToShow } = useShoppingCart();
  const { isProductDetailOpen, closeProductDetail } = useUi();

  return (
    <aside
      className={`${isProductDetailOpen ? 'flex': 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className='font-medium text-xl'>Detail</h2>
        <button className='cursor-pointer' onClick={closeProductDetail}>
          <XMarkIcon className='h-6 w-6 text-black' />
        </button>
      </div>
      <figure className='px-6'>
        <img
          className='w-full h-full rounded-lg'
          src={productToShow.image}
          alt={productToShow.title}
        />
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl mb-2'>${productToShow.price}</span>
        <span className='font-medium text-md'>${productToShow.title}</span>
        <span className='font-light text-sm'>${productToShow.description}</span>
      </p>
    </aside>
  )
}
