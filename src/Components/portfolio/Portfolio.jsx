import React, { useState } from "react";
import "./portfolio.css";
import Menu from "./Menu";

function Portfolio() {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItem = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });
    setItems(updatedItem);
  };
  return (
    <section className="work container section" id="portfolio">
      <h2 className="section__title">Recent Works</h2>
      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(Menu)}>
          Everything
        </span>
        <span className="work__item" onClick={() => filterItem("React")}>
          React
        </span>
        <span className="work__item" onClick={() => filterItem("PHP")}>
          PHP
        </span>
        <span className="work__item" onClick={() => filterItem("Laravel")}>
          Laravel
        </span>
        <span className="work__item" onClick={() => filterItem("AI")}>
          AI
        </span>
      </div>
      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, category } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>
              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href="#" className="work__button">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
