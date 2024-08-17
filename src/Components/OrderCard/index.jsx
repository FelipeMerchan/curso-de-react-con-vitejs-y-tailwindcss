/* eslint-disable react/prop-types */
import { TrashIcon } from '@heroicons/react/24/outline';

export const OrderCard = props => {
  const { id, title, imageUrl, price, handleDelete } = props;
  let renderXMarkIcon;

  if (handleDelete) {
    renderXMarkIcon = (
      <button onClick={() => handleDelete(id)}>
        <TrashIcon className='h-6 w-6 text-black cursor-pointer' />
      </button>
    )
  }

  return (
    <div className='flex justify-between items-center mb-3'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20 flex-shrink-0'>
          <img
            className='w-full h-full rounded-lg object-cover'
            src={imageUrl}
            alt={title}
          />
        </figure>
        <p className='text-sm font-light'>{title}</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>${price}</p>
        {renderXMarkIcon}
      </div>
    </div>
  )
}
