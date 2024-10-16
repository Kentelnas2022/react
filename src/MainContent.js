import React, { useState } from 'react';
import './App.css'; // Ensure this is importing the combined styles

const MainContent = () => {
  const [rating, setRating] = useState([0, 0, 0, 0]); // Set initial rating for 4 boxes
  const labels = ['Bad', 'Okay', 'Good', 'Very Good', 'Excellent']; // Labels for ratings

  // Array of images for each box
  const images = [
    "/img/ramen.jpg",  // Image for first box
    "/img/unagi.jpg",  // Image for second box
    "/img/yakitori.jpg",  // Image for third box
    "/img/sushi.jpg"  // Image for fourth box
  ];

  // Array of titles for each box
  const titles = [
    "Ramen",     // Title for first box
    "Unagi",     // Title for second box
    "Yakitori",     // Title for third box
    "Sushi"     // Title for fourth box
  ];

  const handleRating = (index, stars) => {
    const newRating = [...rating];
    newRating[index] = stars; // Update the rating for the selected box
    setRating(newRating);
  };

  return (
    <>
      <div className="main-content">
        {rating.map((rate, index) => (
          <div className="box-container" key={index}>
            <div className="box">
              {/* Insert the image for each box */}
              <img src={images[index]} alt={titles[index]} className="box-image" />
            </div>
            <span className="box-label">{titles[index]}</span> {/* Display the title for each box */}
            <div className="stars">
              {[...Array(5)].map((star, i) => {
                const starValue = i + 1;
                return (
                  <span
                    key={i}
                    className={starValue <= rate ? 'star filled' : 'star'}
                    onClick={() => handleRating(index, starValue)}
                  >
                    &#9733; {/* Unicode star symbol */}
                  </span>
                );
              })}
            </div>
            <span className="rating-label">
              {rate > 0 ? labels[rate - 1] : 'No Rating'} {/* Show label based on rating */}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default MainContent;
