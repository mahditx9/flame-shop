import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import Products, {
  loader as productsLoader,
} from "./features/shop/products/Products";
import { loader as productLoader } from "./features/shop/product/Product";
import Product from "./features/shop/product/Product";
import UserAuth from "./features/user/UserAuth";
import Cart from "./features/cart/Cart";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "products",
          element: <Products />,
          loader: productsLoader,
        },
        {
          path: "product/:productId",
          element: <Product />,
          loader: productLoader,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        { path: "authentication", element: <UserAuth /> },
      ],
    },
  ]);
  return (
    <div className="bg-black text-[#fff]">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
