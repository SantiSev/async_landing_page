import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import print_1 from '../assets/prints/print_1.jpg';
import print_2 from '../assets/prints/print_2.jpg';
import print_3 from '../assets/prints/print_3.jpg';
import print_4 from '../assets/prints/print_4.jpg';
import print_5 from '../assets/prints/print_5.jpg';
import print_6 from '../assets/prints/print_6.jpg';
import print_7 from '../assets/prints/print_7.jpg';
import print_8 from '../assets/prints/print_8.jpg';

function SimpleSlider() {

  const images = [print_1, print_2, print_3, print_4, print_5, print_6, print_7, print_8];

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    cssEase: "linear",
    pauseOnHover: false,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              className="w-full xl:h-96 h-48 object-cover transition-all transform ease-in-out duration-500 mx-auto rounded-3xl shadow-black shadow-lg hover:shadow-md  scale-90 hover:scale-100"
              src={image}
              alt={`print_${index}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
