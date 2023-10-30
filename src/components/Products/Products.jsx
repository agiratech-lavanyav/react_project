import Card from "../../ReusableComponents/Card";
import SharedComponent from "../../SharedComponent";
import prod from "./products";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../Redux/Actions";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated
  );
  const navigateToSignUp = () => {
    navigate("/sign-up");
  };

  const addToCart = (product) => {
    if (isAuthenticated) {
      if (JSON.parse(localStorage.getItem("cart")) != null) {
        let cartItems = JSON.parse(localStorage.getItem("cart"));
        cartItems.items.push(product);
        //localStorage.setItem("cart", JSON.stringify(cartItems));
        console.log(cartItems, "items");
        dispatch(addProductToCart(product));
      } else {
        
        dispatch(addProductToCart(product));
        //localStorage.setItem("cart", JSON.stringify([product]));
      }
      //dispatch(addProductToCart(product));
    } else {
      navigateToSignUp();
    }
  };

  return (
    <div>
      <SharedComponent.Container fixed>
        <h2>Clothes</h2>
        <SharedComponent.Grid container spacing={4} sx={{ margin: 0 }}>
          {prod.clothes.map((product) => (
            <SharedComponent.Grid item>
              <Card
                key={product.id}
                imageUrl={product.imageUrl}
                name={product.name}
                price={product.price}
                buttonText="Add To Cart"
                onButtonClick={() => addToCart(product)}
              />
            </SharedComponent.Grid>
          ))}
        </SharedComponent.Grid>
      </SharedComponent.Container>
      <SharedComponent.Divider></SharedComponent.Divider>
      <SharedComponent.Container fixed>
        <h2>Accessories</h2>
        <SharedComponent.Grid container spacing={4} sx={{ margin: 0 }}>
          {prod.accessories.map((product) => (
            <SharedComponent.Grid item>
              <Card
                key={product.id}
                imageUrl={product.imageUrl}
                name={product.name}
                price={product.price}
                buttonText="Add To Cart"
                onButtonClick={() => addToCart(product)}
              />
            </SharedComponent.Grid>
          ))}
        </SharedComponent.Grid>
      </SharedComponent.Container>
    </div>
  );
};

export default Products;
