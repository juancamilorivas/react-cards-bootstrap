import React from "react";
import propTypes from "prop-types";

import "./cards.css";

function Card({ tittle, imageSourse, url, text }) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imageSourse} alt="" className="card-img-top" />
      </div>

      <div className="card-body text-light">
        <h4 className="card-tittle">{tittle}</h4>
        <p className="card-text text-secondary">
          {text
            ? text
            : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo tempora sit qui quaerat maiores fugit neque enim, quis consequuntur nostrum saepe dignissimos quas eaque optio. Id magnam doloribus labore odit!"}
        </p>
        <a
          href={url}
          className="btn btn-outline-secondary rounded-0"
          target="_blank"
          rel="noreferrer"
        >
          Go to this website
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  tittle: propTypes.string.isRequired,
  url: propTypes.string,
  imageSourse: propTypes.string,
  text: propTypes.string,
};

export default Card;
