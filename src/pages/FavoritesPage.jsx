import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card';
import EmptyState from '../components/EmptyState';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function FavoritesPage() {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div className="w-full min-h-screen bg-gray-100">
      <Nav />
      <div className="max-w-6xl mx-auto py-8 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Your Favorite Dishes</h2>
        {favorites.length === 0 ? (
          <EmptyState
            message="No favorite items yet!"
            suggestion="Click the heart icon on food cards to add them to your favorites."
          />
        ) : (
          <div className="flex flex-wrap justify-center items-center gap-6 mt-9">
            {favorites.map((item) => (
              <Card
                key={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                id={item.id}
                type={item.type}
                is_popular={item.is_popular}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
