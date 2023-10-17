import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((x) => x.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((cartItems) => (
          <CartItem
            key={cartItems.id}
            item={{
              title: cartItems.name,
              quantity: cartItems.quantity,
              total: cartItems.totalPrice,
              price: cartItems.price,
              id: cartItems.id,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
