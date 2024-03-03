import "./ProductionBlock.css"

export default function ProductionBlock() {
  
  return (
    <section className="production-section">
        <div className="content-block-container">
            <div className="content-block">
                <div className="heading-combo">
                    <img src="https://media.riverford.co.uk/images/home--amazing-veg-growers.webp" alt=""/>
                    <h3>
                        <span>Fair pay</span>
                        <span>for farmers</span>
                    </h3>
                    <p>As farmers ourselves, we promise a fair deal to all the small-scale growers we work with.</p>
                </div>
            </div>
            <div className="content-block">
                <div className="heading-combo">
                    <img src="https://media.riverford.co.uk/images/home--amazing-veg-flavour.webp" alt=""/>
                    <h3>
                        <span>Grown</span>
                        <span>for flavour</span>
                    </h3>
                    <p>We lovingly grow our veg for the best flavour, not cosmetic perfection - wonky veg is welcome!</p>
                </div>
            </div>
            <div className="content-block">
                <div className="heading-combo">
                    <img src="https://media.riverford.co.uk/images/home--amazing-veg-organic.webp" alt=""/>
                    <h3>
                        <span>Organic</span>
                        <span>and beyond</span>
                    </h3>
                    <p>Farming sustainably is at the heart of all we do, looking after our soil, wildlife, and water sources.</p>
                </div>
            </div>
            <div className="content-block">
                <div className="heading-combo">
                <img src="https://media.riverford.co.uk/images/home--amazing-veg-planet-friendly.webp" alt=""/>
                <h3>
                    <span>Planet-friendly</span>
                    <span>packaging</span>
                </h3>
                <p>All our fruit and veg packaging is paper or home compostable, where packaging is needed at all.</p>
            </div>
            </div>
        </div>
    </section>
  );
}
