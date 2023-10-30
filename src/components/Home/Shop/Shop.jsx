import "./Shop.scss";
import SharedComponent from "../../../SharedComponent";

const Shop = () => {
  return (
    <SharedComponent.Container fixed>
      <div className="shopDeals">
        <div className="shopDeals__left">
          <h2 className="shopDeals__left__title">
            Discover Your Signature Style With Us
          </h2>
          <SharedComponent.Button variant="contained" size="large">
            Shop Now
          </SharedComponent.Button>
        </div>
        <div className="shopDeals__right">
          {/* <img src={Woman} alt="woman" /> */}
        </div>
      </div>
    </SharedComponent.Container>
  );
};

export default Shop;
