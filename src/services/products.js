export const getProducts = () => {
  return fetch('https://api.escuelajs.co/api/v1/products')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error ${response.status}`)
      }

      return response.json();
    })
    .then((data) => {
      const mappedProducts = data.map((product) => ({
        category: product.category.name ?? '',
        description: product.description ?? '',
        id: product.id ?? '',
        image: product.images[0] ?? '',
        price: product.price ?? 0,
        title: product.title ?? '',
      }));

      return mappedProducts;
    })
    .catch(() => {
      throw new Error('Products could not be obtained')
    })
}