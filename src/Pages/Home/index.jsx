import { Card } from "../../Components/Card";
import { Layout } from "../../Components/Layout";
import { ProductDetail } from "../../Components/ProductDetail";
import { useProducts } from "../../hooks/useProducts";

export function Home() {
  const { items, loading, error } = useProducts();

  return (
    <Layout>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
          items.map((item) => (
            <Card key={item.id} data={item} />
          ))
        }
      </div>
      {loading ? <p>Cargando...</p>: null}
      {error ? <p>Hubo un error, intenta de nuevo</p> : null}
      <ProductDetail />
    </Layout>
  )
}
