import React from 'react';
import RatingStars from './RatingStars';

function TestimonialCard({ name, rating, comment }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
      <RatingStars rating={rating} />
      <h4 className="text-lg font-semibold mt-3 text-gray-800">{name}</h4>
      <p className="text-gray-900 mt-2 italic">"{comment}"</p>
    </div>
  );
}

export default TestimonialCard;
