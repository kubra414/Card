/* eslint-disable react/prop-types */
import React from "react";

function Course({ title, description, image }) {
  return (
    <article className="message is-dark">
      <figure className="image is-4by3">
        <img src={image} alt="Kurslarım" />
      </figure>
      <article className="message is-link">
        <div className="message-header">
          <p>{title}</p>
        </div>
        <div className="message-body">{description}</div>
      </article>
    </article>
  );
}

export default Course;
