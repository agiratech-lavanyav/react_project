import "./Banner.scss";
import BannerGirl from "../../../assets/banner-girl.png";
import SharedComponent from "../../../SharedComponent";

const Banner = () => {
  return (
    <div className="home-banner">
      <SharedComponent.Container fixed>
        <div className="banner">
          <div className="banner__left">
            <h1 className="banner__left--title title">Fashion <span className="highlight">New</span> Collection</h1>
            <p className="banner__left--description description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
              facere ratione perferendis in asperiores rem esse, reprehenderit
              illo? Quod, nemo?
            </p>
            <SharedComponent.Button variant="contained" size="large">Shop Now</SharedComponent.Button>
          </div>
          <div className="banner__right">
            <img
              className="banner__right--image"
              src={BannerGirl}
              alt="Banner girl"
            ></img>
          </div>
        </div>
      </SharedComponent.Container>
    </div>
  );
};

export default Banner;
