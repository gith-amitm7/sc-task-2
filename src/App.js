import Slider from "react-slick";
import sliderSettings from "./config/slider-settings";
import imageOne from "assets/one.jpg";
import imageTwo from "assets/two.jpg";
import imageThree from "assets/three.jpg";
import imageFour from "assets/four.png";

const Image = (props) => <img src={props.image} alt={props.caption} />;

function App() {
  return (
    <div id="app">
      <Slider id="slider" {...sliderSettings}>
        <div className="slide">
          <Image image={imageOne} caption={"New York"} />
          <div id="way-1" className="way">
            <h1>New York, United States of America</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Excepteur sint occaecat cupidatat non proident.</p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium
            </p>
            <p>Ut enim ad minima veniam, quis nostrum exercitationem.</p>
            <p>Quis autem vel eum iure reprehenderit qui.</p>
            <p>Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
          </div>
          <h6>Used mix-blend-mode: difference</h6>
        </div>
        <div className="slide">
          <Image image={imageTwo} caption={"Mumbai"} />
          <div id="way-2" className="way">
            {/* I'd go with this preference-wise */}
            <h1>Mumbai, India, Asia</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Excepteur sint occaecat cupidatat non proident.</p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium
            </p>
            <p>Ut enim ad minima veniam, quis nostrum exercitationem.</p>
            <p>Quis autem vel eum iure reprehenderit qui.</p>
            <p>Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
          </div>
          <h6>Used text-shadow css property</h6>
        </div>
        <div className="slide">
          <Image image={imageThree} caption={"Tokyo"} />
          <div id="way-3" className="way">
            <h1>Tokyo, Japan, Asia</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Excepteur sint occaecat cupidatat non proident.</p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium
            </p>
            <p>Ut enim ad minima veniam, quis nostrum exercitationem.</p>
            <p>Quis autem vel eum iure reprehenderit qui.</p>
            <p>Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
          </div>
          <h6>Used semi-transparent background</h6>
        </div>
      </Slider>
      <div className="video-wrapper">
        <iframe
          title="some-unique-title"
          maxwidth="360"
          height="215"
          src="https://www.youtube.com/embed/I7AgBpTbbTA"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default App;
