import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import Notification from "./components/UI/Notification";
import { sendCartData } from "./store/cart-slice";

let isInitial = true;

function App() {
  const showUI = useSelector((x) => x.ui.cartIsVisible);
  const cart = useSelector((x) => x.cart);
  const dispatch = useDispatch();
  const notification = useSelector((x) => x.ui.notification);

  useEffect(() => {
    dispatch(sendCartData(cart));

    if (isInitial) {
      isInitial = false;
    }
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showUI && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
