/* eslint-disable react/prop-types */
import { TrashIcon } from '@heroicons/react/24/outline';


export const OrdersCard = props => {
  const { totalPrice, totalProducts } = props;

  return (
    <div className='flex justify-between items-center mb-3 border border-black'>
      <p>
        <span>01.02.23</span>
        <span>{totalProducts}</span>
        <span>{totalPrice}</span>
      </p>
    </div>
  )
}
