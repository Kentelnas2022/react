import React from "react";

function Cards(props) {
  return (
    <div className="card-wrapper">
      <img src={props.url} alt={props.title} width={props.size} height={props.size} />
      <h5>{props.title}</h5>
      <button className="explore-button">Explore</button> 
      <p>⭐⭐⭐⭐⭐</p> 
    </div>
  );
}

export default Cards;
