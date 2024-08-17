import { Layout } from "../../Components/Layout";
import { OrderCard } from "../../Components/OrderCard";
import { useShoppingCart } from "../../hooks/useShoppingCart";

export function MyOrder() {
  const shoppingCartContext = useShoppingCart();

  return (
    <Layout>
      My Order
      <div className='flex flex-col w-80'>
        {
          shoppingCartContext.order?.slice(-1)[0].products.map((product) => (
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
