import { Card } from "../../Components/Card";
import { Layout } from "../../Components/Layout";
import { ProductDetail } from "../../Components/ProductDetail";
import { useShoppingCart } from "../../hooks/useShoppingCart";

export function Home() {
  const { items, getProductsLoading, getProductsError, search, setSearch } =  useShoppingCart();

  const handleChange = (event) => {
    const newQuery = event.target.value;
    setSearch(newQuery);
  }

  return (
    <Layout>
      <input
        className="rounded-lg border border-black w-80 p-4 mb-6"
        onChange={handleChange}
        type='text'
        placeholder='Search a product'
        value={search}
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
          items.map((item) => (
            <Card key={item.id} data={item} />
          ))
        }
      </div>
      {getProductsLoading ? <p>Cargando...</p>: null}
      {getProductsError ? <p>Hubo un error, intenta de nuevo</p> : null}
      <ProductDetail />
    </Layout>
  )
}
