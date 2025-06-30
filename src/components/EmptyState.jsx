import React from 'react';
import { FaSearchMinus } from 'react-icons/fa';

function EmptyState({ message = "No items found.", suggestion = "Try adjusting your filters or search terms." }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center text-gray-500">
      <FaSearchMinus className="w-20 h-20 text-gray-400 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{message}</h3>
      <p className="text-md">{suggestion}</p>
    </div>
  );
}

export default EmptyState;
