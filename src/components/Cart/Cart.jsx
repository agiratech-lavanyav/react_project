import "./Cart.scss";
import SharedComponent from "../../SharedComponent";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeProductFromCart } from "../../Redux/Actions";
import { removeAllFromCart } from "../../Redux/Actions";
import { useNavigate } from "react-router-dom";
import EmptyCart from "../../assets/empty-cart.png";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartReducer.cart.items);
  const cartTotal = useSelector((state) => state.cartReducer.cart.total);
  const navigateToProducts = () => {
    navigate("/products");
  };

  const removeFromCart = (product) => {
    const index = cartItems.findIndex((item) => item.id === product.id);
    cartItems.splice(index, 1);
    dispatch(removeProductFromCart(cartItems, product.price));
  };

  const removeAllFromCarts = () => {
    dispatch(removeAllFromCart());
  };
  return (
    <SharedComponent.Container fixed className="cartItems">
      {cartItems.length === 0 ? (
        <div className="cartItems__ifEmpty">
          <img className="img" src={EmptyCart} alt="Empty Cart"></img>
          <h2>Your Cart is Empty</h2>
          <SharedComponent.Button onClick={navigateToProducts}>
            Shop Now
          </SharedComponent.Button>
        </div>
      ) : (
        <div>
          <SharedComponent.Button onClick={() => removeAllFromCarts()}>
            Remove All
          </SharedComponent.Button>
          {cartItems.map((item) => (
            <div
              fixed
              className="cartItems__container"
              key={item.id}
            >
              <div>
                <img
                  className="cartItems__container__image"
                  src={item.imageUrl}
                  alt="img"
                ></img>
              </div>
              <div>
                <h3>{item.name}</h3>
                <h4>Rs. {item.price}</h4>
                <SharedComponent.Button onClick={() => removeFromCart(item)}>
                  Remove
                </SharedComponent.Button>
              </div>
            </div>
          ))}
        </div>
      )}
      {cartItems.length !== 0 && <p className="cartTotal"><strong>Total  </strong>  Rs. {cartTotal}</p>} 
    </SharedComponent.Container>
  );
};

export default Cart;
