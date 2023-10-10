export const fetchProducts = async () => {
  const result = await fetch("https://fakestoreapi.com/products");
  if (!result.ok)
    throw new Error(
      "Fetching Products Failed,Check Your Connection And Try Again!"
    );
  const data = await result.json();
  return data;
};

export const fetchProduct = async (id) => {
  const result = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!result.ok)
    throw new Error(
      "Fetching Product Failed,Check Your Connection And Try Again!"
    );
  const data = await result.json();
  return data;
};
