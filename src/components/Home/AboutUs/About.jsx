import "./About.scss";
import SharedComponent from "../../../SharedComponent";

const About = () => {
  return (
    <div className="about">
      <div className="about__desc">
        <h1 className="title">About Us</h1>
        <p className="description">
          we believe that every outfit tells a story. It's not just about the
          fabric and the design; it's about the confidence it brings, the
          memories it creates, and the moments it captures. That's why we're
          passionate about providing you with the finest selection of dresses
          that help you express your unique style and make every occasion
          unforgettable.
        </p>
      </div>
      <div className="wrapper">
        <SharedComponent.Container fixed className="main-container">
          <div className="container">
            <div className="test_box box-01">
              <div className="inner">
                <a href="#" className="test_click">
                  <div className="flex_this">
                    <h1 className="test_title">Men</h1>
                  </div>
                </a>
              </div>
            </div>
            <div className="test_box box-02">
              <div className="inner">
                <a href="#" className="test_click">
                  <div className="flex_this">
                    <h1 className="test_title">Women</h1>
                  </div>
                </a>
              </div>
            </div>
            <div className="test_box box-03">
              <div className="inner">
                <a href="#" className="test_click">
                  <div className="flex_this">
                    <h1 className="test_title">Kids</h1>
                  </div>
                </a>
              </div>
            </div>
            <div className="test_box box-04">
              <div className="inner">
                <a href="#" className="test_click">
                  <div className="flex_this">
                    <h1 className="test_title">Shoes</h1>
                  </div>
                </a>
              </div>
            </div>
            <div className="test_box box-05">
              <div className="inner">
                <a href="#" className="test_click">
                  <div className="flex_this">
                    <h1 className="test_title">Accesories</h1>
                  </div>
                </a>
              </div>
            </div>
            <div className="test_box box-06">
              <div className="inner">
                <a href="#" className="test_click">
                  <div className="flex_this">
                    <h1 className="test_title">Western Outfits</h1>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="explore">
            <h2>Explore Our Styles</h2>
          </div>
        </SharedComponent.Container>
      </div>
    </div>
  );
};

export default About;
