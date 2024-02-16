import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";

const StarRating = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating - filledStars >= 0.5;

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < filledStars; i++) {
      stars.push(<StarIcon key={i} />);
    }
    if (hasHalfStar) {
      stars.push(<StarHalfIcon key="half-star" />);
    }
    return stars;
  };

  return <div>{renderStars()}</div>;
};

export default StarRating;
