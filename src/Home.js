import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/08/digital/video/gateway/placement/launch/BrutusvsCesar/BRUCE_2020_GWBleedingHero_COVIDUPDATE_FT_XSite_1500x600_PV_fr-FR._CB402694762_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="515"
          title='Xiaomi BHR4269GL écran Plat de PC 86,4 cm (34") 3440 x 1440 Pixels WQHD Noir BHR4269GL, 86,4 cm (34"), 3440 x 1440 Pixels, WQHD, 4 ms, Noir'
          price={499.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/71HPLtoRFpL._AC_UL320_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123211341"
          title="Playstation 5: Standard Edition"
          price={499.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/61AyKaKa4TL._AC_UL320_.jpg"
        />
        <Product
          id="325151"
          title="Famgizmo Rafraichisseur d'air, Air Cooler Ventilateur, Refroidisseur, Humidificateur, 4 en 1, 3 Vitesses de Vent, 400m³/h, 75W, Réservoir d'eau de 4L, Filtres à air, Oscillation Horizontale, Mobile"
          price={49.99}
          rating={3}
          image="https://m.media-amazon.com/images/I/71KxU0C0ArL._AC_UL320_.jpg"
        />
        <Product
          id="22115"
          title="Harry Potter Children's Collection (Anglais) Broché – 1 octobre 2014"
          price={50.86}
          rating={4}
          image="https://m.media-amazon.com/images/I/71rOzy4cyAL._AC_UL320_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="144222"
          title='Nouvel Apple MacBook Pro (16 Pouces, 16Go RAM, 512Go de Stockage) - Gris sidéral'
          price={2449.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/71L2iBSyyOL._AC_UL320_.jpg"
        />
        <Product
          id="1"
          title='BERING Mixte Analogique Quartz Montre avec Bracelet en Silicone 16940-499'
          price={78.89}
          rating={2}
          image="https://m.media-amazon.com/images/I/61Aijbw9NiL._AC_UL320_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
