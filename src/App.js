import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const showUI = useSelector((x) => x.ui.cartIsVisible);

  return (
    <Layout>
      {showUI && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
