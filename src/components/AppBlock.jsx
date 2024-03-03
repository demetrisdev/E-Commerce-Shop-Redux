import "./AppBlock.css"
import fakeQr from "../assets/fake-qr.jpg"

export default function AppBlock() {
  
  return (
    <section className="app-section">
        <div className="app-links-text">
            <div className="app-links-title-container">
                <div><h1>Download our easy</h1></div>
                <div><h1>ordering app!</h1></div>
            </div>
            <p>
                Free to use, our easy order app is the fastest way to buy seasonal organic veg. 
                Brilliantly designed with our customers in mind, it makes managing your order simple.
            </p>
            <div className="app-links-link-container">
                <img src={fakeQr} alt="QR code containing a link to download our app from either the Google Play Store or Apple App Store." />
                <div>
                    <a href="/">
                        <img src="https://media.riverford.co.uk/images/home--app-store-badge.webp" alt="Apple App Store badge inviting users to download app in the Apple App Store"/>
                    </a>
                    <a href="/">
                        <img src="https://media.riverford.co.uk/images/home--google-play-badge.webp" alt="Google Play Store badge inviting users to download the app in the Google Play Store"/>
                    </a>
                </div>
            </div>
        </div>
    </section>
  );
}
