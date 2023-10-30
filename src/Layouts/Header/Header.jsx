import Navigation from "./Navigation";
import "./Header.scss";
import Logo from "../../assets/closet.png";
import SharedComponent from "../../SharedComponent";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const StyledBadge = styled(SharedComponent.Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 5,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    backgroundColor: "var(--primary-color)",
  },
}));

const Header = () => {
  const isLoggedIn = useSelector((state) => state.authReducer.isAuthenticated);
  const noOfProductsInCart = useSelector((state) => state.cartReducer.cart.items.length);
  const navigate = useNavigate();
  const navigateToSignUp = () => {
    navigate("/sign-up");
  };
  const navigateToCart = () => {
    navigate("/cart");
  }
  return (
    <div className="header-container">
      <SharedComponent.Container fixed>
        <div className="header">
          <div className="header__left">
            <div className="header__left__logo">
              <img
                className="header__left__logo--image"
                src={Logo}
                alt="Logo"
              ></img>
            </div>
            <div className="header__left__navItems">
              <Navigation />
            </div>
          </div>
          <div className="header__right">
            {isLoggedIn ? (
              <span className="header__right__userLogo">
                {/* <h1>{username}</h1> */}
              </span>
            ) : (
              <SharedComponent.Button
                variant="contained"
                onClick={navigateToSignUp}
              >
                Sign Up
              </SharedComponent.Button>
            )}
            <SharedComponent.IconButton aria-label="cart" onClick={navigateToCart}>
              <StyledBadge badgeContent={noOfProductsInCart} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </SharedComponent.IconButton>
          </div>
        </div>
      </SharedComponent.Container>
    </div>
  );
};

export default Header;
