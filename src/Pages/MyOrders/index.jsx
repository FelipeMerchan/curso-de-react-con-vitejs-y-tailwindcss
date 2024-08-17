import { Link } from "react-router-dom";

import { Layout } from "../../Components/Layout";
import { OrdersCard } from "../../Components/OrdersCard";
import { useShoppingCart } from "../../hooks/useShoppingCart";

export function MyOrders() {
  const shoppingCartContext = useShoppingCart();

  return (
    <Layout>
      <div className='flex w-80 items-center justify-center relative mb-6'>
        <h1>My Orders</h1>
      </div>
      {
        shoppingCartContext.order.map((order) => (
          <Link key={order.id} to={`/my-orders/${order.id}`}>
            <OrdersCard
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />
          </Link>
        ))
      }
    </Layout>
  )
}
