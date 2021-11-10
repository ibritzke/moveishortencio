import React, { useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
// Dados
import Data from "../../service/diversos.json";

//icon and images
import ImageDefault from "../../assets/notImage.jpg";

//css
import "./diversos.css";

export const Diversos = () => {
  const [diversos] = useState(Data.diversos);

  //image default
  const addDefaultSrc = (e) => {
    e.target.src = [ImageDefault];
  };

  return (
    <div className="container">
      <div className="main-header">
        <p className="title">Diversos</p>
        <p className="subtitle">
          {/* Cadeiras fabricadas com alta qualidade, replicas idênticas... */}
        </p>
      </div>
      <div className="main">
        <div className="main-list">
          {diversos.map((diversos, index) => {
            return (
              <>
                <div className="product" key={index}>
                  <Zoom
                    cursor="pointer"
                    overlayBgColorEnd="rgba(0, 0, 0, 0.85)"
                    zoomMargin={50}
                    transitionDuration={1000}
                    openText={diversos.name}
                  >
                    <img
                      cursor="pointer"
                      className="product-img"
                      alt={diversos.name}
                      src={diversos.image}
                      onError={addDefaultSrc}
                    />
                  </Zoom>
                  <p className="product-name">{diversos.name}</p>
                  {diversos.ref === "" ? (
                    ""
                  ) : (
                    <p className="product-name"> Ref:{diversos.ref}</p>
                  )}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
