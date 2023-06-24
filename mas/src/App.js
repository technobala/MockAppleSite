import Navigation from './Components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Components/Navigation.css";
import "./App.css";
import pbanner from "./images/mac.jpg";
function App() {
  return (
    <div>
      <Navigation/>
      <section className="text-center page-info">Save on Mac or iPad with education pricing. Plus get a gift card up to $150.1 Shop now</section>
      <secton className="banner-primary">
        <div className="pbContent">
          <div class="bannerCaptionWrapper text-center">
            <h2>MacBook Air 15”</h2>
            <h3>Impressively big. Impossibly thin.</h3>
          </div>
          <div class="pbLinks d-flex justify-content-center">
            <a href="about">Learn More &gt;</a>
            <a href="about">Buy &gt;</a>
          </div>
          <div className="pbImageWrapper">
            <img src={pbanner} className="img-fluid" alt="Mac Banner"/>
          </div>
        </div>
        </secton>
    </div>
  );
}

export default App;
