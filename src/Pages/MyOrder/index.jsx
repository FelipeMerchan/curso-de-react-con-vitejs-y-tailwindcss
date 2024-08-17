import { Link, useParams } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

import { Layout } from "../../Components/Layout";
import { OrderCard } from "../../Components/OrderCard";
import { useShoppingCart } from "../../hooks/useShoppingCart";

export function MyOrder() {
  const shoppingCartContext = useShoppingCart();
  const params = useParams();
  let order = shoppingCartContext.order[shoppingCartContext.order.length - 1];

  if (params?.id) {
    order = shoppingCartContext.order?.find((order) => order.id === params.id);
  }

  return (
    <Layout>
      <div className='flex w-80 items-center justify-center relative mb-6'>
        <Link to={'/my-orders'} className="absolute left-0">
          <ChevronLeftIcon className='h-6 w-6 text-black' />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className='flex flex-col w-80'>
        {
          order.products.map((product) => (
            <OrderCard
              key={product.id}
              id={product.id}
              imageUrl={product.image}
              price={product.price}
              title={product.title}
            />
          ))
        }
      </div>
    </Layout>
  )
}
