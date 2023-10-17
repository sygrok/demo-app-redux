import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { uiActions } from "../../store/ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const badge = useSelector((x) => x.cart.totalQuantity);

  return (
    <button
      className={classes.button}
      onClick={() => dispatch(uiActions.toggle())}
    >
      <span>My Cart</span>
      <span className={classes.badge}>{badge}</span>
    </button>
  );
};

export default CartButton;
