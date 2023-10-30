// import ReactCardSlider from "react-card-slider-component";
import ReactCardSlider from 'react-card-slider-component';

const CardSlider = () => {
  const slides = [
    {
      image:
        "https://img.freepik.com/free-photo/trendy-top-design-mockup-presented-wooden-hanger_460848-13967.jpg?w=826&t=st=1695885574~exp=1695886174~hmac=270fc690aca23ba8693d732e1e16fb81b5ae81a9ff79183fbd6f2a7809cef563",
      title: "This is a seventh title",
      description: "This is a seventh description",
    },
    {
      image:
        "https://img.freepik.com/free-photo/pretty-red-head-woman-yellow-dress-posing-yellow-summer-mood_273443-4421.jpg?w=1380&t=st=1695885211~exp=1695885811~hmac=943a3ca16139e24435b320418befed6ec8ca233469b9bc95e8c76fb1be80bc2b",
      title: "This is a title",
      description: "This is a description",
    },
    {
      image:
        "https://img.freepik.com/free-photo/model-advertising-fashionable-clothes_132075-14011.jpg?w=740&t=st=1695885305~exp=1695885905~hmac=e0c98cac3b58bbb8a70d58457987c8b92917f3f1020e90518fe3ff83962b91a1",
      title: "This is a second title",
      description: "This is a second description",
    },
    {
      image:
        "https://img.freepik.com/free-photo/graphic-woman-dress-trendy-design-white-background_460848-13623.jpg?w=740&t=st=1695885399~exp=1695885999~hmac=2eb2dd618424a6cf06e239f679032f03fff1406c87af7a1799649631504dd256",
      title: "This is a third title",
      description: "This is a third description",
    },
    {
      image:
        "https://img.freepik.com/free-photo/curly-girl-beautiful-dress_144627-10112.jpg?w=740&t=st=1695885491~exp=1695886091~hmac=774527a05a2b67bf6db9004a54575875e53d1d1c0b2917ec7182f5d66ac52bab",
      title: "This is a fourth title",
      description: "This is a fourth description",
    },
    {
      image:
        "https://img.freepik.com/free-photo/full-size-portrait-charming-asian-female-pretty-maroon-dress-posing-beige-background-with-brilliant-smile-hand-waist_171337-3565.jpg?w=740&t=st=1695885536~exp=1695886136~hmac=c77a9dd9089257b03f1ba0e75f06024fa6938ac88d702a33dd967f9af268f1d4",
      title: "This is a fifth title",
      description: "This is a fifth description",
    },
    {
      image:
        "https://img.freepik.com/free-photo/graphic-tshirt-trendy-design-mockup-presented-wooden-hanger_460848-13983.jpg?w=826&t=st=1695885585~exp=1695886185~hmac=4bbecc727e679e4b6084a40d06d39ae3869afc6b9a0b4fb24bb289a3dc231a30",
      title: "This is a sixth title",
      description: "This is a sixth description",
    },
  ];
  return <ReactCardSlider slides={slides} />;
};

export default CardSlider;
